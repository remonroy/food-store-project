import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddAmin = () => {
    const [info,setInfo]=useState({})
    const[message,setMessage]=useState(false)
    const handleBlur=(e)=>{
        const newInfo={...info}
        newInfo[e.target.name]=e.target.value
        setInfo(newInfo)
    }

    const handleSubmit=(e)=>{
        const allInfo={
            admin:info.admin,
        }
        fetch('https://calm-spire-51951.herokuapp.com/addAdmin',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(allInfo)
        })
        .then(res=>res.json())
        .then(data=>setMessage(data))
        e.preventDefault();
    }
    return (
        <section className="container-fluid row">
            
            <div  className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-3">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputEmail1">Add Admin</label>
                        <input onChange={handleBlur}  type="text" className="mt-2 form-control" name="admin" placeholder="add admin" />
                       { 
                        message && <p style={{color:"green"}}>admin added successful.....</p>
                       }
                    </div>
                   
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddAmin;