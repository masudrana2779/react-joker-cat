import { Element } from "react-scroll";

const Partner = () => {
  return (
    <Element name="Partner">
      <div className="bgColor pt-[60px] md:pt-[160px]">
        <div className="max-w-[1260px] mx-auto px-4 pb-[50px] md:pb-[100px]">
          <div className=" text-[28px] leading-[44px] md:text-[42px] md:leading-[58px] text-white mb-[50px] acostaregular text-center">
            PARTNERS
          </div>
          <div className="w-full">
            <img src="/img/PARTNERS.png" alt="img" className="w-full" />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Partner;
