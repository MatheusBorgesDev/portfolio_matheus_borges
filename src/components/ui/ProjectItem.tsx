import Image from "next/image";
import { Card } from "./card";
import { Button } from "./button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectItemProps {
  projectName: string;
  imageUrl: string;
}

const ProjectItem = ({ projectName, imageUrl }: ProjectItemProps) => {
  return (
    <Card className="flex flex-col h-[24rem] w-[20rem] gap-4 relative">
      <Image
        src={imageUrl}
        width={0}
        height={0}
        className="h-full w-auto rounded-xl"
        sizes="100%"
        alt="Foto de Matheus Borges"
      />

      <div className="flex flex-col absolute m-3 p-1 backdrop-blur-3xl rounded-lg">
        <p className="text-primary-foreground ">{projectName}</p>
      </div>

      <div className="flex gap-8 absolute bottom-0 w-full justify-between p-4">
        <Link href="/" target="_blank">
          <Button variant="outline">
            Acessar <ArrowUpRight />
          </Button>
        </Link>
        <Link href="/">
          <Button variant="outline">Saber mais</Button>
        </Link>
      </div>
    </Card>
  );
};

export default ProjectItem;
