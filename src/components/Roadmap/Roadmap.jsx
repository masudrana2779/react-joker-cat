import { Element } from "react-scroll";

const Roadmap = () => {
  const roadmapData = [
    {
      title: "Phase 1: ",
      subTitle: "Meme Token Launch",
      listItems: [
        {
          list: "Launch JCAT on Solana: Begin as a meme token to attract initial interest and community support.",
          icon: "/img/checked.svg",
        },
        {
          list: "Presale and Airdrop: Conduct a transparent presale and distribute airdrops to early supporters.",
          icon: "/img/checked.svg",
        },
      ],
    },
    {
      title: "Phase 2: ",
      subTitle: "Ecosystem Development",
      listItems: [
        {
          list: " JCAT Swap: Develop a decentralized exchange platform tailored for JCAT and other tokens.",
          icon: "/img/checked.svg",
        },
        {
          list: "Staking: Introduce staking mechanisms to reward long-term holders and secure the network.",
          icon: "/img/checked.svg",
        },
        {
          list: "Gaming Platform: Launch a gaming platform where users can play and earn JCAT.",
          icon: "/img/checked.svg",
        },
      ],
    },
    {
      title: "Phase 3:",
      subTitle: "Transition to Full-Fledged Blockchain",
      listItems: [
        {
          list: "Blockchain Development: Begin the development of Joker Cat’s own blockchain, aiming for enhanced security, scalability, and functionality.",
          icon: "/img/checked.svg",
        },
        {
          list: "Integration and Expansion: Integrate various applications and expand the ecosystem to include more utilities and services",
          icon: "/img/checked.svg",
        },
        {
          list: "Community Governance: Implement a decentralized governance model to give the community a voice in the project’s direction and decisions.",
          icon: "/img/checked.svg",
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
          <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[50px] md:gap-[30px]">
            {roadmapData.map((item, i) => (
              <div key={i} className="">
                <div className="text-white acostaregular text-xl leading-[38px] mb-[20px]">
                  {item.title} <br /> {item.subTitle}
                </div>
                <ul className="space-y-5">
                  {item.listItems.map((listItem, l) => (
                    <li key={l} className="">
                      <div className="flex">
                        <div className="mr-4 min-w-[21px] mt-1">
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
