import { ArrowUpRight } from "lucide-react";
import TechnologyItem from "./TechnologyItem";
import { Button } from "./button";
import Link from "next/link";

const TechnologiesField = () => {
  return (
    <>
      <div className="flex rounded-xl bg-transparent border-primary backdrop-blur-sm gap-4 flex-wrap p-5 justify-between shadow-brutal ">
        <TechnologyItem
          imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          techName="React"
        ></TechnologyItem>
        <TechnologyItem
          imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          techName="Next.JS"
        />
        <TechnologyItem
          imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          techName="TypeScript"
        />
        <TechnologyItem
          imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          techName="Tailwind"
        />

        <div className="flex w-full items-center justify-center">
          <Button variant="secondary" className="text-foreground object-fit">
            <Link href="/projects">
              <div className="flex gap-2 items-center">
                <p>Veja os projetos</p>
                <ArrowUpRight />
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default TechnologiesField;
