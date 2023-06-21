import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../media/logo_lava_mas_opt.svg";
//import logo2 from "../media/logo_lava_mas2.png";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed z-40 w-full" id="nav">
        <div className="hidden md:flex py-4 pl-8 text-blue-600 w-full" style={{backgroundColor:`#00e1ff`}}>
          <img className="w-32 ml-20" src={logo} alt="" />
          <Link
            className="cursor-pointer ml-[500px] text-2xl mt-2 font-semibold"
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Nosotros
          </Link>
          <Link
            className="cursor-pointer ml-20 text-2xl mt-2  font-semibold"
            to="service"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Servicios
          </Link>
          <Link
            className="cursor-pointer ml-20 text-2xl mt-2  font-semibold"
            to="terms"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Términos
          </Link>
          <Link
            className="cursor-pointer ml-20 text-2xl mt-2  font-semibold"
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Contáctanos
          </Link>
        </div>

    
          {/* Mobile menu button */}
        <div className="md:hidden flex justify-between py-2" style={{backgroundColor:`#00e1ff`}}>
          <img className="w-16 ml-4 " src={logo} alt="" />
          <button
            onClick={toggleMenu}
            className="inline-flex  items-center justify-center  rounded-md text-blue-600   focus:text-blue-950 transition duration-150 ease-in-out"
          >
            <svg
              className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>


      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden`} style={{backgroundColor:`#00e1ff`}}
      >
        <div className="px-2 pt-2 pb-3 flex flex-col text-blue-600">
          <Link
            className="cursor-pointer ml-4 "
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Nosotros
          </Link>
          <Link
            className="cursor-pointer ml-4 "
            to="service"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Servicios
          </Link>
          <Link
            className="cursor-pointer ml-4 "
            to="terms"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Términos
          </Link>
          <Link
            className="cursor-pointer ml-4 "
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Contacto
          </Link>
        </div>
      </div>
      </nav>
    </>
  );
}

export default Navbar;
