import React from 'react';
import './ReviewInfo.css'
const ReviewInfo = ({rev}) => {
    return (
        <div style={{border:"1px solid #ddd",boxShadow:"5px 10px 18px #888888",padding:"15px",margin:"17px"}} className="transformingg carding col-md-3">
            <div className="">
                <img style={{height:"150px",width:"150px",borderRadius:"100%"}} src={rev.image} alt=""/>
                <h5>{rev.name}</h5>
                <h5>{rev.qualiti}</h5>
                <p>{rev.price}</p>
                <small>review :{rev.review}</small>
            </div>
        </div>
    );
};

export default ReviewInfo;