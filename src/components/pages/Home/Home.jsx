import Banner from "../../Banner/Banner";
import Nav from "../../Nav/Nav";

const Home = () => {
  return (
    <>
      <div className="h-screen banner_bg">
        <Nav />
        <Banner />
      </div>
    </>
  );
};

export default Home;
