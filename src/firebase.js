import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDFiX4ZdUtW12q5WVewXNcoLZq1uQMAHGE",
  authDomain: "blog-fd065.firebaseapp.com",
  projectId: "blog-fd065",
  storageBucket: "blog-fd065.firebasestorage.app",
  messagingSenderId: "236689630657",
  appId: "1:236689630657:web:57e6def99fe9c99fc33b40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };