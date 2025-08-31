import React from 'react'
import myImage from './amit.jpg'
import '../App.css';

const AboutComponent = () => {
    return (
        <div className='pt-15 flex flex-col items-center justify-center'>
            <h1 className=' text-[35px] font-bold text-[#FF7601]'>About Us</h1>

            <div className='about-section bg-gray-200 h-125 w-110 rounded-lg overflow-hidden relative '>
                <div className='h-20 bg-[#00809D]'></div>
                <img className='h-30 w-30 object-cover rounded-[50%] absolute top-[5%] left-[35%]' src={myImage} alt="" />
                <h1 className='mt-20 text-[25px] text-center font-bold text-[#00809D]'>Who We Are</h1>
                <p className='px-7'> Hey,Welcome to My E-Store , I am <span className='font-semibold text-[#F3A26D]'>AMIT KUMAR PATEL</span> For over 2 years, My E-Store' mission has been to help take the stress out of your family from selling Products. your one-stop destination for browsing, adding, and managing products with ease and simplicity. Built with a modern tech stack and clean user interface.</p>
                <p className='px-7 mt-3'><span className='text-transparent'>-------</span>All our Pages are professionally developed, And We’re continuously working to improve user experience, add more features, and make your journey smoother.</p>
            </div>

            <div className='parag px-100 '>
                <h1 className='text-center text-[30px] font-bold text-[#F3A26D]'>Features</h1>
                <p>our platform allows you to:</p>
                <ul className='list-disc ml-5 mb-4'>
                    <li className='ml-5'><b>🔍 Explore a range of products</b> with detailed information.</li>
                    <li className='ml-5'>➕<b> Add your own products with images</b>, descriptions, and pricing.</li>
                    <li className='ml-5'>👥<b> Sign in or register</b> to manage your personalized experience.</li>
                    <li className='ml-5'>📱 <b>Responsive design</b> so it works seamlessly on mobile, tablet, and desktop.</li>
                </ul>
                <p><span className='text-white'>-----</span>Our mission is to create a simple and effective platform for showcasing and managing products. Whether you're a seller wanting to list your items or a user wanting to explore what's available, My E-Store is built to serve your needs.</p>
            </div>
            <div className='parag px-100 mt-20'>
                <h1 className='text-center text-[30px] font-bold text-[#F3A26D]'>Comments</h1>
                <p>We review and approve every comment left on the site, and generally respond to questions within 1 to 3 days. When leaving comments, we ask that you think of simply add products as our home. Constructive feedback is always welcome, but rude, mean, disrespectful, or spammy comments are not welcome and will not be approved.</p>
            </div>
            <div className='parag px-100 mt-20 '>
                <h1 className='text-center text-[30px] font-bold text-[#F3A26D]'>Product Reviews</h1>
                <p>Our product reviews and recommendations are independent and based on extensive research and product testing. If you visit links within our content, we may receive commissions from your purchases.</p>
                <h1 className='text-[30px] mb-5 text-center text-[#F1C559] '><i class=" ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i></h1>
            </div>
        </div>
    )
}

export default AboutComponent
