import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import initFirebaseAuthentication from "./Firebase/firebase.init";

initFirebaseAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [error, seterror] = useState("");

  const auth = getAuth();
  // signin with google
  const signInUsingGoogle = () => {
    const gooleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, gooleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        seterror("");
      })
      .catch((error) => {
        seterror("Please login with email or google account?");
      });
  };
  // user logout function
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        seterror("");
      })
      .catch((error) => {
        seterror(error.message);
      });
  };
  return {
    user,
    signInUsingGoogle,
    logout,
  };
};

export default useFirebase;
