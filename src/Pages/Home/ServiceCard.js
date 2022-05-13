import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, icon, desc } = service;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={icon} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default ServiceCard;