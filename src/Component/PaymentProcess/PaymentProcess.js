import React from 'react';
import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../PaymentForm/PaymentForm';

const stripePromise = loadStripe('pk_test_51Hb7YFIBfHE8UYGO8XtMBP1dP1pMItMjetYBUl6dtqB40VzSmTEnmJPcxpUi9PvxiRMHEGVQezcgU8QgLx1Y2CGJ0062j8dC8U');

const PaymentProcess = ({singleProductShow}) => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm singleProductShow={singleProductShow}></PaymentForm>
        </Elements>
    );
};

export default PaymentProcess;