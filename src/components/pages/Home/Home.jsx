import Banner from "../../Banner/Banner";
import { JokerCatAcademy } from "../../JokerCatAcademy/JokerCatAcademy";
import Nav from "../../Nav/Nav";
import Roadmap from "../../Roadmap/Roadmap";

const Home = () => {
  return (
    <div className="bgColor">
      <div className="pb-[100px]">
        <Nav />
        <Banner />
      </div>
      <JokerCatAcademy />
      <Roadmap />
    </div>
  );
};

export default Home;
