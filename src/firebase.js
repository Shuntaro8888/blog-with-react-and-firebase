//ReactとFireBaseを繋げる接着剤のようなファイル（FireBaseモジュール）

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; //getAuth(認証するための関数)
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
const auth = getAuth(app); //認証の初期化
const provider = new GoogleAuthProvider(); //インスタンス化
const db = getFirestore(app); //DBの初期化

export { auth, provider, db };