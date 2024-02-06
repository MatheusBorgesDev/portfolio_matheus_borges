import { ArrowUpRight } from "lucide-react";
import TechnologyItem from "./TechnologyItem";
import { Button } from "./button";

const TechnologiesField = () => {
  return (
    <>
      <div className="flex rounded-xl bg-primary-foreground gap-4 flex-wrap p-5 justify-between">
        <TechnologyItem imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        <TechnologyItem imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
        <TechnologyItem imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
        <TechnologyItem imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />

        <div className="flex w-full items-center justify-center">
          <Button className="object-fit">
            <div className="flex gap-2 items-center">
              <p>Veja os projetos</p>
              <ArrowUpRight />
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default TechnologiesField;
