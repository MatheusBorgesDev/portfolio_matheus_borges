"use client";

import Profile from "@/components/ui/Profile";
import ProjectItem from "@/components/ui/ProjectItem";
import ScrollUpButton from "@/components/ui/ScrollUpButton";
import TechnologiesField from "@/components/ui/TechnologiesField";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/utils/projectsData";
import Contacts from "@/components/ui/Contacts";

export default function Home() {
  return (
    <div id="header" className="flex flex-col pt-20 bg-bgLight bg-contain">
      <div className="flex flex-col gap-10 px-4 pb-20">
        <Profile />

        <div>
          <h1 className="text-md text-secondary font-bold opacity-80">
            Olá, Matheus Borges aqui! &#128075;
          </h1>
          <h2 className="text-[3.5rem] text-primary leading-[3rem] font-bold">
            Desenvolvedor <br />
            front-end.
          </h2>
        </div>
        <TechnologiesField />
      </div>

      <div className="flex flex-col gap-10 px-4 py-20">
        <div>
          <p className="text-md text-secondary font-bold opacity-80">
            {"<"}HelloWorld{"/>"}
          </p>
          <h2 className="text-[3.5rem] text-primary leading-[3rem] font-bold">
            Projetos em destaque.
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          <Carousel className="rounded-lg bg-background shadow-[inset_-12px_-8px_40px_#46464620]">
            <CarouselContent className="ml-4 cursor-grab active:cursor-grabbing">
              {projectsData.map((project) => (
                <CarouselItem key={project.id} className="basis-3/3 px-5">
                  <ProjectItem
                    project={{
                      id: project.id,
                      name: project.name,
                      intro: project.intro,
                      images: [project.images[0]],
                      techs: project.techs,
                      demoLink: project.demoLink,
                      gitLink: project.gitLink,
                    }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="flex justify-center">
            <Link href="/projects">
              <Button
                variant="secondary"
                className="flex gap-2 text-foreground object-fit"
              >
                <p>Acesse todos os projetos</p>
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 px-4 py-20">
        <div>
          <p className="text-md text-secondary font-bold opacity-80">
            Matheus Borges
          </p>
          <h2 className="text-[3.5rem] text-primary leading-[3rem] font-bold">
            Sobre mim.
          </h2>
        </div>

        <div className="flex gap-2">
          <div className="min-w-[10rem] h-[22rem]">
            <Image
              src="https://github.com/MatheusBorgesDev.png"
              width={0}
              height={0}
              className="h-full w-full rounded-xl object-cover shadow-brutal"
              sizes="100vw"
              alt="Foto de Matheus Borges"
            />
          </div>

          <div className="flex min-h-full rounded-xl bg-transparent text-justify backdrop-blur-lg gap-4 flex-wrap p-5 justify-between shadow-brutal items-center">
            <p className="text-secondary">
              &quot;Há mais ou menos um ano e meio, comecei a dar os primeiros
              passos no mundo da programação, e desde as primeiras linhas de
              código, fui descobrindo a minha verdadeira vocação.
              <br />
              <br />
              Hoje, sou apaixonado pela arte de programar e busco a primeira
              oportunidade para iniciar a minha carreira.&quot;
            </p>
          </div>
        </div>
      </div>

      <div id="about" className=" flex flex-col gap-8 px-4 pt-20 pb-10">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-md text-secondary font-bold opacity-80">
              Vamos trabalhar juntos?
            </p>
            <h2 className="text-[3.5rem] text-primary leading-[3rem] font-bold">
              Contato.
            </h2>
          </div>
        </div>

        <div className="flex flex-col rounded-xl bg-transparent backdrop-blur-lg gap-4 flex-wrap my-4 p-5 shadow-brutal ">
          <div className="flex flex-col gap-4">
            <p className="text-secondary">
              Envie um e-mail, mande uma mensagem pelo WhatsApp ou me chama nas
              redes sociais!
            </p>

            <Contacts />
          </div>

          <form action="" className="flex flex-col gap-2 text-secondary">
            <Input type="text" placeholder="Nome" />
            <Input type="email" placeholder="E-mail" />
            <Textarea placeholder="Escreva sua mensagem aqui" />

            <div className="w-full object-fit pt-2">
              <Button
                variant="secondary"
                className="flex gap-2 text-foreground object-fit"
              >
                <p>Envie sua mensagem</p>
                <ArrowRight />
              </Button>
            </div>
          </form>
        </div>
      </div>
      <ScrollUpButton />
    </div>
  );
}
