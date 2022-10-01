import { initializeApp } from "firebase/app";
import { getAuth,signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import {Notify} from "notiflix";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBMQEt78CaPaq3dSOfApmBG4vPslBGp6pQ",
  authDomain: "filmoteka-5bf07.firebaseapp.com",
  databaseURL: "https://filmoteka-5bf07-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "filmoteka-5bf07",
  storageBucket: "filmoteka-5bf07.appspot.com",
  messagingSenderId: "626342412224",
  appId: "1:626342412224:web:b02b966cc92ff4eefbd225",
  measurementId: "G-X5BM5EZZVP"
});

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseConfig);

const formSignUp = document.querySelector('.registration');
const mail = document.querySelector('[name="email"]');
const pass = document.querySelector('[name="password"]')
const loginEl = document.querySelector('.auth')
const logoutEl = document.querySelector('.logout-btn')


formSignUp.addEventListener('submit', formSubmit)

function formSubmit(e) {
  e.preventDefault()
  const userName = mail.value;
  const userPass = pass.value;
  createNewAccount(auth, userName, userPass)
  console.log(userName);
  formSignUp.reset()
}

async function createNewAccount(auth, email, password) {
    try {
        const userCredentials = createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
    }
}
// Log-in users
loginEl.addEventListener('submit', onLoginPageSubmit);

function onLoginPageSubmit(e) {
    e.preventDefault()
    const userEmail = mail.value;
    const userPassword = pass.value;
    if (!userEmail || !userPassword) {
        
        Notify.warning('Please enter your email and password!');
        return;
    }
    loginIntoAccount(auth, userEmail, userPassword);
    Notify.info('You logged in')
    loginEl.reset();
}


async function loginIntoAccount(auth, email, password) {
  try {
    auth = getAuth(firebaseConfig);
    await setPersistence(auth, browserLocalPersistence);
    await signInWithEmailAndPassword(auth, email, password);

    
  } catch (error) {
    console.log(error);
  }
}

// Log out users
// logoutEl.addEventListener('click', logOutFunction)

// function logOutFunction(e) {
//      e.preventDefault()
//     signOut(auth)
// }