import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import india from '../assets/india.jpg'
import italy from '../assets/italy.webp'
import usa from '../assets/usa.webp'
import slide2 from '../assets/slide2-1.jpg'
import slide23 from '../assets/slide2-2.jpg'
import slide24 from '../assets/slide2-4.jpg'
import slide21 from '../assets/slide2-1.jpg'
import slide42 from '../assets/slide4-2.jpg'
import slide44 from '../assets/slide4-3.jpg'
import slide31 from '../assets/slide3-1.jpg'
import slide34 from '../assets/slide3-3.jpg'




const Slider = () => {
  const [sliderRef] = useKeenSlider(
    { loop: true },
    [
      (slider) => {
        let timeout;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on('created', nextTimeout);
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <div className='mt-20'>
      <h2 className='text-3xl font-bold text-center mb-3'>Explore Our Top Destinations</h2>
      <p className=' text-center w-2/3 mx-auto mb-6'>Discover breathtaking locations around the world, from hidden gems to popular hot spots. Whether you're looking for a tranquil getaway or an adventurous escape, our curated destinations offer something for every type of traveler. Start planning your next adventure today!</p>
      <div ref={sliderRef} className="keen-slider rounded-lg">
        <div className="keen-slider__slide space-x-3 mr-2 relative">
          <img className='h-[185px] object-cover w-[300px]' src={italy} alt="" />
          <img className='h-[185px] object-cover w-[300px]' src={india} alt="" />
          <img className='h-[185px] object-cover w-[300px]' src={usa} alt="" />
          <img className='h-[185px] object-cover w-[300px]' src={italy} alt="" />
        </div>
        <div className="keen-slider__slide space-x-3">
          <img className='h-[185px] object-cover w-[300px]' src={slide21} alt="" />
          <img className='h-[185px] object-cover w-[300px]' src={slide23} alt="" />
          <img className='h-[185px] object-cover w-[300px]' src={slide24} alt="" />
          <img className='h-[185px] object-cover w-[300px]' src={slide2} alt="" />
        </div>
        * <div className="keen-slider__slide space-x-3 ">
          <img className='h-[185px] object-cover w-[300px]' src={slide31} alt="" />
          <img className='h-[185px] object-cover w-[300px]' src={slide34} alt="" />
          <img className='h-[185px] object-cover w-[300px]' src={slide42} alt="" />
          <img className='h-[185px] object-cover w-[300px]' src={slide44} alt="" />
        </div>
        <div className='bg-black opacity-40 rounded-lg absolute h-full w-full top-0 left-0'></div>
      </div>
    </div>

  );

};

export default Slider;