import React from 'react';
import img from '../../../image/bannder.jpg'
import './BookingListinfo.css'
const BookingListinfo = ({allBook}) => {
    return (
        <div className="main col-md-4 p-2">
            <div style={{border:"1px solid "}} className="borderingg">
                <div className="over">
                    <div className="sitebar">
                        <img style={{height:"86px",width:"86px",borderRadius:"50%"}} src={allBook.singleProductShow.image} alt=""/>
                    </div>
                    <div className="rightbar">
                        <small>Pending</small>
                    </div>
                </div>
                <h4>{allBook.singleProductShow.name}</h4>
                <p>{allBook.singleProductShow.title}</p>
            </div>
        </div>
    );
};

export default BookingListinfo;