import React, { useContext, useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { userContext } from '../../App';

const PaymentForm = ({singleProductShow}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError,setPaymentError]=useState(null)
    const [paymentSuccess,setPaymentsuccess]=useState(null)
    const[paymentId,setPaymentid]=useState({})
    
    const [loogeduser,setLoogeduser]=useContext(userContext)
    
    const handlePayment = async (event) => {
        
      
        event.preventDefault();
      if (!stripe || !elements) {
     
        return;
      }
      
      const cardElement = elements.getElement(CardElement);
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
  
      if (error) {
        setPaymentError(error.message)
        setPaymentsuccess(null)
      } else {
        setPaymentid(paymentMethod.card.brand)
        setPaymentsuccess(paymentMethod.id)
        setPaymentError(null)
        console.log(paymentMethod);
      }

      
    };
    const handleSubmit=(event)=>{
      const orderServices={...loogeduser,singleProductShow,paymentId}
        
        fetch("https://calm-spire-51951.herokuapp.com/singleProductOrder",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(orderServices)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
      })
      event.preventDefault();
    }
  
    return (
      <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <br/>
                <button className="m-1" onClick={handlePayment} type="submit" disabled={!stripe}>
                Pay
                </button>
                <input type="submit" value="submit"/>
            </form>
            {
                paymentError && <p style={{color:"red"}}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{color:"green"}}>Your payment successful...!</p>
            }
      </div>
    );
};

export default PaymentForm;