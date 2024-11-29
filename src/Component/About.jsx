import review1 from '../assets/cutmer1.webp'
import review2 from '../assets/customer2.webp'
import review3 from '../assets/customer3.jpg'
import review4 from '../assets/customer4.webp'

const About = () => {
    return (
        <div className="mt-10">
            <section className="text-left grid gap-4 grid-cols-1 lg:grid-cols-2">
                <div>
                    <h1 className="text-3xl font-bold mb-3 text-sky-700">Embark on Your Next Great Adventure</h1>
                    <p >Welcome to a world of boundless exploration and unforgettable experiences. At <span className="font-bold text-sky-700">Nature Odyssey</span>, we are passionate adventurers dedicated to helping you discover the thrill of the great outdoors. From conquering rugged peaks to navigating tranquil waters, our mission is to inspire, guide, and connect you to the raw beauty of nature. Whether you’re a seasoned explorer or taking your first step into the wild, we craft personalized journeys that push limits and create memories to last a lifetime. Dive into adventure, and let’s make your next story one worth telling</p>
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-3 text-sky-700">Meet the Adventurers Behind the Journey</h2>
                    <p>We are a team of passionate explorers driven by the belief that adventure is the ultimate way to connect with the world. With years of experience in trekking, camping, and extreme sports, our mission is to inspire and guide you through life-changing experiences. What started as a love for exploration has evolved into a platform for sharing unforgettable adventures. Let us help you write your next great story</p>
                </div>
            </section>
            <section className="text-left mt-10">
                <div>
                    <h2 className="text-3xl font-bold mb-3 text-sky-700">Your Gateway to Thrilling Adventures</h2>
                    <p>Discover a curated selection of heart-pounding adventures tailored to your passions. Whether you dream of scaling majestic peaks, paddling through serene waters, or conquering rugged terrains, we bring you exclusive locations, eco-conscious experiences, and personalized itineraries. Step outside your comfort zone and embrace the wild with adventures designed for every explorer, from novices to seasoned thrill-seekers</p>
                </div>
                <div className="mt-5">
                    <h2 className="text-3xl font-bold mb-3 text-sky-700">
                        From a Dream to a Journey Our Story
                    </h2>
                    <p>t all began with a rainy hike in the heart of the Himalayas—a journey that transformed our view of the world and sparked a lifelong passion for exploration. That moment of connection with nature inspired us to create a platform where others could experience the thrill and wonder of adventure. Today, our mission is to guide you on paths less traveled, sharing the magic of discovery and the transformative power of the great outdoors</p>
                </div>
            </section>
            <section className="mt-10">
                <h2 className="text-sky-700 text-3xl font-bold">From a Rainy Trail to a Lifelong Mission Our Story</h2>
                <p>Our journey started on a rainy day in the majestic Himalayas. Drenched, exhausted, and surrounded by breathtaking peaks, we felt a sense of connection and purpose we had never known before. That single hike wasn’t just a trek through the mountains—it was a turning point in our lives. It opened our eyes to the transformative power of adventure and the way nature has a unique ability to heal, inspire, and challenge us.

                    What began as a personal passion soon evolved into a mission: to help others discover the magic of stepping out of their comfort zones and embracing the wild. From scaling mountain peaks and navigating lush forests to diving into crystal-clear waters, every adventure is an opportunity to write a new story.

                    At <span className="font-bold text-sky-700">Nature Odyssey</span>, we are dedicated to creating experiences that ignite your soul, challenge your limits, and leave you with memories to last a lifetime. Whether you're a seasoned adventurer or a curious first-timer, we’re here to guide you every step of the way. This is more than just a business—it's a tribute to the awe-inspiring moments that shaped us, and our way of sharing them with the world.

                    Come join us on the trails, rivers, and peaks. Let’s make every adventure a story worth telling</p>
            </section>
            <section className='mt-10'>
                <div>
                    <h2 className="text-sky-700 text-3xl font-bold mb-3">What Our Adventurers Are Saying</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 py-4">
                    <div className='space-y-2'>
                        <img className='w-full lg:w-[500px] lg:h-[300px] object-cover rounded-xl' src={review1} alt="" />
                        <h3 className="text-xl font-bold text-sky-700">An Experience of a Lifetime!</h3>
                        <p className='lg:w-4/5'>
                            I can't thank the team enough for the incredible journey they planned for us. From the moment we started until the very end, every detail was taken care of. Trekking through the mountains with their expert guidance felt safe yet exhilarating. Highly recommend it to anyone seeking adventure!"
                            — Sophia L
                        </p>
                    </div>
                    <div className='space-y-2'>
                        <img className='w-full lg:w-[500px] lg:h-[300px] object-cover rounded-xl' src={review2} alt="" />
                        <h3 className="text-xl font-bold text-sky-700">Breathtaking! </h3>
                        <p className='lg:w-4/5'>
                            "I can't thank the team enough for the incredible journey they planned for us. From the moment we started until the very end, every detail was taken care of. Trekking through the mountains with their expert guidance felt safe yet exhilarating. Highly recommend it to anyone seeking adventure!" — Sophia L
                        </p>
                    </div>
                    <div className='space-y-2'>
                        <img className='w-full lg:w-[500px] lg:h-[300px] object-cover rounded-xl' src={review3} alt="" />
                        <h3 className="text-sky-700 text-xl font-bold">Safe, Fun, and Absolutely Worth It!</h3>
                        <p className='lg:w-4/5'>
                            As someone new to adventure sports, I appreciated how patient and knowledgeable the team was. They ensured our safety while making sure we had tons of fun. I left with amazing memories and new friends!"
                            — Rajesh
                        </p>
                    </div>
                    <div className='space-y-2'>
                        <img className='w-full lg:w-[500px] lg:h-[300px] object-cover rounded-xl' src={review4} alt="" />
                        <h3 className="text-sky-700 text-xl font-bold"> Adventures That Create Lifelong Memories!</h3>
                        <p className='lg:w-4/5'>The attention to detail and passion of this team is unmatched. Every aspect of the trip was carefully planned to maximize our experience. I’ll cherish the memories of that breathtaking sunrise hike forever. Truly life-changing!"
                            — Isabella M.</p>
                    </div>
                </div>
            </section>
            <p className='text-center text-sky-700'>Ready to create your own adventure story? Join the hundreds of happy explorers who’ve trusted us to make their dreams come true</p>
        </div>

    );
};

export default About;