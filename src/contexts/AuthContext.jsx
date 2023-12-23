import {useState, useEffect} from 'react';
import {auth, db} from '../firebase.config';
import {useContext, createContext} from 'react';
import {
  getDocs,
  addDoc,
  collection,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithRedirect,
} from 'firebase/auth';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [firstUser, setFirstUser] = useState(true);
  const [createUserError, setCreateUserError] = useState('');
  const [signInError, setSignInError] = useState('');
  const [googleSignError, setGoogleSignError] = useState('');

  const googleSigIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithRedirect(auth, provider);
    } catch (e) {
      setGoogleSignError(e.message);
      setTimeout(() => {
        setGoogleSignError('');
      }, 5000);
    }
  };

  const SignOut = () => {
    signOut(auth);
  };

  const SignInWithEmail = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      setSignInError(e.message);
      setTimeout(() => {
        setSignInError('');
      }, 5000);
    }
  };

  const CreateUserWithEmail = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      setCreateUserError(e.message);
      setTimeout(() => {
        setCreateUserError('');
      }, 5000);
    }
  };

  const AddDoc = noteContent => {
    const docRef = addDoc(collection(db, user.uid), noteContent);
    console.log(docRef.id);
  };

  const GetDocs = () => {
    return getDocs(collection(db, user.uid));
  };

  const UpdateDoc = (coll, docu, bod, titl) => {
    const docRef = doc(db, coll, docu);

    updateDoc(docRef, {
      title: titl,
      body: bod,
    });
  };

  const DeleteDoc = docu => {
    deleteDoc(doc(db, user.uid, docu));
  };

  const DeleteAllDoc = () => {
    console.log('Hola mundo');
    console.log({db, user: user.uid});

    const coleccionRef = firebase.firestore().collection(coleccion);

    coleccionRef
      .get()
      .then(querySnapshot => {
        const batch = firebase.firestore().batch();

        querySnapshot.forEach(doc => {
          batch.delete(doc.ref);
        });

        return batch.commit();
      })
      .catch(error => {
        console.error('Error al obtener documentos de la colección:', error);
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  useEffect(() => {}, []);

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
        DeleteDoc,
        DeleteAllDoc,
        createUserError,
        signInError,
        googleSignError,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const userAuth = () => {
  return useContext(AuthContext);
};
