import { Outlet } from "react-router-dom";
// import Nav from "../Nav/Nav";

const Layouts = () => {
  return (
    <>
      {/* <Nav /> */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Layouts;
