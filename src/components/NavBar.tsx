// NavBar.js
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  isNavOpen: boolean;
  toggleNav: () => void;
}

function NavBar({ isNavOpen, toggleNav }: NavBarProps) {
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: "main" },
    { label: "Me", path: "" },
    { label: "Career", path: "career" },
    { label: "Gallery", path: "" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-[300px] bg-white transition-transform transform ${
        isNavOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button onClick={toggleNav} className="p-[16px] text-black">
        <IoClose size={24} />
      </button>
      <nav className="mt-10">
        <ul className="text-black text-[26px]" style={{ fontFamily: "mj" }}>
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => item.path && navigate(item.path)}
              className="p-[16px] hover:opacity-75 hover:underline cursor-pointer"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
