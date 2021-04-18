import React, { useContext, useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserCog,faPlus,faUserAlt,faLock,faThLarge,faShoppingCart,faCommentDots } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'
import { userContext } from '../../../App';
const Sidebar = () => {
    const [loogeduser,setLoogeduser]=useContext(userContext)
    const[admin,setAdmin]=useState(false)
    useEffect(()=>{
        fetch("https://calm-spire-51951.herokuapp.com/isAdmin",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email:loogeduser.email})
        })
        .then(res=>res.json())
        .then(data=>setAdmin(data))
    },[])
    return (
        <div className=" sidebar text-center coloring p-3 ">
            <h5>Site bar</h5>
            <ul style={{listStyle:"none",paddingLeft:"0px" ,textDecoration:"none"}}>
                
                
               {admin && <div>
                    <li>
                        <Link style={{textDecoration:"none"}} to="/addminPannel"><FontAwesomeIcon icon={faUserCog} />Admin Pannel</Link>
                    </li>
                    
                    <li >
                        <Link style={{textDecoration:"none"}} to="/orderList"><FontAwesomeIcon icon={faLock} />Order List</Link>
                    </li>
                    <li >
                        <Link style={{textDecoration:"none"}} to="/addProduct"><FontAwesomeIcon icon={faPlus} />Add Product</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none"}} to="/addAdmin"><FontAwesomeIcon icon={faUserAlt} />Add Admin</Link>
                    </li>
                    <li >
                        <Link style={{textDecoration:"none"}} to="/manageProduct"><FontAwesomeIcon icon={faThLarge} />Product mange</Link>
                    </li>
               </div>}
                
                {admin ? "":<div>
                    <li >
                        <Link style={{textDecoration:"none"}} to="/orderBook"><FontAwesomeIcon icon={faShoppingCart} />Order book</Link>
                    </li>
                    <li >
                        <Link style={{textDecoration:"none"}} to="/bookingList"><FontAwesomeIcon icon={faLock} />Booking List</Link>
                    </li>
                    <li >
                        <Link style={{textDecoration:"none"}} to="/review"><FontAwesomeIcon icon={faCommentDots} />Review</Link>
                    </li>
                </div>}
               
            </ul>
        </div>
    );
};

export default Sidebar;