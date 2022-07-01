import { Link } from "react-router-dom";
import { Icons } from "../images";

const Navbar = () => {
  return (
    <nav className="absolute inset-x-0 z-50 mx-auto flex w-[90%] flex-row justify-between py-8 sm:w-[95%]">
      <img src={Icons.CompanyIcon} alt="Company Logo" />
      <img src={Icons.FacebookIcon} className="sm:hidden" alt="HamburgerIcon" />
      <ul className="hidden space-x-5 font-[Barlow] text-white sm:block">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link
          className="rounded-3xl bg-white px-4 py-2 font-[Fraunces] transition-colors hover:bg-white/20 hover:text-white hover:duration-200 hover:ease-in"
          to="/contact"
        >
          CONTACT
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
