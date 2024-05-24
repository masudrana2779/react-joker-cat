import { FaChartLine, FaDollarSign } from "react-icons/fa";
import { GoCopy } from "react-icons/go";

import { Link } from "react-router-dom";

const Banner = () => {
  const copyData = "9a8Am.....uC73Pin";

  const iconData = [
    {
      title: "DOXXED BASED DEV",
      icon: "/img/icon-1.svg",
    },
    {
      title: "60% LOCKED LIQUIDITY",
      icon: "/img/icon-2.svg",
    },
    {
      title: "MULTIPLE UTILITIES",
      icon: "/img/icon-3.svg",
    },
    {
      title: "AWESOME COMMUNITY",
      icon: "/img/icon-4.svg",
    },
  ];

  return (
    <>
      <div className="container flex  justify-between pt-[92px] pb-[137px] pl-[116px] pr-[68px]">
        <div className="">
          <div className="">
            <img src="/img/banner.png" alt="img" />
          </div>
        </div>
        <div className="">
          <div className="pt-6">
            <div className="text-[50px] leading-[65px] text-white uppercase text-center mb-[30px] acostaregular">
              JOKER CAT
            </div>
            <div className="text-gradient  text-center text-2xl font-medium leading-[37px] mb-10">
              I am entering my joker phase..
            </div>

            <div className="flex space-x-20 justify-between items-center mb-10">
              <Link
                to={"/"}
                className="text-white uppercase text-[18px] leading-[26px] font-medium flex items-center space-x-1 py-2 px-5 rounded-full bg_gradient"
              >
                <span>
                  <FaChartLine />
                </span>
                <span>chart</span>
              </Link>
              <Link
                to={"/"}
                className="text-white uppercase text-[18px] leading-[26px] font-medium flex items-center space-x-1 py-2 px-5 rounded-full bg_gradient"
              >
                <span>
                  <FaDollarSign />
                </span>
                <span>Buy here</span>
              </Link>
            </div>
            <div className="text-white text-[18px] acostaregular leading-7 mb-[30px] text-center">
              contract address
            </div>
            <div className="flex justify-center">
              <div className="">
                <div
                  to={"/"}
                  className="text-white cursor-pointer flex items-center space-x-2 py-2 px-5 rounded-full bg_gradient"
                  onClick={() => {
                    navigator.clipboard.writeText(copyData);
                  }}
                >
                  <span>
                    <GoCopy />
                  </span>
                  <span>9a8Am.....uC73Pin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1116px] mx-auto px-5 grid grid-cols-4 gap-5">
        {iconData.map((item, i) => (
          <div
            className="pt-5 px-9 pb-[50px] border-[3px] border-[#2E2159] rounded-[10px]"
            key={i}
          >
            <div className="flex justify-center mb-5">
              <img src={item.icon} alt="icon" />
            </div>
            <div className="text-center text-gradient text-[26px] leading-[31px] font-bold">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Banner;
