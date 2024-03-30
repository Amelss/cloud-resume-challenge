import "./index.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Content from "./Components/Content";




function App() {




  return (
    <>
      <div className="custom-font">

        <div className="bg-gray-100 pb-5">
          <Header />
          <Hero />
        </div>
      <Content />
        
      </div>
    </>
  );
}

export default App;
