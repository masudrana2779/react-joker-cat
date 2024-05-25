const Tokenomics = () => {
  const tokenomicsData = [
    {
      title: "Tokenomics",
      listItems: [
        { list: "Token Symbol: $Jcat", icon: "/img/round.svg" },
        { list: "Supply: 666 666 666(100%)", icon: "/img/round.svg" },
        { list: "Presale: 400,000,001(60%)", icon: "/img/round.svg" },
        { list: "Liquidity: 199,999,999(30%)", icon: "/img/round.svg" },
        { list: "Marketing: 33,333,333(5%)", icon: "/img/round.svg" },
        { list: "Community: 33,333,333(5%)", icon: "/img/round.svg" },
        { list: "Tax: 0%", icon: "/img/round.svg" },
      ],
    },
  ];
  return (
    <div className="container grid grid-cols-2 justify-between  pb-[160px]">
      <div className="">
        {tokenomicsData.map((item, i) => (
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
                    <div className="font-bold text-white text-base leading-6">
                      {listItem.list}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="">
        <img src="/img/Tokenomics.png" alt="" />
      </div>
    </div>
  );
};

export default Tokenomics;
