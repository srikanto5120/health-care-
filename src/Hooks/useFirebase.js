import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initFirebaseAuthentication from "./Firebase/firebase.init";

initFirebaseAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  // const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth();
  const gooleProvider = new GoogleAuthProvider();

  // signin with google
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, gooleProvider);
  };
  //get name
  function getName(e) {
    setName(e?.target?.value);
  }
  // get Email
  function getEmail(e) {
    setEmail(e?.target?.value);
  }
  //get password
  function getPassword(e) {
    setPassword(e?.target?.value);
  }
  // get photo url
  function getPhotoURL(e) {
    setPhoto(e?.target?.value);
  }
  // signin with email password
  const signinWithEmail = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setNameAndPhotUrl();
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //set name and photo url
  function setNameAndPhotUrl() {
    updateProfile(auth.currentUser, {
      displayName: { name },
      photoURL: { photo },
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  //observe   on user  state changed
  useEffect(() => {
    const unsubcribed = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser({});
        }
      }).finally(setIsLoading(false));
    };
    return () => unsubcribed;
  }, []);
  // user logout function
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return {
    user,
    getName,
    getPhotoURL,
    getEmail,
    setUser,
    setError,
    getPassword,
    isLoading,
    error,
    signinWithEmail,
    logout,
    signInUsingGoogle,
  };
};

export default useFirebase;
