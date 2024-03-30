import Card from "./Card";
import Data from "./Data";

export default function Projects() {

    const projectData = Data.map(project => {
        return <Card key={project.id}
        {...project} />
    })
  return (
    <div>
      {projectData}
          


    </div>
  );
}
