import React from 'react';

const InfoCard = ({ item }) => {
    const { icon, title, desc } = item;
    return (
        <div className="lg:max-w-lg card lg:card-side shadow-xl bg-gradient-to-r from-secondary to-primary">
            <figure className='flex-none mt-6 lg:mt-0 md:ml-6'><img src={icon} alt="icon" /></figure>
            <div className="flex-1 card-body items-center text-center md:items-start md:text-left">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default InfoCard;