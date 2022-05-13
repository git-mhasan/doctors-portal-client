import React from 'react';
import InfoCard from './InfoCard';
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {

    const info = [
        {
            _id: 1,
            title: "Opening Hours",
            icon: clock,
            desc: "Lorem consectetur adipisicing elit. Voluptas, porro!"
        },
        {
            _id: 2,
            title: "Visit Our Location",
            icon: marker,
            desc: "Lorem ipsum dolor sit amet. Voluptas, porro!"
        },
        {
            _id: 3,
            title: "Contact Us Now",
            icon: phone,
            desc: "Lorem ipsum dolor sit amet consec. Voluptas, porro!"
        }
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                info.map(item => <InfoCard key={item._id} item={item}></InfoCard>)
            }

            <img src={info[1].icon} alt="" />
        </div>
    );
};

export default Info;