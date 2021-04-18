import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
const ReviewSend = () => {
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
        const allreviewInfo={
            name:info.name,
            qualiti:info.qualiti,
            price:info.discription,
            review:info.review,
            image:file,
        }
        fetch('https://calm-spire-51951.herokuapp.com/reviewCollection',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(allreviewInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            window.location.reload();
            setMassage(data)
        })
        
        e.preventDefault();
    }
    return (
        <section styl={{}} className="container-fluid row">
            
            <div  className="col-md-2">
                <Sidebar></Sidebar>
            </div>
           
            <div className="col-md-10 p-2 pr-5 p-3" >
                <h5 className="text-brand">Add Your Review</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputEmail1">Your Name</label>
                        <input onChange={handleBlur}  type="name" className="form-control" name="name" placeholder="name" />
                    </div>
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputPassword1">Service Qualiti</label>
                        <input onChange={handleBlur} type="text" className="form-control" name="qualiti" placeholder="Service Qualiti" />
                    </div>
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputPassword1">Discription</label>
                        <input onChange={handleBlur} type="text" className="form-control" name="discription" placeholder="discription" />
                    </div>
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputPassword1">Add Your review</label>
                        <input onChange={handleBlur} type="text" className="form-control" name="review" placeholder="review" />
                    </div>
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputPassword1">Your image</label>
                        <input onChange={handleImage} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                        {
                            message && <p style={{color:"green"}}>Your review added successful....!</p>
                        }
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default ReviewSend;