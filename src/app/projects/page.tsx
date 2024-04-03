"use client";
import ProjectItem from "@/components/ui/ProjectItem";
import ScrollButton from "@/components/ui/ScrollButton";
import projectsData from "@/utils/projectsData";
import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "../../utils/i18n";

const Projects = () => {
  const { t } = useTranslation();
  const language = i18n.language;

  return (
      <div id="header" className="flex flex-col pt-20 lg:max-w-[70rem]">
        <div className="flex flex-col gap-10 px-4 pb-10">
          <div>
            <p className="text-md text-secondary font-bold opacity-80">
              {"<"}Working{"/>"}
            </p>
            <h2 className="text-[3.5rem] text-primary leading-[3rem] font-bold">
              {t("myProjects")}
            </h2>
          </div>

          <div className="flex gap-8 flex-wrap justify-center">
            {projectsData.map((project) => (
              <ProjectItem
                key={project.id}
                project={{
                  id: project.id,
                      name: project.name,
                      intro:
                        language == "en" ? project.introEn : project.introBr,
                      description:
                        language == "en"
                          ? project.descriptionEn
                          : project.descriptionBr,
                      image: project.image,
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
  );
};

export default Projects;
