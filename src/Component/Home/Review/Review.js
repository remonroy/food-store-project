import React, { useEffect, useState } from 'react';
import ReviewInfo from '../ReviewInfo/ReviewInfo';

const Review = () => {
    const[viewReview,setViewReview]=useState([])
    useEffect(()=>{
        fetch("https://calm-spire-51951.herokuapp.com/reviewCollectionView")
        .then(res=>res.json())
        .then(data=>setViewReview(data))
    },[])
    return (
        <section className="text-center mt-5">
            <div className="">
                
                <h2>All review</h2>
                <small>Ohh My Good..!</small>
            </div>
            <div className="row text-center mt-5 mb-5 offset-md-2">
                {
                    viewReview.map(rev=><ReviewInfo rev={rev}></ReviewInfo>)
                }
            </div>
        </section>
    );
};

export default Review;