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
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./sheet";

interface ProjectItemProps {
  project: {
    id: string;
    name: string;
    intro: string;
    description: string;
    images: string[];
    techs: string[];
    demoLink: string;
    gitLink: string;
  };
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Card className="flex flex-col border-2 border-gray-500 p-1 my-3 min-h-[24rem] w-[20rem] bg-gradient-to-b from-background to-foreground rounded-lg backdrop-blur-md">
          <Image
            src={`/projects-images/${project.images[0]}`}
            width={0}
            height={0}
            className="h-[20rem] w-auto rounded-lg"
            sizes="100%"
            alt={`Home page of ${project.name}`}
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
                        alt="Ícone de tecnologia"
                      />
                    ))}
                  </div>
                )}
              </div>
              <p className="text-secondary font-light w-full text-sm truncate">
                {project.intro}
              </p>
              {project.description}
            </div>
          </div>
        </Card>
      </SheetTrigger>

      <SheetContent className="bg-foreground">
        <SheetClose asChild>
          <Button type="submit">
            <ArrowLeft />
          </Button>
        </SheetClose>
        <div className="text-3xl text-primary leading-[3rem] font-bold pt-4">
          <div className="flex w-full justify-between items-center">
            {project?.name}
            <div className="flex">
              {project?.techs.map((tech) => (
                <Image
                  key={tech}
                  src={`/${tech}.png`}
                  width={0}
                  height={0}
                  className="h-auto w-[2rem] rounded-xl"
                  sizes="100vw"
                  alt="Ícone de tecnologia"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-secondary py-1">
          <div className="flex flex-col gap-4">
            <div>
              <Image
                src={`/projects-images/${project?.images[0]}`}
                width={0}
                height={0}
                className="h-[15rem] w-full object-cover rounded-lg"
                sizes="100%"
                alt="Foto fo projeto"
              />
            </div>
          </div>

          <div className="flex rounded-xl bg-transparent border-primary backdrop-blur-sm gap-4 flex-wrap p-5 justify-between shadow-brutal">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-lg">{project.intro}</h2>

              <p className="text-sm opacity-80">{project.description}</p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center gap-4 w-full">
            <Button variant="secondary" className="w-full h-12">
              <Link
                href={`${project?.demoLink}`}
                className="flex justify-between w-full items-center"
                target="_blank"
              >
                <GlobeIcon /> Demo <ArrowUpRightIcon />{" "}
              </Link>
            </Button>

            <Button variant="secondary" className="w-full h-12">
              <Link
                href={`${project.gitLink}`}
                className="flex justify-between w-full items-center"
                target="_blank"
              >
                <GithubIcon /> Código <ArrowUpRightIcon />{" "}
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProjectItem;
