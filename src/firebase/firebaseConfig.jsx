import { initializeApp } from "firebase/app";
import { getFirestore,collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCyEmgW34cmuVruIsLsuh_0nUh82o0mlVk",
  authDomain: "medical-store-project.firebaseapp.com",
  projectId: "medical-store-project",
  storageBucket: "medical-store-project.appspot.com",
  messagingSenderId: "1013436893554",
  appId: "1:1013436893554:web:decb295ebe60d8c542f5eb"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)

const userSignInCollection = collection(fireDB, 'users');
const TotalProducts = collection(fireDB, 'products');
const getTotalUsersSignedIn = async () => {
  try {
    const snapshot = await getDocs(userSignInCollection);
    return snapshot.size;
  }
   catch (error) {
    console.error('Error fetching user sign-ins:', error);
    return 0;
  }
};
const getTotalProducts = async () => {
  try {
    const snapshot = await getDocs(TotalProducts);
    return snapshot.size;
  }
   catch (error) {
    console.error('Error fetching user sign-ins:', error);
    return 0;
  }
};
export {fireDB, auth,getTotalUsersSignedIn, getTotalProducts}