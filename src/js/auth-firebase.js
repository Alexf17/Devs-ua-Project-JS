import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from 'firebase/auth';
import { Notify } from 'notiflix';
import { refs } from './refs';

const firebaseConfig = initializeApp({
  apiKey: 'AIzaSyBMQEt78CaPaq3dSOfApmBG4vPslBGp6pQ',
  authDomain: 'filmoteka-5bf07.firebaseapp.com',
  databaseURL:
    'https://filmoteka-5bf07-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'filmoteka-5bf07',
  storageBucket: 'filmoteka-5bf07.appspot.com',
  messagingSenderId: '626342412224',
  appId: '1:626342412224:web:b02b966cc92ff4eefbd225',
  measurementId: 'G-X5BM5EZZVP',
});

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseConfig);

const formSignUp = document.querySelector('.registration');
const mail = document.querySelector('[name="email"]');
const pass = document.querySelector('[name="password"]');
const signUpName = document.querySelector('[name="sign-up-name"]');
const signUpEmail = document.querySelector('[name="sign-up-email"]');
const signUpPass = document.querySelector('[name="sign-up-password"]');
const loginEl = document.querySelector('.auth');
const logoutEl = document.querySelector('#log-out');
const myLibrary = document.querySelector('.library');
const userCabinet = document.querySelector('.icon-autorization');
const userLogout = document.querySelector('.icon-logout');

formSignUp.addEventListener('submit', formSubmit);
function formSubmit(e) {
  e.preventDefault();
  const userName = signUpName.value;
  const userEmail = signUpEmail.value;
  const userPass = signUpPass.value;
  if (!userEmail || !userPass) {
    Notify.warning('Please enter your email and password!');
    return;
  }
  createNewAccount(auth, userEmail, userPass);

  Notify.success(`Congratulation, ${userName}! You did it!`);
  formSignUp.reset();
  formSignUp.removeEventListener('submit', formSubmit);
  refs.modalRegistrationBackdrop.classList.add('visually-hidden');
}

async function createNewAccount(auth, email, password) {
  try {
    const userCredentials = createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  } catch (error) {
    console.log(error);
  }
}
// Log-in users
loginEl.addEventListener('submit', onLoginPageSubmit);

function onLoginPageSubmit(e) {
  e.preventDefault();
  const userEmail = mail.value;
  const userPassword = pass.value;
  if (!userEmail || !userPassword) {
    Notify.warning('Please enter your email and password!');
    return;
  }
  loginIntoAccount(auth, userEmail, userPassword);
  loginEl.reset();
  loginEl.removeEventListener('submit', onLoginPageSubmit);
  refs.modalAuthorizationBackdrop.classList.add('visually-hidden');
}

onAuthStateChanged(auth, user => {
  if (user) {
    refs.isLogin = true;
    myLibrary.classList.remove('visually-hidden');
    userCabinet.classList.add('visually-hidden');
    userLogout.classList.toggle('visually-hidden');
    loginEl.removeEventListener('submit', onLoginPageSubmit);
  } else {
    myLibrary.classList.add('visually-hidden');
    // refs.modalAuthorizationBackdrop.classList.add('visually-hidden');
  }
});

async function loginIntoAccount(auth, email, password) {
  try {
    auth = getAuth(firebaseConfig);
    await setPersistence(auth, browserLocalPersistence);
    await signInWithEmailAndPassword(auth, email, password);
    Notify.info(`Welcome back, ${email}! You successfully logged in.`);
  } catch (error) {
    console.log(error);
    Notify.warning('Email or password wrong! Please, try again.');
  }
}

// Log out users
userLogout.addEventListener('click', logOutFunction);

function logOutFunction(e) {
  e.preventDefault();
  signOut(auth);
  Notify.failure('Sorry, you had to go! Come back soon.');
  userLogout.classList.add('visually-hidden');
  userCabinet.classList.remove('visually-hidden');
  refs.modalRegistrationBackdrop.classList.add('visually-hidden');
}
