import React, { useState } from 'react';
import ServiceModal from '../ServiceModal/ServiceModal';

const ServicesInfo = ({ser}) => {
    const [modalIsOpen,setIsOpen] =useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
    }
    return (
        <div className="col-md-3 mt-5">
            <img style={{height:"150px",width:"150px",borderRadius:"100%"}} src={ser.image} alt="" className="img-fluid"/>
            <h3>{ser.name}</h3>
            <p>{ser.title}</p>
            <p>$ {ser.price}</p>
            <button onClick={openModal} className="btn btn-dark">View Service</button>
            <ServiceModal ser={ser} modalIsOpen={modalIsOpen} closeModal={closeModal}></ServiceModal>
        </div>
    );
};

export default ServicesInfo;