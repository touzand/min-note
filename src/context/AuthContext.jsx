import { useState, useEffect } from "react";
import { auth,db } from "../firebase.config";
import { useContext, createContext } from "react";
import {getDocs,addDoc,collection,updateDoc,doc, deleteDoc} from 'firebase/firestore'
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

  const UpdateDoc = (coll,docu,bod,titl) => {
    const docRef = doc(db,coll,docu) 

    updateDoc(docRef,{
      title:titl,
      body:bod,
    })
  }

  const DeleteDoc = (docu) => {
    deleteDoc(doc(db,user.uid,docu))
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
        AddDoc,
        UpdateDoc,
        DeleteDoc
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const userAuth = () => {
  return useContext(AuthContext);
};
