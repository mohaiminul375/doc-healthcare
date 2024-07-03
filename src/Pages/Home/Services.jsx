import { LuArrowUpRight, LuMoveUpRight } from "react-icons/lu";
import service_img from "../../assets/Rectangle 27-2.png";
import img1 from '../../assets/Rectangle 27-1.png';
import img2 from "../../assets/Rectangle 27.png"
const Services = () => {
  return (
    <section className="mt-40">
      <div className="flex justify-between">
        <div className="space-y-10 md:w-1/2 mr-32">
          <button className="border-2 border-[#020043] text-[#020043] px-4 py-2 rounded-full text-base">
            Service
          </button>
          <h2 className="text-4xl font-bold text-[#020043]">
          Empowering Health, <br /> Enriching Lives
          </h2>
          <p className="text-[#4D4C7B] text-base">
            We are committed to providing high-quality, compassionate care to
            every patient we serve. Whatever your healthcare needs may be, you
            can trust us to be your partner in health and wellness.
          </p>
          <button className="flex items-center bg-[#FFC637] text-black font-bold p-2 rounded-md">
            Appointment <LuArrowUpRight />
          </button>
        </div>
        <div className="md:w-1/2 relative">
          <img className="rounded-xl" src={service_img} alt="" />
          <div className="bg-[#020043] bg-opacity-60 text-white p-5 w-[325px] rounded-xl absolute bottom-5 left-5 flex items-end">
            <div>
              <h3 className="text-xl font-bold opacity-100">
                Advanced Technology
              </h3>
              <p>
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
            </div>
            <span className="p-5 bg-[#FFC637] text-white rounded-full">
            <LuMoveUpRight  className="text-xl font-bold"  />
            </span>
          </div>
        </div>
      </div>
      {/* img */}
      <div className="flex justify-between mt-16">
      <div className="md:w-1/2 relative">
          <img className="rounded-xl" src={img1} alt="" />
          <div className="bg-[#020043] bg-opacity-60 text-white p-5 w-[325px] rounded-xl absolute bottom-5 left-5 flex items-end">
            <div>
              <h3 className="text-xl font-bold opacity-100">
              Online Doctor Meet
              </h3>
              <p>
              Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
              </p>
            </div>
            <span className="p-5 bg-[#FFC637] text-white rounded-full">
            <LuMoveUpRight  className="text-xl font-bold"  />
            </span>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-32 relative">
          <img className="rounded-xl" src={img2} alt="" />
          <div className="bg-[#020043] bg-opacity-60 text-white p-5 w-[325px] rounded-xl absolute bottom-5 left-5 flex items-end">
            <div>
              <h3 className="text-xl font-bold opacity-100">
              Consultancy your health
              </h3>
              <p>
              Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
              </p>
            </div>
            <span className="p-5 bg-[#FFC637] text-white rounded-full">
            <LuMoveUpRight  className="text-xl font-bold"  />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
