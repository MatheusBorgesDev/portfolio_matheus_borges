import Image from "next/image";
import { Card } from "./card";
import { Button } from "./button";
import Link from "next/link";
import {
  ArrowRightIcon,
  ArrowUpRight,
  ArrowUpRightIcon,
  GithubIcon,
  GlobeIcon,
  PlusCircleIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react";

interface ProjectItemProps {
  imageUrl: string;
  projectName: string;
  projectDescription: string;
}

const ProjectItem = ({
  projectName,
  imageUrl,
  projectDescription,
  ...props
}: ProjectItemProps) => {
  return (
    <div {...props}>
      <Card className="flex flex-col border-2 border-gray-500 p-1 my-3 min-h-[24rem] w-[20rem] bg-transparent rounded-lg">
        <Image
          src={imageUrl}
          width={0}
          height={0}
          className="h-[20rem] w-auto object-cover rounded-lg"
          sizes="100%"
          alt="Foto de Matheus Borges"
        />

        <div className="flex flex-col gap-4 w-full p-4 backdrop-blur-md rounded-lg">
          <div>
            <p className="text-secondary font-bold ">{projectName}</p>
            <p className="text-secondary font-light text-sm">
              {projectDescription}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full items-center">
          <Button className="flex justify-between w-full h-12">
              <PlusIcon /> Mais detalhes <ArrowRightIcon />{" "}
            </Button>

            <Button className="flex justify-between w-full h-12">
              <GlobeIcon /> Demo <ArrowUpRightIcon />{" "}
            </Button>

            <Button className="flex justify-between w-full h-12">
              <GithubIcon /> Código <ArrowUpRightIcon />{" "}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectItem;
