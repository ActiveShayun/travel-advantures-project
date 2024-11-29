import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const Service = () => {
    const services = useLoaderData()
    // console.log(services);
    return (
        <div>
            <h2 className="text-3xl font-bold mb-3 text-center">Eco-Adventures: Explore Nature's Wonders</h2>
            <p className="text-center ">Embark on an unforgettable journey through nature's most awe-inspiring landscapes. Conquer majestic mountain trails, dive into the vibrant underwater realms of the ocean, and paddle through serene mangrove forests teeming with life. Our eco-adventures blend thrilling experiences with sustainable practices, ensuring that every step you take leaves a positive impact on the environment. Discover the beauty, adventure, and harmony of the great outdoors with us.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-6">
                {
                    services.map(service =>
                        <ServiceCard
                            key={service.id}
                            service={service}
                        ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Service;