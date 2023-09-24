import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/assets/shared/logo.svg";
import menu from "/assets/shared/icon-hamburger.svg";
import menuClose from "/assets/shared/icon-close.svg";
import NavbarLink from "./NavbarLink";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleNav = () => {
    mobileMenuRef.current.style.transition = "all ease-in-out 1s";
    if (!isMenuOpen) {
      mobileMenuRef.current.classList.remove("right-[-100vw]");
      mobileMenuRef.current.classList.add("right-[0]");
    } else {
      mobileMenuRef.current.classList.add("right-[-100vw]");
      mobileMenuRef.current.classList.remove("right-[0]");
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className='relative flex justify-between items-center py-4 md:py-[0] md:h-[10rem] md:ml-8 xl:pt-5 xl:h-[12rem]'>
        <Link to='/'>
          <img src={logo} alt='Logo' />
        </Link>

        <ul
          className='fixed bg-[rgba(255,255,255,0.04)] backdrop-blur-[4rem] top-[0] right-[-100vw] w-[60vw] h-full pt-[15rem] flex flex-col items-start gap-4 font-tagline text-lg md:static md:w-auto md:h-full md:pt-2 md:flex-row md:justify-between md:bg-[rgba(255,255,255,0.04)] md:p-[0] md:px-8 xl:pl-[10rem] xl:pr-[15rem] xl:relative  xl:right-[0] xl:before:h-[0.1rem] xl:before:absolute xl:before:top-[50%] xl:before:left-[-28vw] xl:before:w-[30vw] xl:before:bg-gray'
          ref={mobileMenuRef}
        >
          <NavbarLink path='/' count='00' title='Home' />
          <NavbarLink path='/destination' count='01' title='Destination' />
          <NavbarLink path='/crew' count='02' title='Crew' />
          <NavbarLink path='/technology' count='03' title='Technology' />
        </ul>

        <button className='z-10 md:hidden md:z-[0]' onClick={toggleNav}>
          <img src={!isMenuOpen ? menu : menuClose} alt='menu' />
        </button>
      </nav>
    </header>
  );
};

export default Header;
