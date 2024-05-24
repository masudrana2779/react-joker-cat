import { Link } from "react-router-dom";

const NavbarTopSocial = () => {
  return (
    <div className="container flex justify-between items-center py-10 px-[219px]">
      <div className="flex items-center space-x-4">
        <Link
          to={"/"}
          className="flex items-center justify-center bg_gradient w-10 h-10 rounded-full"
        >
          <img src="/img/social-1.png" alt="social" />
        </Link>
        <Link
          to={"/"}
          className="flex items-center justify-center bg_gradient w-10 h-10 rounded-full"
        >
          <img src="/img/social-2.png" alt="social" />
        </Link>
        <Link
          to={"/"}
          className="flex items-center justify-center bg_gradient w-10 h-10 rounded-full"
        >
          <img src="/img/social-3.png" alt="social" />
        </Link>
        <Link
          to={"/"}
          className="flex items-center justify-center bg_gradient w-10 h-10 rounded-full"
        >
          <img src="/img/social-4.png" alt="social" />
        </Link>
        <Link
          to={"/"}
          className="flex items-center justify-center bg_gradient w-10 h-10 rounded-full"
        >
          <img src="/img/social-5.png" alt="social" />
        </Link>
        <Link
          to={"/"}
          className="flex items-center justify-center bg_gradient w-10 h-10 rounded-full"
        >
          <img src="/img/social-6.png" alt="social" />
        </Link>
      </div>
      <div className="gradient-border">
        <div className="flex items-center p-2 bg_gradient cursor-pointer">
          <div className="">
            <img src="/img/eng.png" alt="img" />
          </div>
          <div className="px-6 text-white">EN</div>
          <div className="">
            <img src="/img/right-angle.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTopSocial;
