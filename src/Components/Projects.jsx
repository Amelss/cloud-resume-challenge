
import Card from "./Card";
import Data from "./Data";

export default function Projects() {

    const projectData = Data.map(project => {
        return <Card key={project.id}
        {...project} />
    })
  
  
  return (
    <div id="projects">
      <h1 className="text-center text-3xl font-bold text-blue-300 mb-5 pt-4 xl:text-4xl">
        Projects
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 3xl:grid-cols-4 gap-2">
         {projectData}
    </div>
       
     
    </div>
  );
}
