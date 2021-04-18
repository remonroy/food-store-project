import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import {Link} from "react-router-dom";
import { userContext } from '../../../App';

const OrderList = () => {
    const [loogeduser,setLoogeduser]=useContext(userContext)
    const[allOrderlist,setAllorderlist]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4500/orderLisht?email="+loogeduser.email)
        .then(res=>res.json())
        .then(orderInfo=>setAllorderlist(orderInfo))
    },[])
    return ( 
        <section className="container-fluid row background">

            <div  className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-3 ba">
                <table className="table table-borderless text-center">
                    <thead>
                        <tr>
                        <th className="text-secondary text-left" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Email</th>
                        <th className="text-secondary" scope="col">Service</th>
                        <th className="text-secondary" scope="col">Pay with</th>
                        <th className="text-secondary" scope="col">Status</th>
                        
                        </tr>
                    </thead>
                    <tbody >

                        {
                            allOrderlist.map((mangeP, index) => 
                                
                            <tr style={{borderBottom:"1px solid #ddd"}}>
                                <td>{index + 1}</td>
                                <td>{mangeP.name}</td>
                                <td>{mangeP.email}</td>
                                <td>{mangeP.singleProductShow.name}</td>
                                <td>{mangeP.paymentId} Card</td>
                                <td>
                                    <select style={{border:"none",outline:"none"}} name="" id="">
                                        <option value="">Pending</option>
                                        <option value="">Done</option>
                                    </select>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default OrderList;