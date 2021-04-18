import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { userContext } from '../../../App';
import PaymentProcess from '../../PaymentProcess/PaymentProcess';

const UserOrder = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

    };


    const[singleProductShow,setSingleProductShow]=useState([])
    let {id}=useParams()

    useEffect(()=>{
        fetch(`https://calm-spire-51951.herokuapp.com/sigleProductshow/${id}`)
        .then(res=>res.json())
        .then(singleInfo=>{
            console.log(singleInfo);
            setSingleProductShow(singleInfo[0])
        })
    },[])

    
    const [loogeduser,setLoogeduser]=useContext(userContext)

    return (
        <section className="container-fluid row background">
            <div className="col-md-2">
               <Sidebar></Sidebar>                 
            </div>
            <div className="col-md-10 p-3 ba">
                
                    <input className="form-control" defaultValue={loogeduser.name} {...register("name")} />
                    <br/>
                    <input className="form-control" defaultValue={loogeduser.email} {...register("email")} />
                    <br/>
                    <input className="form-control" defaultValue={singleProductShow.name} {...register("servicename")} />
                    <br/>
                    <h1 className="text-center">Please Payment</h1>
                    <br/>
                
                <PaymentProcess singleProductShow={singleProductShow}></PaymentProcess>
            </div>
        </section>
    );
};

export default UserOrder;