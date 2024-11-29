import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css"; // Core styles

const Banner = () => {

    return (

        <div className="my-10 rounded-lg ">
            <AwesomeSlider className="lg:h-[500px]  flex rounded-lg">
                {/* <div data-src="/path/to/image-0.jpg" /> */}

                <div className="bg-hero4 bg-cover z-10 bg-center w-full h-full flex  items-center rounded-lg">
                    <div className="text-center px-4 lg:px-0">
                        <h3 className='text-3xl text-white font-bold mb-3  '>
                            <span className='text-white lg:block'> Discover </span>
                            Your Gateway to Earth’s Hidden Treasures</h3>
                        <p className='text-white lg:w-3/4 mx-auto'>Immerse yourself in untouched landscapes and breathtaking scenery.
                            Embark on journeys that take you deep into the heart of nature, from lush forests and majestic mountains to serene rivers and coastal havens. Witness the beauty of wildlife and the magic of the natural world as you reconnect with the Earth in its purest form.</p>
                        <button className='py-2 px-4 rounded-xl bg-gradient-to-r from-gray-800 to-green-800 text-white font-bold w-[200px] mt-3'>Details</button>
                    </div>
                </div>

                {/* slider 2 */}
                <div id="item2" className="carousel-item w-full h-full bg-hero2 bg-cover bg-center relative z-20 flex items-center justify-center">
                    <div className="px-4 lg:px-0">
                        <h2 className='text-3xl text-white text-center font-bold mb-3'>
                            <span className='text-white lg:block'>Adventurer</span>
                            That Connect You to Nature</h2>
                        <p className='text-white lg:w-3/4 mx-auto text-center'>
                            Find your perfect escape, from tranquil trails to adrenaline-pumping thrills.
                            Whether you’re looking to hike through serene woodlands, kayak along sparkling rivers, or zipline over verdant canopies, we cater to all adventure levels. Solo travelers, families, and groups alike will find unforgettable experiences tailored to their spirit of exploration.
                        </p>
                    </div>
                    <div className="bg-black -z-10 opacity-30 w-full h-full absolute top-0 left-0"></div>
                </div>

                {/* slider 3 */}
                <div id="item3" className="carousel-item w-full h-full bg-hero3 bg-cover relative z-20 flex items-center justify-center">
                    <div className="px-4 lg:px-0">
                        <h2 className='text-3xl text-white text-center font-bold mb-3'>
                            <span className='text-white lg:block'>Thrills,</span>
                            Tranquility, and Sustainability Combined</h2>
                        <p className='text-white lg:w-3/4 mx-auto text-center'> Explore with purpose and protect the planet while you adventure.
                            Our eco-tours are designed to leave a positive impact on the environment and local communities. From responsible tourism practices to supporting conservation efforts, every journey with us is a step towards preserving our world for future generations.</p>
                    </div>
                    <div className="bg-black -z-10 opacity-30 w-full h-full absolute top-0 left-0"></div>
                </div>
            </AwesomeSlider>
        </div>
    );
};

export default Banner