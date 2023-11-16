import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyjvmVOwlJRziZOtcQD-EsRwbaB8oPXO0",
  authDomain: "formtrabajaconnosotros.firebaseapp.com",
  projectId: "formtrabajaconnosotros",
  storageBucket: "formtrabajaconnosotros.appspot.com",
  messagingSenderId: "421897463469",
  appId: "1:421897463469:web:a29ad1f837d1681c190824",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const file = getStorage(app);
const text = getFirestore(app);

export { file, text };
