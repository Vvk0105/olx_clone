import React,{useContext,useState,useEffect} from 'react';
import { db } from '../../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";
import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/FirebaseContext';
function View() {
  const [userDetails,setUserDetails] = useState()
  const {postDetails} = useContext(PostContext)
  const {userId} = postDetails
  useEffect(()=>{
    const fetchUserDetails = async () => {
      const userQuery = query(collection(db, 'users'), where('id', '==', userId));
      const querySnapshot = await getDocs(userQuery);
      querySnapshot.forEach((doc) => {
        setUserDetails(doc.data());
      });
    };

    fetchUserDetails();
  }, [userId]);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src="../../../Images/R15V3.jpg"
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.catagory}</p>
          <span>{postDetails.createdAt}</span>
        </div>
       {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
