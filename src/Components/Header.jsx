import Hamburger from "hamburger-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="custom-font">
      <div className="flex justify-between items-center">
        <div className="xl:hidden">
          <Hamburger toggled={isOpen} toggle={toggleMenu} />
        </div>
        <div className="px-3 text-lg xl:hidden">
          <h1 className="text-blue-300 font-bold">Ameley In The Clouds</h1>
        </div>
      </div>
      {isOpen && (
        <div className=" bg-gray-100 h-screen opacity-90">
          <ul className="list-none p-5">
            <li className="py-2">
              <a href="#" className="link">
                About
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="link">
                Experience
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="link">
                Projects
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="link">
                Skills
              </a>
            </li>
          </ul>
        </div>
      )}

      <div className="hidden xl:flex justify-between items-center py-3 px-5">
        <div>
          <h1 className="custom-font text-3xl font-bold text-blue-300">Ameley In The Clouds</h1>
        </div>
        <div className="custom-font">
          <ul className="list-none flex justify-center">
            <li className="py-2">
              <a href="#" className="link">
                About
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="link ml-3">
                Experience
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="link ml-3">
                Projects
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="link ml-3">
                Skills
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
