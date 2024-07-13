// NavBar.js
import { IoClose } from "react-icons/io5";
interface NavBarProps {
  isNavOpen: boolean;
  toggleNav: () => void;
}

function NavBar({ isNavOpen, toggleNav }: NavBarProps) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-[300px] bg-white transition-transform transform ${
        isNavOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button onClick={toggleNav} className="p-[16px] text-black">
        <IoClose size={24} />
      </button>
      <nav className="mt-10">
        <ul className="text-black text-[20px]" style={{ fontFamily: "go" }}>
          <li className="p-[16px]">Home</li>
          <li className="p-[16px]">About</li>
          <li className="p-[16px]">Services</li>
          <li className="p-[16px]">Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
