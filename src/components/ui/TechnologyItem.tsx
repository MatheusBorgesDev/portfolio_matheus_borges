import Image from "next/image";
import { Badge } from "./badge";

interface TechnologyItemProps {
  imgUrl: string;
}

const TechnologyItem = ({ imgUrl }: TechnologyItemProps) => {
  return (
    <Badge className="flex rounded-xl bg-primary-foreground border-none h-[80px] w-[80px] items-center justify-center">
      <Image
        src={imgUrl}
        width={0}
        height={0}
        className="h-auto w-[70px] rounded-xl"
        sizes="100vw"
        alt="Foto de Matheus Borges"
      />
    </Badge>
  );
};

export default TechnologyItem;
