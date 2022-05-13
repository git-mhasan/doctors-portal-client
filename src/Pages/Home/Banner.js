import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from "../../assets/images/bg.png";


const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className="hero my-12 bg-cover bg-center">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:max-w-lg rounded-lg shadow-2xl mb-10" alt='' />
                <div>
                    <h1 className="text-4xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;