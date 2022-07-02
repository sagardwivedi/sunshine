import { Link } from "react-router-dom";
import { Icons } from "../images";

const Navbar = () => {
  const showMenu = () => {
    const menu = document.querySelector(".menu");
    menu?.classList.toggle("hidden");
    menu?.classList.toggle("flex");
    menu?.classList.toggle("absolute");
  };

  return (
    <nav className="absolute inset-x-0 z-50 mx-auto flex w-[90%] flex-row items-center justify-between space-x-5 py-8 mobileL:w-[95%]">
      <img src={Icons.CompanyIcon} alt="Company Logo" />
      <img
        src={Icons.HamburgerIcon}
        className="active:text-grayish-blue-100 sm:hidden"
        alt="HamburgerIcon"
        onClick={showMenu}
      />
      <ul className="menu -left-5 top-[135%] hidden flex-col items-center justify-center space-y-6 bg-white px-[7.2rem] py-8 font-[Barlow] text-lg text-grayish-blue-200 sm:block mobileL:space-y-0  mobileL:space-x-10 mobileL:bg-transparent mobileL:px-0 mobileL:py-0 mobileL:text-white">
        <span className="absolute -top-8 right-0 h-8 w-8 rounded-tl-full bg-white  mobileL:hidden" />
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link
          className="rounded-3xl bg-yellow px-4 py-3 font-[Fraunces] text-dark-de-blue transition-colors hover:bg-white/20 hover:text-white hover:duration-200 hover:ease-in mobileL:bg-white"
          to="/contact"
        >
          CONTACT
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
