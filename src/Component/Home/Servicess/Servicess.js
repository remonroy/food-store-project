import React, { useEffect, useState } from 'react';
// import serviceOne from '../../../image/service-one.jpg'
// import serviceTwo from '../../../image/service-two.jpg'
// import serviceThree from '../../../image/service-three.jpg'

import ServicesInfo from '../ServicesInfo/ServicesInfo';
// const serViceInfo=[
//     {
//         image:serviceOne,
//         name:'Fast food',
//         price:'$20',
//     },
//     {
//         image:serviceTwo,
//         name:'Chiken food',
//         price:'$20',
//     },
//     {
//         image:serviceThree,
//         name:'vegetable food',
//         price:'$20',
//     },
//     {
//         image:serviceThree,
//         name:'kep food',
//         price:'$20',
//     },
// ]

const Servicess = () => {
    const[service,setService]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4500/viewProduct")
        .then(res=>res.json())
        .then(data=>{
            
            setService(data)
        })
    },[])
    return (
        <section className="text-center">
            <div className="row">
                <h3>Our srevices</h3>
                <small>food interprice</small>
            </div>
            <div className="row">
                {
                    service.map(ser=><ServicesInfo key={ser._id} ser={ser}></ServicesInfo>)
                }
            </div>
        </section>
    );
};

export default Servicess;