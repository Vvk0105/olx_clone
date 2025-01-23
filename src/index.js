import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import {FirebaseContext} from './store/FirebaseContext'
import app from './firebase/config';
import Context from './store/FirebaseContext'
const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(

<FirebaseContext.Provider value={{app}}>
    <Context>
    <App />
    </Context>
</FirebaseContext.Provider>
)
