import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';


const AddProduct = () => {
    const [info,setInfo]=useState({})
    const [file,setFile]=useState({})
    const[message,setMassage]=useState(false)

    const handleBlur=(e)=>{
        const newInfo={...info}
        newInfo[e.target.name]=e.target.value
        setInfo(newInfo)
        
    }
    const handleImage=(event)=>{
            
        const newData=new FormData()
        newData.set('key','b7f4891bf03cf68cbe4a60233938cbab')
        newData.append('image',event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', newData)
        .then(function (response) {
            // console.log(response.data.data.display_url);
            setFile(response.data.data.display_url);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    const handleSubmit=(e)=>{
        const allInfo={
            name:info.name,
            title:info.title,
            price:info.price,
            image:file,

        }
        fetch('http://localhost:4500/addProduct',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(allInfo)
        })
        .then(res=>res.json())
        .then(data=>setMassage(data))
        
        e.preventDefault();
    }
    return (
        <section styl={{}} className="container-fluid row">
            
            <div  className="col-md-2">
                <Sidebar></Sidebar>
            </div>
           
            <div className="col-md-10 p-2 pr-5 p-3" >
                <h5 className="text-brand">Add Product</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputEmail1">Produt Name</label>
                        <input onChange={handleBlur}  type="name" className="form-control" name="name" placeholder="name" />
                    </div>
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputPassword1">Product Title</label>
                        <input onChange={handleBlur} type="text" className="form-control" name="title" placeholder=" title" />
                    </div>
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputPassword1">Product price</label>
                        <input onChange={handleBlur} type="text" className="form-control" name="price" placeholder="price" />
                    </div>
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputPassword1">Product image</label>
                        <input onChange={handleImage} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                        {
                            message && <p style={{color:"green"}}>Product added successful....!</p>
                        }
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddProduct;