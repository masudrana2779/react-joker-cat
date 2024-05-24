import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NavbarTopSocial from "./NavbarTopSocial";
import { FaCat, FaDollarSign } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="top-0 left-0 w-full">
        <NavbarTopSocial />
        <div className="container max-w-[1170px] mx-auto flex justify-between items-center">
          <div className="">
            <Link to={"/"}>
              <img src="/img/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="hidden md:flex items-center uppercase space-x-4 text-xl leading-5 font-bold">
            <NavLink to={"/"} className="tg">
              roadmap
            </NavLink>
            <NavLink to={"#"} className="text-white opacity-70 border-b pb-1">
              tokenomics
            </NavLink>
            <NavLink href="#" className="text-white opacity-70 border-b pb-1">
              partners
            </NavLink>
            <NavLink href="#" className="tg">
              Chart
            </NavLink>
            <NavLink href="#" className="tg">
              Jcat Swap
            </NavLink>
            <NavLink href="#" className="tg">
              Jcat Academy
            </NavLink>
            <div className="flex space-x-2 items-center">
              <Link
                to={"/"}
                className="text-white flex items-center space-x-2 py-2 px-5 rounded-full bg_gradient"
              >
                <span>
                  <FaCat />
                </span>
                <span>game</span>
              </Link>
              <Link
                to={"/"}
                className="text-white flex items-center space-x-2 py-2 px-5 rounded-full bg_gradient"
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
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
            >
              About
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
