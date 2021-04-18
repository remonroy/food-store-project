import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';



const MangeProduct = () => {
    const[mangProduct,setManageproduct]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4500/viewProduct")
        .then(res=>res.json())
        .then(data=>setManageproduct(data))
    },[])
    const handleDelete=(id)=>{
        fetch(`http://localhost:4500/productDelete/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(deleting=>{
            console.log(deleting);
            window.location.reload();
        })
    }
    return (
        <section className="container-fluid row background">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-3 ba">
                <table className="table table-borderless text-center">
                    <thead>
                        <tr>
                        <th className="text-secondary text-left" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Title</th>
                        <th className="text-secondary" scope="col">Price</th>
                        <th className="text-secondary" scope="col">Image</th>
                        
                        </tr>
                    </thead>
                    <tbody >

                        {
                            mangProduct.map((mangeP, index) => 
                                
                            <tr style={{borderBottom:"1px solid #ddd"}}>
                                <td>{index + 1}</td>
                                <td>{mangeP.name}</td>
                                <td>{mangeP.title}</td>
                                <td>$ {mangeP.price}</td>
                                <td><img style={{height:"50px"}} className="img-build" src={mangeP.image} alt=""/></td>
                                <td><button className="btn btn-danger" onClick={()=>handleDelete(mangeP._id)}>Delete</button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MangeProduct;