import React,{useContext,useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import {AuthContext,FirebaseContext} from './store/FirebaseContext'
import { getAuth, onAuthStateChanged } from "firebase/auth";
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  const {setUser}=useContext(AuthContext)
  const {app} = useContext(FirebaseContext)
  useEffect(()=>{
    const auth = getAuth(app)
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;