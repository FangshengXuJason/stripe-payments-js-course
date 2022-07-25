import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import { FirebaseAppProvider } from 'reactfire'

//UPDATED
export const firebaseConfig = {
  apiKey: 'AIzaSyBP2O_1_yZ2vRjHO-FXbc8T1yzISO0xa3c',
  authDomain: 'test-project-1-d10d8.firebaseapp.com',
  projectId: 'test-project-1-d10d8',
  storageBucket: 'test-project-1-d10d8.appspot.com',
  messagingSenderId: '67946379645',
  appId: '1:67946379645:web:cfe571bfbbe2a86f25b414',
  measurementId: 'G-3BCFY2YNPD',
}

export const stripePromise = loadStripe(
  'pk_test_51LO0sKEVBJjeleBirX3UP9tkvlB6H6elbhFoUdTILJi9lTTb5ngk5Qwd6awOUhJbQZG9BBZPLARNMbw7qk4MTc4800qd6VOCza'
)

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
