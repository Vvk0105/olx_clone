import { useState,useContext } from 'react';
import React from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase/config';
import {useNavigate} from 'react-router-dom'


function Login() {

  const history = useNavigate()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const handleLogin = (e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
    .then(()=>{
      history('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>{
          history('/signup')
        }}>Signup</a>
      </div>
    </div>
  );
}

export default Login;