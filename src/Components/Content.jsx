
import About from "./About"
import Experience from "./Experience"
import Projects from "./Projects"
import Skills from "./Skills"
import Education from "./Education"
import Footer from "./Footer"



export default function Content() {
  return (
    <div>
      <div className="py-10">
        <About />
      </div>

      <div className="bg-gray-100 py-10">
        <Experience />
      </div>
      <div>
        <Projects />
      </div>
      <div className="bg-gray-100 py-10">
        <Education />
      </div>

      <div>
        <Skills />
      </div>
      <div className="bg-gray-100 py-5">
        <Footer />
      </div>
    </div>
  );
}
