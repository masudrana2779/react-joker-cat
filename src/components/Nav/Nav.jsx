import { useState } from "react";
import NavbarTopSocial from "./NavbarTopSocial";
import { FaCat, FaDollarSign } from "react-icons/fa";
import { Link } from "react-scroll";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bgColor">
      <nav className="">
        <NavbarTopSocial />
        <div className="container max-w-[1170px] mx-auto flex justify-between items-center p-4">
          <div className="">
            <Link to={"/"}>
              <img src="/img/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="hidden md:flex items-center uppercase space-x-4 text-xl leading-5 font-bold">
            <Link
              to="Roadmap"
              spy={true}
              smooth={true}
              duration={500}
              className="tg cursor-pointer"
            >
              roadmap
            </Link>
            <Link
              to="Tokenomics"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white cursor-pointer opacity-70 border-b pb-1"
            >
              tokenomics
            </Link>
            <Link
              to="Partner"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white cursor-pointer opacity-70 border-b pb-1"
            >
              partners
            </Link>
            <Link href="#" className="tg cursor-pointer">
              Chart
            </Link>
            <Link href="#" className="tg cursor-pointer">
              Jcat Swap
            </Link>
            <Link href="#" className="tg cursor-pointer">
              Jcat Academy
            </Link>
            <div className="flex space-x-2 items-center">
              <Link
                to={"/"}
                className="text-white flex text-[18px] leading-[26px] font-medium  items-center space-x-2 py-2 px-5 rounded-full bg_gradient"
              >
                <span>
                  <FaCat />
                </span>
                <span>game</span>
              </Link>
              <Link
                to={"/"}
                className="text-white flex text-[18px] leading-[26px] font-medium  items-center space-x-2 py-2 px-5 rounded-full bg_gradient"
              >
                <span>
                  <FaDollarSign />
                </span>
                <span>Buy here</span>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="p-4 inline-flex flex-col uppercase space-y-4 text-xl leading-5 font-bold">
              <Link
                to="Roadmap"
                spy={true}
                smooth={true}
                duration={500}
                className="tg cursor-pointer"
              >
                roadmap
              </Link>
              <Link
                to="Tokenomics"
                spy={true}
                smooth={true}
                duration={500}
                className="text-white cursor-pointer opacity-70 border-b pb-1"
              >
                tokenomics
              </Link>
              <Link
                to="Partner"
                spy={true}
                smooth={true}
                duration={500}
                className="text-white cursor-pointer opacity-70 border-b pb-1"
              >
                partners
              </Link>
              <Link href="#" className="tg cursor-pointer">
                Chart
              </Link>
              <Link href="#" className="tg cursor-pointer">
                Jcat Swap
              </Link>
              <Link href="#" className="tg cursor-pointer">
                Jcat Academy
              </Link>
              <div className="flex space-x-2 items-center">
                <Link
                  to={"/"}
                  className="text-white flex text-[18px] leading-[26px] font-medium  items-center space-x-2 py-2 px-5 rounded-full bg_gradient"
                >
                  <span>
                    <FaCat />
                  </span>
                  <span>game</span>
                </Link>
                <Link
                  to={"/"}
                  className="text-white flex text-[18px] leading-[26px] font-medium  items-center space-x-2 py-2 px-5 rounded-full bg_gradient"
                >
                  <span>
                    <FaDollarSign />
                  </span>
                  <span>Buy here</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
