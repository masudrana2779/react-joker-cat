import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#140933] py-10">
      <div className="max-w-[1140px] mx-auto flex justify-between px-4">
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
        <div className="w-full max-w-[158px]">sd</div>
        <div className="w-full max-w-[391px]">sd</div>
      </div>
    </div>
  );
};

export default Footer;
