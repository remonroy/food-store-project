import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Modal from 'react-modal';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')

const ServiceModal = ({modalIsOpen,closeModal,ser}) => {
    
    return (
        <div>
            
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <div className="text-center">
                <img style={{height:"150px",width:"150px",borderRadius:"100%"}} src={ser.image} alt="" className="img-fluid"/>
                <h4>{ser.name}</h4>
                <p>{ser.title}</p>
                <p>$ {ser.price}</p>
                <Link to={`/orderBook/${ser._id}`}><button className="btn btn-primary">Check out</button></Link>
          </div>
        </Modal>
        </div>
    );
};

export default ServiceModal;