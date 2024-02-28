import Image from "next/image";
import { Card } from "./card";
import { Button } from "./button";
import Link from "next/link";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  GithubIcon,
  GlobeIcon,
  PlusIcon,
} from "lucide-react";

interface ProjectItemProps {
  project: {
    id: string;
    name: string;
    intro: string;
    images: string[];
    techs?: string[];
    demoLink: string;
    gitLink: string;
  };
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const { id, name, intro, images, demoLink, gitLink } = project;

  return (
    <div>
      <Card className="flex flex-col border-2 border-gray-500 p-1 my-3 min-h-[24rem] w-[20rem] bg-gradient-to-b from-background to-foreground rounded-lg backdrop-blur-md">
        <Image
          src={`/projects-images/${images[0]}`}
          width={0}
          height={0}
          className="h-[20rem] w-auto rounded-lg"
          sizes="100%"
          alt={`Home page of ${name}`}
        />

        <div className="flex flex-col gap-4 w-full p-4 rounded-lg">
          <div>
            <p className="text-secondary font-bold ">{name}</p>
            <p className="text-secondary font-light w-full text-sm truncate">{intro}</p>
          </div>
          <div className="flex flex-col gap-2 w-full items-center">
            <Button className="w-full h-12">
              <Link
                href={`projects/${id}`}
                className="flex justify-between w-full items-center"
              >
                <PlusIcon /> Mais detalhes <ArrowRightIcon />{" "}
              </Link>
            </Button>

            <Button className="w-full h-12">
              <Link
                href={demoLink}
                className="flex justify-between w-full items-center"
              >
                <GlobeIcon /> Demo <ArrowUpRightIcon />{" "}
              </Link>
            </Button>

            <Button className="w-full h-12">
              <Link
                href={gitLink}
                className="flex justify-between w-full items-center"
              >
                <GithubIcon /> Código <ArrowUpRightIcon />{" "}
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectItem;
