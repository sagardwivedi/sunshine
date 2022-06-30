import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

import { Link } from "react-router-dom";
import CompanyLogo from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="absolute inset-x-0 mx-auto z-50 flex w-[90%] flex-row justify-between py-8 sm:w-[95%]">
      <img src={CompanyLogo} alt="Company Logo" />
      <FontAwesomeIcon
        icon={solid("bars")}
        color="white"
        className="sm:hidden"
      />
      <ul className="hidden space-x-5 font-[Barlow] text-white sm:block">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link
          className="rounded-3xl bg-white px-4 py-2 font-[Fraunces] text-black transition-colors hover:bg-white/20 hover:text-white hover:duration-200 hover:ease-in"
          to="/contact"
        >
          CONTACT
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
