import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo light.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer bg-[#020043] text-white p-10 mt-40">
      <aside className="text-base">
        <img src={logo} alt="" />
        <div>
          <p className="my-8">
            123 Main Street Anytown, USA <br /> Postal Code: 12345
          </p>
          <p>
            Support: support@oyolloo.com
            <br />
            (Available : 10:00am to 07:00pm)
          </p>
        </div>
      </aside>
      <nav className="mt-20">
        <a className="link link-hover">Home</a>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Success Page</a>
        <a className="link link-hover">Terms and condition</a>
      </nav>
      <nav className="mt-20">
        <a className="link link-hover">Services</a>
        <a className="link link-hover">Scheduling</a>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">Patient Portal</a>
      </nav>
      <nav className="mt-20">
        <h6 className="text-white font-bold">Follow Us</h6>
        <div className="flex items-center gap-3">
          <Link target="_blank" to="https://www.facebook.com">
            <FaFacebook className="text-white text-2xl hover:cursor-pointer" />
          </Link>
          <Link target="_blank" to="https://www.instagram.com">
            {" "}
            <FaInstagram className="text-white text-2xl" />
          </Link>
          <Link target="_blank" to='https://www.linkedin.com'>
            {" "}
            <FaLinkedin className="text-white text-2xl" />
          </Link>
          <Link target="_blank" to='https://www.youtube.com'>
            {" "}
            <FaYoutube className="text-white text-2xl" />
          </Link>
        </div>
        <p className="mt-5 text-base">@docplus 2024</p>
      </nav>
    </footer>
  );
};

export default Footer;
