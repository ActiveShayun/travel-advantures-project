
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const ServiceDetails = () => {
    const singleData = useLoaderData()
    const navigate = useNavigate()
    const [modal, setModal] = useState(false)
    // console.log('DetailsCard', singleData);

    const { image, adventureTitle, categoryName, shortDescription, adventureCost, bookingAvailability, location, duration, adventureLevel, includedItems, ecoFriendlyFeatures, maxGroupSize, specialInstructions } = singleData

    const handleMeeting = (modal) => {
        const d = new Date();
        // console.log(d);
        let hour = d.getHours();

        const runTime = 10
        const endTime = 20

        if (hour >= runTime && hour < endTime) {
            toast('if you want to contact me you can contact me between 10am to 8pm.  ')
        } else {
            window.open("https://meet.google.com/landing")
           
        }
    }


    return (
         <div className="card card-compact bg-base-100  shadow-xl mt-10">
            <figure className="relative">
               <img className="w-full"
                    src={image}
                    alt="Shoes"  />
               <div className="bg-black opacity-30 absolute top-0 left-0 h-full w-full"></div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{adventureTitle}</h2>
                <p className="text-lg">{categoryName}</p>
                <p className="text-lg">{shortDescription}</p>
                <p className="text-lg">Cost : {adventureCost} $</p>
                <p className="text-lg flex items-center gap-3"><FaLocationDot /> {location} </p>
                <p className="text-lg">Duration : {duration}.</p>
                <p className="text-lg">adventureLevel : {adventureLevel}.</p>
                <p className="text-lg">
                    {
                        includedItems.map(item => <li>{item}</li>)
                    }
                </p>
                <p>
                    {
                        ecoFriendlyFeatures.map(feature => <span className="text-lg"> # {feature}</span>)
                    }
                </p>
                <p className="text-lg">Max Group people {maxGroupSize}.</p>
                <p>
                    {
                        specialInstructions.map(s => <span className="text-lg"> # {s}</span>)
                    }
                </p>
                <div className="card-actions justify-start">
                    <button onClick={() => handleMeeting(modal)} className='py-2 px-10 rounded-xl bg-gradient-to-r from-gray-800 to-green-800 text-white font-bold  mt-3'>Talk with Expert</button>
                    <ToastContainer
                        position="top-center"
                        autoClose={12000}
                    />
                </div>
            </div>
        </div>
        
     
  
    );
};

export default ServiceDetails;


// {
//     "adventureTitle": "Mountain Trekking in the Himalayas",
//     "image": "https://i.ibb.co.com/x31sb5n/Mountain-Treks.webp",
//     "id": 1,
//     "categoryName": "Mountain Treks",
//     "shortDescription": "Explore breathtaking trails in the Himalayas.",
//     "adventureCost": 500,
//     "bookingAvailability": true,
//     "location": "Himalayan Range, Nepal",
//     "duration": "7 days",
//     "adventureLevel": "Challenging",
//     "includedItems": [
//       "Trekking guide",
//       "Meals and refreshments",
//       "Camping gear",
//       "First-aid kit"
//     ],
//     "ecoFriendlyFeatures": [
//       "No plastic policy",
//       "Eco-friendly accommodations",
//       "Waste management"
//     ],
//     "maxGroupSize": 15,
//     "specialInstructions": [
//       "Wear sturdy hiking boots.",
//       "Carry personal water bottles.",
//       "Respect local culture and traditions."
//     ]
//   },