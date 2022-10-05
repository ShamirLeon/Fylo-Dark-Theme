import Logo from "../../assets/icons/Logo";
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-5 py-[20px] lg:pb-5 bg-primaryB-500">
      <Logo width={100} />

      <div className="flex gap-5">
        <NavLink title="Features" />
        <NavLink title="Team" />
        <NavLink title="Sign In" />
      </div>
    </nav>
  );
};

export default NavBar;
