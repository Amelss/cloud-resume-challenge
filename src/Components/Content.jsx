
import About from "./About"
import Experience from "./Experience"


export default function Content() {
  return (
      <div>
          <div className="py-10">
              <About />
          </div>
          
          <div className="bg-gray-100 py-10">
             <Experience />  
          </div>
         
     
      </div>
  )
}
