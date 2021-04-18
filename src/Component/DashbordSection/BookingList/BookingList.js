import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import BookingListinfo from '../BookingListinfo/BookingListinfo';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    const [loogeduser,setLoogeduser]=useContext(userContext)
    const[allBookiglist,setAllorbookinglist]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4500/orderLisht?email="+loogeduser.email)
        .then(res=>res.json())
        .then(orderInfo=>setAllorbookinglist(orderInfo,loogeduser.email))
    },[])
    return (
        <section className="container-fluid row background">

            <div  className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-3 ba">
                <div className="row">
                   { 
                        allBookiglist.map(allBook=><BookingListinfo key={allBook._id} allBook={allBook}></BookingListinfo>)
                   }
                </div>
            </div>
        </section>
    );
};

export default BookingList;