import React from 'react';
import man from '../../../image/man.png'
const HeaderMain = () => {
    return (
        <div className="row text-center mb-5">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <img  src={man} class="img-fluid" alt="..."/>
            </div>
            <div className="col-md-2"></div>
        </div>
    );
};

export default HeaderMain;