import { FaCat } from "react-icons/fa";
import { Link } from "react-router-dom";

export const JokerCatAcademy = () => {
  const jcaData = [
    {
      title:
        "Joker Cat and The Gari Network: A Partnership Purrfect for DeFi Success!",
      img: "/img/joker-cat-academy-1.png",
      date: "May 16, 2024",
    },
    {
      title: "Joker Cat Partners with GotBit Hedge Fund to Supercharge Growth!",
      img: "/img/joker-cat-academy-2.png",
      date: "May 13, 2024",
    },
    {
      title:
        "Joker Cat Live Streams into Crypto Casino Fun – $3,000+ Prize Giveaway Awaits!",
      img: "/img/joker-cat-academy-3.png",
      date: "May 4, 2024",
    },
    {
      title:
        "Joker Cat Goes All In: Casino Partnership Unleashes New Utility and Burns!",
      img: "/img/joker-cat-academy-4.png",
      date: "April 29, 2024",
    },
  ];
  return (
    <div>
      <div className="bg-[#140933] pt-[50px] pb-[60px] md:pt-[100px] md:pb-[130px]">
        <div className="text-[28px] leading-[44px] md:text-[42px] md:leading-[58px] text-white mb-[60px] acostaregular text-center">
          JOKER CAT ACADEMY
        </div>
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
          {jcaData.map((item, i) => (
            <div key={i} className="jca_bg rounded-[10px] overflow-hidden">
              <div className="">
                <img src={item.img} alt="img" />
              </div>
              <div className="py-10 px-[15px] border-b border-[rgba(236,235,235,0.21)]">
                <div className="text-[18px] font-bold leading-[22px] text-[#54595F] mb-[30px]">
                  {item.title}
                </div>
                <div className="">
                  <Link
                    to={"/"}
                    className="text-xs leading-[18px] tg font-medium"
                  >
                    Read More »
                  </Link>
                </div>
              </div>
              <div className="text-xs leading-[15px] text-[#ADADAD] px-[14px] pt-[14px] pb-[25px]">
                {item.date}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-4 mb-[60px] md:mb-[160px]">
          <div className="flex items-center space-x-4  text-xl leading-[30px]">
            <div className="text-[#004AAD]">« Previous</div>
            <div className="text-[#004AAD]">1</div>
          </div>
          <div className="flex items-center space-x-4 text-xl leading-[30px]">
            <div className="tg">2</div>
            <div className="tg">Next »</div>
          </div>
        </div>
        <div className="container block md:flex justify-between">
          <div className="pt-[14px] md:mb-0 mb-16">
            <img src="/img/kittencasino.png" alt="" />
          </div>
          <div className=" max-w-[630px] w-full  md:-mr-[116px]">
            <div className="text-[28px] leading-[44px] md:text-[42px] md:leading-[58px] text-white mb-[6px] acostaregular text-center">
              CRYPTO GAMES PARTNERSHIP
            </div>
            <div className="flex justify-center mb-[45px]">
              <img src="/img/logoPlus.png" alt="" />
            </div>
            <div className="text-white text-xl leading-[30px] mb-[30px] max-w-[503px] w-full pl-[34px]">
              <p>
                Use $JCAT tokens to play 3,500 slots, 400 live dealer games and
                300 others
              </p>
              <p>BNB, SOL, USDT and others also available to play games</p>
              <p>
                Profits will fuel marketing for project + a portion will BURN
                $Joker Cat tokens forever.
              </p>
              <p>This token will truly become deflationary!!!</p>
            </div>
            <div className="">
              <Link
                to={"/"}
                className="text-white justify-center flex text-[18px] leading-[26px] font-medium  items-center space-x-2 py-2 px-5 rounded-full bg_gradient"
              >
                <span>
                  <FaCat />
                </span>
                <span>Go to GAMES (Coming Soon)</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
