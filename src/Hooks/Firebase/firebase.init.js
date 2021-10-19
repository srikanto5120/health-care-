import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const initFirebaseAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default initFirebaseAuthentication;
