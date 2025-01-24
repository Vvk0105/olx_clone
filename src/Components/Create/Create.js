import React, { Fragment,useState,useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../../store/FirebaseContext'
import { db } from '../../firebase/config';
import { collection, addDoc } from "firebase/firestore";



const Create = () => {
  const history = useNavigate()
  const {user} = useContext(AuthContext)
  const [name,setName] = useState('')
  const [catagory,setCatagory] = useState('')
  const [price,setPrice] = useState('')
  const [image,setImage] = useState(null)

  const date = new Date()
  const handleSubmit =()=>{
    
    addDoc(collection(db, 'products'),{
      userId: user.uid,
      name,
      catagory,
      price,
      createdAt:date.toDateString()
    })
    history('/')
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
        
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=> setName(e.target.value) }
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={catagory}
              onChange={(e)=> setCatagory(e.target.value) }
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input 
              className="input"
              type="number"
              value={price}
              onChange={(e)=>setPrice(e.target.value) }
              id="fname" 
              name="Price" />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : 'Null'}></img>
        
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;