import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#140933] py-10">
      <div className="max-w-[1170px] mx-auto flex justify-between px-[15px]">
        <div className="w-full max-w-[256px]">
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
        <div className="w-full max-w-[133px]">
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
        <div className="w-full max-w-[158px]">
          <div className="text-[18px] font-medium text-white leading-[18px] mb-[18px]">
            Contact Info
          </div>
          <div className="">
            <ul>
              <li>
                <Link
                  target="_black"
                  to={"/"}
                  className="flex items-center space-x-4"
                >
                  <div className="">
                    <FaXTwitter />
                  </div>
                  <div className="">@JokerJcat</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full max-w-[391px]">sd</div>
      </div>
    </div>
  );
};

export default Footer;
