import { FaStar } from "react-icons/fa";
import person_1 from "../../assets/person-1.png"
import person_2 from "../../assets/person-2.png"
import person_3 from "../../assets/person-3.png"


const Testimonial = () => {
  return (
    <section className="mt-40">
      <div className="space-y-5">
        <button className="border-2 border-[#020043] text-[#020043] p-3 rounded-full text-base">
          Testimonial
        </button>
        <h2 className="text-4xl font-bold text-[#020043]">
          What they say about us
        </h2>
      </div>
      {/* review */}
      <div className="mt-14 grid md:grid-cols-3 gap-3">
        {/* grid_1 */}
        <div className="space-y-5 bg-base-100 shadow-md border-2 rounded-md p-4">
          <h5 className="text-[#020043] text-xl font-bold">Expertise and Compassion <br /> Combined</h5>
          <p className="text-[#4D4C7B]">
            I can't thank enough for their exceptional care. The doctors and
            staff showed incredible expertise and compassion throughout my
            treatment journey. I felt truly cared for every step of the way.
          </p>
          <div className=" flex items-center gap-2 ">
            <img src={person_1} alt="" />
            <div>
                <h5 className="text-lg"><span className="font-bold text-[#020043]">Sarah D,</span> <span className="text-[#4D4C7B]">IT Professional</span></h5>
                <h5 className="flex items-center">
                    <FaStar className="text-[#FFE03D] text-2xl" />
                    <FaStar className="text-[#FFE03D] text-2xl" />
                    <FaStar className="text-[#FFE03D] text-2xl" />
                    <FaStar className="text-[#FFE03D] text-2xl" />
                    <FaStar className="text-[#FFE03D] text-2xl" />
                </h5>
            </div>
          </div>
        </div>
        {/* grid_2 */}
        <div className="space-y-5 bg-base-100 shadow-md border-2 rounded-md p-4">
          <h5 className="text-[#020043] text-xl font-bold">Expertise and Life-Saving Care, Life-Changing Experience</h5>
          <p className="text-[#4D4C7B]">
          My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.
          </p>
          <div className=" flex items-center gap-2 ">
            <img src={person_2} alt="" />
            <div>
                <h5 className="text-lg"><span className="font-bold text-[#020043]">Michael R,</span> <span className="text-[#4D4C7B]">Business Executive</span></h5>
                <h5 className="flex items-center">
                    <FaStar className="text-[#FFE03D] text-2xl" />
                    <FaStar className="text-[#FFE03D] text-2xl" />
                    <FaStar className="text-[#FFE03D] text-2xl" />
                    <FaStar className="text-[#FFE03D] text-2xl" />
                    <FaStar className="text-[#FFE03D] text-2xl" />
                </h5>
            </div>
          </div>
        </div>
        {/* grid_3 */}
        <div className="space-y-5 bg-base-100 shadow-md border-2 rounded-md p-4">
          <h5 className="text-[#020043] text-xl font-bold">A Partner in Health and <br />
          Wellness</h5>
          <p className="text-[#4D4C7B]">
          As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and
          </p>
          <div className=" flex items-center gap-2 ">
            <img src={person_3} alt="" />
            <div>
                <h5 className="text-lg"><span className="font-bold text-[#020043]">David S,</span> <span className="text-[#4D4C7B]">Lawyer</span></h5>
                <h5 className="flex items-center">
                    <FaStar className="text-[#FFE03D] text-2xl" />
                    <FaStar className="text-[#FFE03D] text-2xl" />
                    <FaStar className="text-[#FFE03D] text-2xl" />
                    <FaStar className="text-[#FFE03D] text-2xl" />
                    <FaStar className="text-[#FFE03D] text-2xl" />
                </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
