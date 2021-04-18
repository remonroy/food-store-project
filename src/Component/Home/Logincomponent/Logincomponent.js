import React from 'react';
import './Logincomponent.css'
const Logincomponent = () => {
    return (
        <section  className="bakcground">
            <div className=" text text-center  mt-5 mb-5">
                <p style={{color:"#1CC7C1"}}>Contact us</p>
                <h1 style={{color:"#ddd"}}>Always contact with us</h1>
               
            </div>
           
            <div className="row text-center">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                
                    <input className="form-control" type="text" placeholder="Enter Email *" name="" id=""/>
                    <input  className="mt-3 mb-3 form-control" placeholder="Enter subject *"  type="text" name="" id=""/>
                    <textarea className="form-control mb-3" placeholder="Enter your message *" name="" id="" cols="10" rows="5"></textarea>
                    <button className='btn btn-primary '>Submit</button>
                
                </div>
                <div className="col-md-3"></div>
            </div>
            
            
        </section>
    );
};

export default Logincomponent;