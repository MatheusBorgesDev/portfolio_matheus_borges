import Image from "next/image";

import { Badge } from "./badge";

interface TechnologyItemProps {
  imgUrl: string;
  techName: string;
}

export function TechnologyItem({ imgUrl, techName }: TechnologyItemProps) {
  return (
    <Badge className="flex flex-col rounded-xl bg-transparent h-[80px] w-[80px] items-center justify-center hover:bg-transparent">
      <Image
        src={imgUrl}
        width={0}
        height={0}
        className="h-auto w-[70px] rounded-xl"
        sizes="100vw"
        alt="Foto de Matheus Borges"
      />
      <p className="text-secondary">{techName}</p>
    </Badge>
  );
}
