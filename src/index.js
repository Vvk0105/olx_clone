import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change in import path
import App from './App';
import {FirebaseContext} from './store/FirebaseContext'
import app from './firebase/config';
const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot

root.render(

<FirebaseContext.Provider value={{app}}>
    <App />
</FirebaseContext.Provider>
)

