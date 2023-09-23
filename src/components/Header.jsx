import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import menuClose from "../assets/shared/icon-close.svg";

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
      <nav className='relative flex justify-between items-center py-4 md:py-[0] md:h-[7rem]'>
        <Link to='/'>
          <img src={logo} alt='Logo' />
        </Link>

        <ul
          className='fixed bg-[rgba(255, 255, 255, 0.04)] backdrop-blur-[4rem] top-[0] right-[-100vw] w-[60vw] h-full pt-[15rem] flex flex-col items-start gap-4 text-lg'
          ref={mobileMenuRef}
        ></ul>

        <button className='z-10 md:hidden md:z-[0]' onClick={toggleNav}>
          <img src={!isMenuOpen ? menu : menuClose} alt='menu' />
        </button>
      </nav>
    </header>
  );
};

export default Header;
