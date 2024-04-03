import Image from "next/image";
import { Card } from "./card";
import { Button } from "./button";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRightIcon,
  GithubIcon,
  GlobeIcon,
} from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "./dialog";
import { useTranslation } from "react-i18next";

interface ProjectItemProps {
  project: {
    id: string;
    name: string;
    intro: string;
    description?: string;
    image: string;
    techs: string[];
    demoLink: string;
    gitLink: string;
  };
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const { t } = useTranslation();

  return (
    <Dialog>
      <DialogTrigger>
        <div className="shadow-green rounded-lg">
          <Card className="flex flex-col border-2 bg-foreground border-foreground p-1 my-3 min-h-[24rem] w-[20rem] rounded-lg backdrop-blur-md">
            <Image
              src={`/projects-images/${project.image}`}
              width={0}
              height={0}
              className="h-[20rem] w-auto rounded-lg"
              sizes="100%"
              alt={`Preview of ${project.name}`}
            />

            <div className="flex flex-col gap-4 w-full p-4 rounded-lg">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-secondary font-bold text-xl">
                    {project.name}
                  </p>

                  {Array.isArray(project.techs) && (
                    <div className="flex flex-wrap">
                      {project.techs.map((tech) => (
                        <Image
                          key={tech}
                          src={`/${tech}.png`}
                          width={0}
                          height={0}
                          className="h-auto w-[2rem] rounded-xl"
                          sizes="100vw"
                          alt="Tech icon"
                        />
                      ))}
                    </div>
                  )}
                </div>
                <p className="text-secondary text-left w-full text-sm truncate">
                  {project.intro}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </DialogTrigger>

      <DialogContent className="bg-foreground max-w-full w-[400px] md:w-[500px] rounded-lg flex flex-col gap-4 max-h-[90%] p-6">
        <DialogClose className="flex items-start">
          <Button type="button">
            <ArrowLeft />
          </Button>
        </DialogClose>

        <div className="flex w-full justify-between items-center text-3xl text-primary font-bold">
          {project.name}
          <div className="flex">
            {project?.techs.map((tech) => (
              <Image
                key={tech}
                src={`/${tech}.png`}
                width={0}
                height={0}
                className="h-auto w-[2rem] rounded-xl"
                sizes="100vw"
                alt="Tech icon"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 min-h-full">
          <Image
            src={`/projects-images/${project?.image}`}
            width={0}
            height={0}
            className="h-[15rem] w-full object-cover rounded-lg"
            sizes="100%"
            alt={`Preview of ${project.name}`}
          />

          <h2 className="font-bold text-lg text-secondary">{project.intro}</h2>

          <div className="flex flex-col rounded-lg gap-4 p-4 shadow-greenNeon text-secondary overflow-y-auto">
            <p className="text-sm opacity-85">
              <div className="whitespace-pre-wrap overflow-x-auto max-w-full">
                {project.description}
              </div>
            </p>
          </div>

          <div className="flex flex-col justify-between items-center w-full gap-4">
            <Button variant="secondary" className="w-full">
              <Link
                href={`${project?.demoLink}`}
                className="flex justify-between w-full items-center"
                target="_blank"
              >
                <GlobeIcon /> Demo <ArrowUpRightIcon />{" "}
              </Link>
            </Button>

            <Button variant="secondary" className="w-full">
              <Link
                href={`${project.gitLink}`}
                className="flex justify-between w-full items-center"
                target="_blank"
              >
                <GithubIcon /> {t("code")} <ArrowUpRightIcon />{" "}
              </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectItem;
