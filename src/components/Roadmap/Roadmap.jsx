import { Element } from "react-scroll";

const Roadmap = () => {
  const roadmapData = [
    {
      title: "Phase one",
      listItems: [
        { list: "Website & Socials Launch", icon: "/img/checked.svg" },
        { list: "Marketing + Community Building", icon: "/img/checked.svg" },
        { list: "PinkSale AMA", icon: "/img/checked.svg" },
        { list: "TG & Twitter Raids", icon: "/img/checked.svg" },
        { list: "Private Call Group Features", icon: "/img/checked.svg" },
        { list: "Pinksale Fair Launch", icon: "/img/checked.svg" },
        { list: "Dexscreener + Dexview Trending", icon: "/img/checked.svg" },
      ],
    },
    {
      title: "Phase one",
      listItems: [
        { list: "Launch on Raydium", icon: "/img/checked.svg" },
        { list: "Marketing + Community Building", icon: "/img/checked.svg" },
        { list: "PinkSale AMA", icon: "/img/checked.svg" },
        { list: "TG & Twitter Raids", icon: "/img/checked.svg" },
        { list: "Private Call Group Features", icon: "/img/checked.svg" },
        { list: "Pinksale Fair Launch", icon: "/img/checked.svg" },
        { list: "Dexscreener + Dexview Trending", icon: "/img/checked.svg" },
      ],
    },
    {
      title: "Phase one",
      listItems: [
        { list: "Website & Socials Launch", icon: "/img/checked.svg" },
        { list: "Marketing + Community Building", icon: "/img/checked.svg" },
        { list: "PinkSale AMA", icon: "/img/checked.svg" },
        { list: "TG & Twitter Raids", icon: "/img/checked.svg" },
        { list: "Private Call Group Features", icon: "/img/checked.svg" },
        { list: "Pinksale Fair Launch", icon: "/img/checked.svg" },
        { list: "Dexscreener + Dexview Trending", icon: "/img/unchecked.svg" },
        { list: "Dexscreener + Dexview Trending", icon: "/img/unchecked.svg" },
        { list: "Dexscreener + Dexview Trending", icon: "/img/unchecked.svg" },
        { list: "Dexscreener + Dexview Trending", icon: "/img/unchecked.svg" },
        { list: "Dexscreener + Dexview Trending", icon: "/img/unchecked.svg" },
        { list: "Dexscreener + Dexview Trending", icon: "/img/unchecked.svg" },
        { list: "Dexscreener + Dexview Trending", icon: "/img/unchecked.svg" },
        { list: "Dexscreener + Dexview Trending", icon: "/img/unchecked.svg" },
      ],
    },
  ];
  return (
    <Element name="Roadmap">
      <div>
        <div className="pt-[50px] md:pt-[100px] bgColor">
          <div className="text-[28px] leading-[44px] md:text-[42px] md:leading-[58px] text-white mb-[60px] acostaregular text-center">
            Roadmap
          </div>
          <div className="container grid grid-cols-1 md:grid-cols-3 gap-[50px] md:gap-[110px]">
            {roadmapData.map((item, i) => (
              <div key={i} className="">
                <div className="text-white acostaregular text-[22px] leading-[28px] md:text-[30px] md:leading-[38px] mb-[20px] md:mb-[30px]">
                  {item.title}
                </div>
                <ul>
                  {item.listItems.map((listItem, l) => (
                    <li key={l} className="mb-[10px]">
                      <div className="flex items-center">
                        <div className="mr-4">
                          <img src={listItem.icon} alt="img" />
                        </div>
                        <div className="roboto font-semibold text-white text-base leading-6">
                          {listItem.list}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Roadmap;
