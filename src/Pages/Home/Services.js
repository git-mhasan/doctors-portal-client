import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from "../../assets/images/fluoride.png"
import cavity from "../../assets/images/cavity.png"
import whitening from "../../assets/images/whitening.png"

const Services = () => {

    const services = [
        {
            _id: 1,
            title: "Fluoride Treatment",
            icon: fluoride,
            desc: "Lorem consectetur adipisicing elit. Voluptas, porro!"
        },
        {
            _id: 2,
            title: "Cavity Filling",
            icon: cavity,
            desc: "Lorem ipsum dolor sit amet. Voluptas, porro!"
        },
        {
            _id: 3,
            title: "Teeth Whitening",
            icon: whitening,
            desc: "Lorem ipsum dolor sit amet consec. Voluptas, porro!"
        }
    ]

    return (
        <div>
            <div className='text-center my-8'>
                <h3 className='text-primary font-bold text-lg'>OUR SERVICES</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;