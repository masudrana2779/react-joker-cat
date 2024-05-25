import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { TfiAngleUp } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-[#140933] pt-[100px] pb-10 relative">
      <div
        className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer absolute bottom-10 right-10"
        onClick={() => scroll.scrollToTop()}
      >
        <div className="tg">
          <TfiAngleUp />
        </div>
      </div>
      <div className="max-w-[1170px] mx-auto block md:flex justify-between px-[15px] w-full mb-16">
        <div className="w-full max-w-[256px] mb-10 md:mb-0">
          <div className=" flex items-center space-x-4 mb-5">
            <div className="">
              <img src="/img/logo.png" alt="" />
            </div>
            <div className="text-xl text-white acostaregular ">JOKER CAT</div>
          </div>
          <div className="text-white roboto font-semibold text-base">
            Super-rare memecoin gem. Doxxed dev, global community, huge locked
            liquidity 🚀
          </div>
        </div>
        <div className="w-full max-w-[133px] mb-10 md:mb-0">
          <div className="text-[18px] font-medium text-white leading-[18px] mb-[18px]">
            Documentation
          </div>
          <div className="text-base text-white">
            <div className="">
              <Link to={"/"} className="">
                Roadmap
              </Link>
            </div>
            <div className="">
              <Link to={"/"} className="">
                Tokenomics
              </Link>
            </div>
            <div className="">
              <Link to={"/"} className="">
                Whitepaper
              </Link>
            </div>
            <div className="">
              <Link to={"/"} className="">
                Chart
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[158px] mb-10 md:mb-0">
          <div className="text-[18px] font-medium text-white leading-[18px] mb-[18px]">
            Contact Info
          </div>
          <div className="">
            <ul>
              <li>
                <a
                  target="_black"
                  href={"/"}
                  className="flex items-center space-x-2"
                >
                  <div className="text-[#DC3C4D]">
                    <FaXTwitter />
                  </div>
                  <div className="text-base text-[#54595F] underline">
                    @JokerJcat
                  </div>
                </a>
              </li>
              <li>
                <a
                  target="_black"
                  href={"/"}
                  className="flex items-center space-x-2"
                >
                  <div className="text-[#DC3C4D]">
                    <FaTelegramPlane />
                  </div>
                  <div className="text-base text-[#54595F] underline">
                    @JokerJcat
                  </div>
                </a>
              </li>
              <li>
                <a
                  target="_black"
                  href={"/"}
                  className="flex items-center space-x-2"
                >
                  <div className="text-[#DC3C4D]">
                    <MdAlternateEmail />
                  </div>
                  <div className="text-base text-[#54595F] underline">
                    info@jokercat.club
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full max-w-[391px] mb-10 md:mb-0">
          <div className="text-white text-[25px] leading-[25px] font-bold mb-[22px]">
            Join Jcat Academy
          </div>
          <div className="text-base text-white mb-5">
            Sign up for our newsletter to keep updated about Joker Cat.
          </div>
          <div className="">
            <form action="#">
              <input
                type="email"
                placeholder="Email Address"
                className="text-base text-white bg-transparent border-b border-[#E95455] outline-none shadow-none w-full mb-5"
              />
              <button
                type="submit"
                className="border border-[#E23125] rounded-full text-[#E23125] py-[10px] px-[20px] hover:bg-[#E23125] hover:text-white transition-all duration-200 text-base leading-4"
              >
                Sign Me Up
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1170px] mx-auto px-[15px] text-white text-base">
        <div className="">© 2024 Joker Cat. All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
