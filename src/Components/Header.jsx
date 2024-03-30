export default function Header() {



     const handleSmoothScroll = (event) => {
       event.preventDefault();
       const targetId = event.target.getAttribute("href").substring(1);
       const targetElement = document.getElementById(targetId);
       if (targetElement) {
         targetElement.scrollIntoView({
           behavior: "smooth",
           block: "start", 
         });
       }
     };
  return (
    <div className="custom-font">
      <div className="text-center text-sm xl:text-base xl:flex justify-between items-center py-3 px-5">
        <div>
          <h1 className="custom-font text-3xl font-bold text-blue-300">
            Ameley In The Clouds
          </h1>
        </div>
        <div className="custom-font">
          <ul className="list-none flex justify-center">
            <li className="py-2">
              <a href="#about" className="link" onClick={handleSmoothScroll}>
                About
              </a>
            </li>
            <li className="py-2">
              <a
                href="#experience"
                className="link ml-3"
                onClick={handleSmoothScroll}
              >
                Experience
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="link ml-3" onClick={handleSmoothScroll}>
                Projects
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="link ml-3" onClick={handleSmoothScroll}>
                Skills
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
