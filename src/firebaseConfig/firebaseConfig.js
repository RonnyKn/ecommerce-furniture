// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDsd810PbrFuNA6u1RVljxkii8Hgmluhsc",
  authDomain: "ronshop-c454a.firebaseapp.com",
  projectId: "ronshop-c454a",
  storageBucket: "ronshop-c454a.appspot.com",
  messagingSenderId: "791051554057",
  appId: "1:791051554057:web:52e85099c849d047fdd7d8",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
