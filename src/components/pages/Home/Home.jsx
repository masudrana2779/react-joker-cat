import Banner from "../../Banner/Banner";
import { JokerCatAcademy } from "../../JokerCatAcademy/JokerCatAcademy";
// import Nav from "../../Nav/Nav";
import Partner from "../../Partner/Partner";
import Roadmap from "../../Roadmap/Roadmap";
import Tokenomics from "../../Tokenomics/Tokenomics";

const Home = () => {
  return (
    <>
      <Banner />
      <JokerCatAcademy />
      <Roadmap />
      <Tokenomics />
      <Partner />
    </>
  );
};

export default Home;
