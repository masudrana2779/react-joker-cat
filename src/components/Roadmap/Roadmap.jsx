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
    <div>
      <div className="pt-[100px] pb-[160px]">
        <div className="text-[42px] leading-[58px] text-white mb-[60px] acostaregular text-center">
          Roadmap
        </div>
        <div className="container grid grid-cols-3 gap-[110px]">
          {roadmapData.map((item, i) => (
            <div key={i} className="">
              <div className="text-white acostaregular text-[30px] leading-[38px] mb-[30px]">
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
  );
};

export default Roadmap;
