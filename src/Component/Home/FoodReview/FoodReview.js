import React from 'react';
import serviceOne from '../../../image/service-one.jpg'
import serviceTwo from '../../../image/service-two.jpg'
import serviceThree from '../../../image/service-three.jpg'

const foodInfo = [
    {
        image: serviceOne,
        name: 'Fast food',
        price: '$20',
    },
    {
        image: serviceTwo,
        name: 'Chiken food',
        price: '$20',
    },
    {
        image: serviceThree,
        name: 'vegetable food',
        price: '$20',
    },
    {
        image: serviceThree,
        name: 'kep food',
        price: '$20',
    },
]
const FoodReview = () => {
    return (
        <section className="text-center mt-5">
            <div>
                <h2>Food review info</h2>
                <small>Testi Food</small>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img style={{ height: "300px" }} src={serviceOne} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img style={{ height: "300px" }} src={serviceTwo} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img style={{ height: "400px" }} src={serviceThree} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoodReview;