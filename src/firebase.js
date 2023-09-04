// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAAYzIkB8tI7C-eqvACHN3XknmLUmqmTkY',
  authDomain: 'trortranscibe-d3fea.firebaseapp.com',
  projectId: 'trortranscibe-d3fea',
  storageBucket: 'trortranscibe-d3fea.appspot.com',
  messagingSenderId: '320749736217',
  appId: '1:320749736217:web:66d692157d4efff3f9f588',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export default app
