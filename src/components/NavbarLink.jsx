import { NavLink } from "react-router-dom";

const NavbarLink = ({ title, count, path }) => {
  return (
    <li className='w-full h-10 flex justify-stretch items-center uppercase tracking-widest md:h-full xl:text-lg'>
      <NavLink
        to={path}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "w-full h-full p-2 border-r-3 border-r-blue md:border-r-[0] md:border-b-3 md:border-b-blue md:flex md:items-center"
            : "w-full h-full p-2 hover:border-r-3 border-r-gray md:w-[fit-content] md:hover:border-r-[0] md:hover:border-b-3 md:hover:border-b-gray md:flex md:items-center"
        }
      >
        <span className='mr-2 pl-8 font-bold text-white md:hidden md:pl-[0] xl:inline'>
          {count}
        </span>
        {title}
      </NavLink>
    </li>
  );
};

export default NavbarLink;
