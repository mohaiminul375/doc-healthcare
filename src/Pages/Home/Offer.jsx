import { LuArrowUpRight } from "react-icons/lu";
import banner_offer from "../../assets/Rectangle 32.png";
import logo from "../../assets/logo light.png";
const Offer = () => {
  return (
    <section className="mt-40">
      <div
        style={{
          backgroundImage: `
      radial-gradient(347.71% 142.52% at 20% 78%, #020043, #0200431A 50%),
      linear-gradient(200.57deg, #00C19D00 -90.412%, #02004333 100.111%),
      url(${banner_offer})
    `,
        }}
        className="h-[60vh] bg-cover bg-center bg-no-repeat mt-10 rounded-[48px]"
      >
        <div className="h-[60vh] relative">
          <img
            className="right-[35%] md:right-20 top-10 absolute"
            src={logo}
            alt=""
          />
          <div className="flex justify-center items-center text-center md:text-left md:justify-start md:items-center h-[60vh] md:ml-10 pt-12 md:pt-0">
            <div className="text-white">
              <h2 className="md:text-4xl font-bold mb-10">
                Get Your <br />
                First Appointment <br />
                at 50% Off!
              </h2>
              <div className="flex items-center gap-3 ">
                <button className="flex items-center bg-[#FFC637] text-black font-bold p-2 rounded-md">
                  Appointment <LuArrowUpRight />
                </button>
                <button className="flex border-2 border-white items-center text-white font-bold p-2 rounded-md">
                  Learn More <LuArrowUpRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
