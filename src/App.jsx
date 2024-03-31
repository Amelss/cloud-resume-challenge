import "./index.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Content from "./Components/Content";




function App() {




  return (
    <>
      <div className="custom-font 2xl:w-[1800px] 2xl:mx-auto">

        <div className="bg-gray-100 pb-5">
          <Header />
          <Hero />
        </div>
        <div className="2xl:bg-gray-100">
          <Content />
        </div>
      
        
      </div>
    </>
  );
}

export default App;
