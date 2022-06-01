
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZy5MgIbi3uTiD4Rh5f4D14FiwJCWzAlM",
  authDomain: "skynetproject-351317.firebaseapp.com",
  projectId: "skynetproject-351317",
  storageBucket: "skynetproject-351317.appspot.com",
  messagingSenderId: "989494279939",
  appId: "1:989494279939:web:9facfa58a90f3d2fdbb336",
  measurementId: "G-TXQ7J9XHC4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};