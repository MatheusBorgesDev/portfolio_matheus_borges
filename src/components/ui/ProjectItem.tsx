import Image from "next/image";
import { Card } from "./card";
import { Button } from "./button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectItemProps {
  imageUrl: string;
  projectName: string;
  projectDescription: string;
}

const ProjectItem = ({ projectName, imageUrl, projectDescription }: ProjectItemProps) => {
  return (
    <Card className="flex flex-col p-1 min-h-[24rem] w-[20rem] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-transparent rounded-lg">
      <Image
        src={imageUrl}
        width={0}
        height={0}
        className="h-[20rem] w-auto object-cover rounded-lg"
        sizes="100%"
        alt="Foto de Matheus Borges"
      />

      <div className="flex flex-col gap-2 w-full p-4 backdrop-blur-md rounded-lg">
        <div>
          <p className="text-secondary font-bold ">{projectName}</p>
          <p className="text-secondary font-light text-sm">{projectDescription}</p>
        </div>
        <div className="flex gap-8 items-center justify-center">
          <Link href="/" target="_blank">
            <Button variant="outline">
              Acessar <ArrowUpRight />
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline">Saber mais</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ProjectItem;
