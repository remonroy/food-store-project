import React from 'react';
import FoodReview from '../FoodReview/FoodReview';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Logincomponent from '../Logincomponent/Logincomponent';
import Review from '../Review/Review';
import Servicess from '../Servicess/Servicess';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Servicess></Servicess>
            <FoodReview></FoodReview>
            <Review></Review>
            <Logincomponent></Logincomponent>
            <Footer></Footer>
        </div>
    );
};

export default Home;