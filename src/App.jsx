import "./index.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";

function App() {
  return (
    <>
      <div className="custom-font">
        <div className="bg-gray-100 pb-5">
          <Header />
          <Hero />
        </div>
        <div className="">
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
