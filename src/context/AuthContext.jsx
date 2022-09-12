import { useState, useEffect } from "react";
import { auth,db } from "../firebase.config";
import { useContext, createContext } from "react";
import {getDocs,addDoc,collection} from 'firebase/firestore'
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleSigIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const SignOut = () => {
    signOut(auth);
  };

  const SignInWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const CreateUserWithEmail = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const AddDoc = (title,body,bg,date) => {
    const docRef = addDoc(collection(db,user.uid),{
      title,
      body,
      bg,
      date
    }) 
    console.log(docRef.id);
  }

  const GetDocs = () => {
    return getDocs(collection(db,user.uid))
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        googleSigIn,
        SignOut,
        SignInWithEmail,
        CreateUserWithEmail,
        GetDocs,
        AddDoc
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const userAuth = () => {
  return useContext(AuthContext);
};
