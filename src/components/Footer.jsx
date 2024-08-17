
import logo from "../assets/facebook.png";
import logo2 from "../assets/twitter.png";
import logo3 from "../assets/linkedin.png";
import webLogo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className="bg-[#E0F7FA] pt-6 text-[#121416]">
      <h1 className='md:text-3xl text-xl font-bold text-center'><span className='text-blue-500'>Ministry</span> of Commerce</h1>
      <footer className="grid lg:grid-cols-4 gap-12 md:grid-cols-2 w-3/4 p-10 mx-auto ">
      <div className="flex justify-center items-center">
        <img src={webLogo} alt="" className="w-[80px] md:w-full" />
      </div>
        <div className="text-center lg:text-left space-y-4">
          <h2 className="footer-title font-bold text-xl md:text-2xl">Social Links</h2>
          <div className="space-y-6">
            <a
              to="#"
              className="flex items-center justify-center"
            >
              <img className="w-8 h-8" src={logo} alt="" />
              <p className="ml-3">Facebook</p>
            </a>
            <a
              to="#"
              className="flex items-center justify-center"
            >
              <img className="w-8 h-8" src={logo2} alt="" />
              <p className="ml-3">Twitter</p>
            </a>
            <a
              to="#"
              className="flex items-center justify-center"
            >
              <img className="w-8 h-8" src={logo3} alt="" />
              <p className="ml-3">LinkedIn</p>
            </a>
          </div>
        </div>
        <div className="text-center lg:text-left space-y-4 lg:flex flex-col">
          <h2 className="footer-title font-bold text-xl md:text-2xl">Company</h2>
          <a to="/" className="link link-hover block">
            About Us
          </a>
          <a to="/" className="link link-hover block">
            Work
          </a>
          <a to="/" className="link link-hover block">
            Latest News
          </a>
          <a to="/" className="link link-hover block">
            Contact Us
          </a>
        </div>
        <div className="text-center lg:text-left space-y-4 lg:flex flex-col">
          <h2 className="footer-title font-bold text-xl md:text-2xl">Privacy & policy</h2>
          <a to="/" className="link link-hover block">
            Site Map
          </a>
          <a to="/" className="link link-hover block">
            Contact
          </a>
          <a to="/" className="link link-hover block">
            Guideline
          </a>
          <a to="/" className="link link-hover block">
            FAQ
          </a>
        </div>
      </footer>
      <hr className="border w-3/4 mx-auto mt-6" />
      <div className="w-3/4 text-sm font-semibold mx-auto flex justify-between py-12">
        <p>Site was last updated: 2024-08-17 10:31:55</p>
        <p className="text-right">Technical Support</p>
      </div>
    </div>
  );
};

export default Footer;
