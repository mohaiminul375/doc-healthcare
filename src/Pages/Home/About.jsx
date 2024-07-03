import { LuArrowUpRight } from 'react-icons/lu';
import about_img from "../../assets/Rectangle 24.png"
const About = () => {
    return (
        <section className="mt-40">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className='space-y-10 md:w-1/2 mr-32'>
                     <button className="border-2 border-[#020043] text-[#020043] p-3 rounded-full text-base">Who we are</button>
                     <h2 className="text-4xl font-bold text-[#020043]">We Help To Get <br /> Soultions</h2>
                     <p className="text-[#4D4C7B] text-base">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                     </p>
                     <button className="flex items-center bg-[#FFC637] text-black font-bold p-2 rounded-md">Learn more <LuArrowUpRight/></button>
                </div>
                <div className='md:w-1/2 relative pt-10 md:pt-0'>
                    <img src={about_img} alt="" />
                    <div className='bg-[#343268] text-white p-5 rounded-xl w-full md:w-[300px] lg:w-[395px] absolute -bottom-10 md:-left-14'>
                       <h2 className='text-xl lg:text-2xl mb-5'>Our mission is simple</h2>
                       <p className='text-sm lg:text-lg'>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;