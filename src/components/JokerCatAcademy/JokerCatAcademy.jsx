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
      <div className="bg-[#140933] pt-[100px] pb-[130px]">
        <div className="text-[42px] leading-[58px] text-white mb-[60px] acostaregular text-center">
          JOKER CAT ACADEMY
        </div>
        <div className="container grid grid-cols-4 gap-5">
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
      </div>
    </div>
  );
};
