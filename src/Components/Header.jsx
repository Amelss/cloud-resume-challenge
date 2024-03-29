import Hamburger from "hamburger-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="custom-font">
      <div className="xl:hidden">
        <Hamburger direction="right" toggled={isOpen} toggle={toggleMenu} />
        {isOpen && (
          <div className="bg-white h-screen opacity-90">
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
      </div>

          <div className="hidden xl:flex justify-between items-center font-montserrat">
              <div>
                  <h1 className="custom-font">Ameley In The Clouds</h1>
              </div>
          <div className="custom-font">
            <ul className="list-none p-5 flex justify-center">
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
      </div>
    </div>
  );
}
