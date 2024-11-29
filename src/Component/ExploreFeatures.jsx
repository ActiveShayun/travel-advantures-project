import exploreImg from '../assets/explore.jpg'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const ExploreFeatures = () => {
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
        <div>
            <section>
                <div className='grid  lg:grid-cols-2 gap-4 mt-20'>
                    <div>
                        <h1 className='text-3xl font-bold mb-2' data-aos="fade-up">
                            Beyond Boundaries The Explorer's Haven</h1>

                        <p data-aos="fade-in" data-aos-delay="200">
                            Embark on a journey of discovery with Beyond Boundaries, your gateway to the most thrilling adventures across the globe. Dive into curated experiences that awaken your spirit of exploration—be it trekking through uncharted wilderness, kayaking hidden waterways, or uncovering the secrets of ancient ruins. Here, every destination tells a story, and every story becomes your next adventure. Ready to redefine your limits? Let’s explore!
                        </p>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <img className='rounded-lg' src={exploreImg} alt="" />
                        <div className='bg-black opacity-40 rounded-lg absolute h-full w-full top-0 left-0'></div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default ExploreFeatures;