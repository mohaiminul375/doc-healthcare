import banner from "../../assets/Rectangle 5.png";
import BannerContent from "./BannerContent";

const Banner = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `linear-gradient(179.57deg, #00C19D00 -25.412%, #02004378 107.111%), url(${banner})`,
        }}
        className="h-[80vh] bg-cover bg-center bg-no-repeat mt-10 rounded-[48px]"
      ></div>
      <BannerContent/>
    </section>
  );
};

export default Banner;
