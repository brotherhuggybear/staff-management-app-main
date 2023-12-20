// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3HyJ0wSsUkgu_-7xORHAtBnyRYhEDpjU",
    authDomain: "staff-management-app-6f194.firebaseapp.com",
    projectId: "staff-management-app-6f194",
    storageBucket: "staff-management-app-6f194.appspot.com",
    messagingSenderId: "851937154013",
    appId: "1:851937154013:web:6c908b22356c4fe4e05c34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

