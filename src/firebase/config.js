import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: process.env.VUE_APP_GOOGLE_API_KEY,
  authDomain: "vue-live-chat-c05c5.firebaseapp.com",
  projectId: "vue-live-chat-c05c5",
  storageBucket: "vue-live-chat-c05c5.appspot.com",
  messagingSenderId: "797478216598",
  appId: "1:797478216598:web:c420483c2b32edc0f733b7"
};

firebase.initializeApp(firebaseConfig)


const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }