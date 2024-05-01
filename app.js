
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut as firebaseSignOut } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA4jE0JXTod5Nt0-1nTyt_ovFVhnuyna2A",
  authDomain: "super-mall-web-applicati-daf6e.firebaseapp.com",
  projectId: "super-mall-web-applicati-daf6e",
  storageBucket: "super-mall-web-applicati-daf6e.appspot.com",
  messagingSenderId: "922598774938",
  appId: "1:922598774938:web:ed4d6972640d3c0cae6723",
  measurementId: "G-NC0YLZXXCL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function signIn() {
    const email = prompt("Enter email:");
    const password = prompt("Enter password:");
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Signed in as:", userCredential.user.email);
        })
        .catch((error) => {
            console.error("Authentication failed:", error.message);
        });
}

function signOut() {
    firebaseSignOut(auth)
        .then(() => console.log("Signed out successfully"))
        .catch((error) => console.error("Sign out failed:", error));
}

async function createShop() {
    const shopName = document.getElementById('shop-name').value;
    try {
        const docRef = await addDoc(collection(db, "shops"), {
            name: shopName
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

window.signIn = signIn;
window.signOut = signOut;
window.createShop = createShop;
