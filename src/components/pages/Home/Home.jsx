import Banner from "../../Banner/Banner";
import { JokerCatAcademy } from "../../JokerCatAcademy/JokerCatAcademy";
import Nav from "../../Nav/Nav";

const Home = () => {
  return (
    <>
      <div className="bgColor pb-[100px]">
        <Nav />
        <Banner />
      </div>
      <JokerCatAcademy />
    </>
  );
};

export default Home;
