import React,{useState,useEffect} from 'react';
import { db } from '../../firebase/config';
import { collection, getDocs, QuerySnapshot } from "firebase/firestore";
import Heart from '../../assets/Heart';
import './Post.css';

function Posts() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
      getDocs(collection(db,'products'))
      .then((querySnapshot)=>{
        const productList = querySnapshot.docs.map((doc)=>({
          id:doc.id,
          ...doc.data(),
        }))
        setProducts(productList)
        console.log(productList);
      })
  },[])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
      { products.map(product=>{
        return(
      <div
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.catagory}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>
      )})
      }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
