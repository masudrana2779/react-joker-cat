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
        { list: "CMC / CG Fast Track Listings", icon: "/img/checked.svg" },
        { list: "Go live on Jupiter", icon: "/img/checked.svg" },
        { list: "Trust Wallet Integration", icon: "/img/checked.svg" },
        { list: "Listing on MEXC", icon: "/img/checked.svg" },
        { list: "Listing on BitMart", icon: "/img/checked.svg" },
        { list: "News/Blog on the website", icon: "/img/checked.svg" },
      ],
    },
    {
      title: "Phase one",
      listItems: [
        {
          list: "Launch Online Crypto Casino Partnership",
          icon: "/img/checked.svg",
        },
        {
          list: "Multi language website inc. Chinese",
          icon: "/img/checked.svg",
        },
        {
          list: "Launch Strategic Partnership w/GotBit Hedge Fund",
          icon: "/img/checked.svg",
        },
        {
          list: "Launch Strategic Partnership with The Gari Network / Chingari App",
          icon: "/img/checked.svg",
        },
        { list: "Launch $CATNIP incentive token", icon: "/img/checked.svg" },
        {
          list: "Launch Joker cat DAPP (including staking+farming+fiat onramp)",
          icon: "/img/checked.svg",
        },
        { list: "Unveil NFT Collection", icon: "/img/unchecked.svg" },
        { list: "Mint first 200 NFTs", icon: "/img/unchecked.svg" },
        { list: "Reach $100m Market Cap", icon: "/img/unchecked.svg" },
        { list: "Listing on Tier 1 Exchange", icon: "/img/unchecked.svg" },
        {
          list: "Become the first cat token to reach $1B Market Cap",
          icon: "/img/unchecked.svg",
        },
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
          <div className="container grid grid-cols-1 md:grid-cols-3 gap-[50px] md:gap-[50px]">
            {roadmapData.map((item, i) => (
              <div key={i} className="">
                <div className="text-white acostaregular text-[22px] leading-[28px] md:text-[30px] md:leading-[38px] mb-[20px] md:mb-[30px]">
                  {item.title}
                </div>
                <ul>
                  {item.listItems.map((listItem, l) => (
                    <li key={l} className="mb-[10px]">
                      <div className="flex items-center">
                        <div className="mr-4 min-w-[21px]">
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
