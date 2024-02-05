import Header from "@/components/ui/Header";
import TechnologyItem from "@/components/ui/TechnologyItem";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col mx-4 gap-8">
      <div className="flex flex-col gap-10 my-12 py-4">
        <div className="flex justify-center">
          <div className="w-[15rem]">
            <Link href="/about">
              <Image
                src="https://github.com/MatheusBorgesDev.png"
                width={0}
                height={0}
                className="h-auto w-full rounded-xl"
                sizes="100vw"
                alt="Foto de Matheus Borges"
              />
            </Link>
          </div>
        </div>

        <div>
          <h1 className="text-md font-bold opacity-65">
            Olá, Matheus Borges aqui!
          </h1>
          <h2 className="text-[3.5rem] text-primary leading-[3rem] font-bold">
           Desenvolvedor front-end.
          </h2>
        </div>

        <div className="flex rounded-xl bg-primary-foreground gap-4 flex-wrap p-5 justify-between">
          <TechnologyItem imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <TechnologyItem imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
          <TechnologyItem imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
          <TechnologyItem imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
          <TechnologyItem imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <TechnologyItem imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          <TechnologyItem imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <TechnologyItem imgUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />

          <div className="flex w-full items-center justify-center">
          <Button className="object-fit">
            <div className="flex gap-2">
              <p>Veja os projetos</p>
              <ArrowUpRight />
            </div>
          </Button>
        </div>
        </div>
      </div>

      <Separator />

      <div className="my-12">
        <div>
          <p className="text-md opacity-65 font-bold">
            {"<"}helloWorld{"/>"}
          </p>
          <p className="text-[3.5rem] leading-[3rem] font-bold">Projetos</p>
        </div>

        
      </div>
    </div>
  );
}
