import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const ServiceCard = ({ service }) => {
    // console.log(service);
    const { id, image, adventureTitle, ecoFriendlyFeatures } = service

    useEffect(() => {
        AOS.init({
            offset: 120, // Offset (in px) from the original trigger point
            delay: 0, // Delay in milliseconds
            duration: 400, // Duration of the animation (in ms)
            easing: "ease", // Default easing for AOS animations
            once: false, // Whether animation should happen only once
            mirror: false, // Whether elements should animate out while scrolling past them
            anchorPlacement: "left-right", // Defines which position of the element regarding to window should trigger the animation
        });
    }, []);

    return (
        <div className="card card-compact bg-base-100 shadow-xl "

        >
            <figure className="relative">
                <img
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className=" h-[300px] lg:h-[200px] w-full object-cover"
                    src={image}
                    alt="adventure" />
                <div className='bg-black opacity-40 rounded-lg absolute h-full w-full top-0 left-0'></div>
            </figure>
            <div className="card-body">
                <h2 className="card-title"

                >{adventureTitle}</h2>
                <p>{
                    ecoFriendlyFeatures.map(feature => <li>{feature}</li>)
                }</p>
                <div className="card-actions justify-end">
                    <NavLink to={`/details/${id}`}
                        className='py-2 px-10 rounded-xl bg-gradient-to-r from-gray-800 to-green-800 text-white font-bold  mt-3'>Explore Now</NavLink>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;