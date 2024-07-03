import chart from "../../assets/chart.png";
import video from "../../assets/video.png";
import certificate from "../../assets/certificates.png";
import coins from "../../assets/coins.png"
import group from "../../assets/Group.png"
import { FaStar } from "react-icons/fa";
const BannerContent = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-12 row-span-12 gap-3">
        {/*  col1*/}
        <div className="col-span-2 shadow-md bg-[#FBFBFB] rounded-xl p-5 space-y-3 row-span-1">
          <h2 className="text-5xl font-bold text-[#020043]">90%</h2>
          <p className="text-lg">
            Patient satisfaction rate, reflecting our commitment.
          </p>
          <img className="w-28" src={chart} alt="chart" />
        </div>
        {/* col-2 */}
        <div className="col-span-8  grid grid-rows-12 row-span-1">
          <div className="md:w-3/4 mx-auto text-center row-span-6">
            <h2 className="text-4xl text-[#020043] font-bold">
              Comprehensive Care <br /> for Every Patient
            </h2>
          </div>
          {/* row2 */}
          <div className="h-full row-span-6">
            <div className="flex items-end justify-between">
              <div className="md:w-52 bg-[#FBFBFB] p-3 border-2 rounded-lg space-y-2 h-48">
                <h2 className="text-5xl font-bold text-[#020043]">500+</h2>
                <p>Board-certified doctors</p>
                <div className="flex justify-end">
                  <img className="mr-0 w-20" src={certificate} alt="" />
                </div>
              </div>
              <div className="md:w-52 bg-[#FFFFF5] p-3 border-2 rounded-lg space-y-2 h-40">
                <h2 className="text-5xl font-bold text-[#020043] flex items-center">4.8 <FaStar className="text-[#FFE03D] text-2xl" /></h2>
                <p>Over 20,000 Patient</p>
                <div className="flex justify-start">
                  <img className="w-20" src={group} alt="" />
                </div>
              </div>
              <div className="md:w-52 bg-[#FFFFF5] p-3 border-2 rounded-lg space-y-2 h-48">
                <h2 className="text-5xl font-bold text-[#020043]">$5000</h2>
                <p>Money spend for poor patient</p>
                <div className="flex justify-end">
                  <img className="mr-0 w-20" src={coins} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* col-3 */}
        <div className="col-span-2 shadow-md bg-[#FBFBFB] rounded-xl border-2 p-5 space-y-7 row-span-1">
          <h2 className="text-5xl font-bold text-[#020043]">50+</h2>
          <p className="text-lg">Free lession video for patient</p>
          <img className="w-28" src={video} alt="chart" />
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
