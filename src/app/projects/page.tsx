"use client";
import Header from "@/components/ui/Header";
import ProjectItem from "@/components/ui/ProjectItem";
import ScrollButton from "@/components/ui/ScrollButton";
import projectsData from "@/utils/projectsData";
import { ArrowUp } from "lucide-react";
import { MouseEvent, useState } from "react";

const Projects = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };
  return (
    <div
      className={`flex w-screen justify-center bg-background ${
        darkMode ? "dark" : ""
      }`}
    >
      <div id="header" className="flex flex-col pt-20 lg:max-w-[70rem]">
        <Header
          isHomePage={false}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        />

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
                  description: project.description,
                  images: [project.images[0]],
                  techs: project.techs,
                  demoLink: project.demoLink,
                  gitLink: project.gitLink,
                }}
              />
            ))}
          </div>
        </div>
        <ScrollButton pageElement="header">
          <ArrowUp />
        </ScrollButton>
      </div>
    </div>
  );
};

export default Projects;
