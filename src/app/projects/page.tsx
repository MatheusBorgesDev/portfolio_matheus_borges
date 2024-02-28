import ProjectItem from "@/components/ui/ProjectItem";
import ScrollUpButton from "@/components/ui/ScrollUpButton";
import projectsData from "@/utils/projectsData";

const Projects = () => {
  return (
    <div id="header" className="flex flex-col pt-20 bg-bgImg bg-cover bg-[90%]">
      <div className="flex flex-col gap-10 px-4 pb-10">
        <div>
          <p className="text-md text-secondary font-bold opacity-80">
            {"<"}Working{"/>"}
          </p>
          <h2 className="text-[3.5rem] text-primary leading-[3rem] font-bold">
            Meus <br /> projetos
          </h2>
        </div>

        <div className="flex gap-8 flex-wrap justify-center">

          {projectsData.map((project) => (
            <ProjectItem 
              key={project.id} 
                project={{
                id: project.id,
                name: project.name,
                intro: project.intro,
                images: [project.images[0]],
                techs: project.techs,
                demoLink: project.demoLink,
                gitLink: project.gitLink
              }}              
          />
          ))
        }

        </div>
      </div>
      <ScrollUpButton />
    </div>
  );
};

export default Projects;
