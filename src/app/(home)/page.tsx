"use client";

import ContactItem from "@/components/ui/ContactItem";
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
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div id="header" className="flex flex-col pt-16">
      <div className="flex flex-col gap-10 px-4 py-20 bg-gradient-to-b from-background to-foreground">
        <Profile />

        <div>
          <h1 className="text-md text-secondary font-bold opacity-80">
            Olá, Matheus Borges aqui! &#128075;
          </h1>
          <h2 className="text-[3.5rem] text-primary leading-[3rem] font-bold">
            Desenvolvedor front-end.
          </h2>
        </div>
        <TechnologiesField />
      </div>

      <Separator />

      <div className="flex flex-col gap-10 px-4 py-20 bg-gradient-to-b from-background to-foreground">
        <div>
          <p className="text-md text-secondary font-bold opacity-80">
            {"<"}HelloWorld{"/>"}
          </p>
          <h2 className="text-[3.5rem] text-primary leading-[3rem] font-bold">
            Projetos em destaque.
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          <Carousel className="rounded-lg">
            <CarouselContent className="ml-4 cursor-grab active:cursor-grabbing">
              <CarouselItem className="basis-3/3 px-5">
                <ProjectItem
                  imageUrl="https://images.unsplash.com/photo-1609534655988-3f5225c13553?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  projectName="My Coffee Place"
                  projectDescription="Peça seu café de forma fácil."
                />
              </CarouselItem>

              <CarouselItem className="basis-3/3 px-5">
                <ProjectItem
                  imageUrl="https://plus.unsplash.com/premium_photo-1674605365723-15e6749630f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  projectName="Keep Moving!"
                  projectDescription="Sua vida sempre em movimento."
                />
              </CarouselItem>

              <CarouselItem className="basis-3/3 px-5">
                <ProjectItem
                  imageUrl="https://images.unsplash.com/photo-1620287920810-3f5b9746380c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  projectName="Take note"
                  projectDescription="Anote o que quiser, quando quiser!"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="flex gap-2 justify-center">
            <Button
              variant="secondary"
              className="flex gap-2 text-foreground object-fit"
            >
              <p>Acesse todos os projetos</p>
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col gap-10 px-4 py-20 bg-gradient-to-b from-background to-foreground">
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

          <div className="flex min-h-full rounded-xl bg-transparent backdrop-blur-sm gap-4 flex-wrap p-5 justify-between shadow-brutal items-center">
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

      <Separator />

      <div
        id="about"
        className="flex flex-col gap-10 px-4 py-20 bg-gradient-to-b from-background to-foreground"
      >
        <div>
          <p className="text-md text-secondary font-bold opacity-80">
            Vamos trabalhar juntos?
          </p>
          <h2 className="text-[3.5rem] text-primary leading-[3rem] font-bold">
            Contato.
          </h2>
        </div>

        <div>
          <div className="flex flex-col gap-4 items-center justify-center bg-secondary p-4 rounded-xl">
            <p>
              Envie um e-mail, mande uma mensagem pelo WhatsApp ou me chama nas
              redes sociais:
            </p>

            <div className="flex items-center gap-4">
              <ContactItem>
                <Image
                  src="/gmail.svg"
                  alt="Ícone do WhatsApp"
                  width={50}
                  height={50}
                ></Image>
              </ContactItem>

              <ContactItem>
                <Image
                  src="/whatsapp.svg"
                  alt="Ícone do WhatsApp"
                  width={50}
                  height={50}
                ></Image>
              </ContactItem>

              <ContactItem>
                <Image
                  src="/linkedin.svg"
                  alt="Ícone do WhatsApp"
                  width={50}
                  height={50}
                ></Image>
              </ContactItem>

              <ContactItem>
                <Image
                  src="/github.svg"
                  alt="Ícone do WhatsApp"
                  width={50}
                  height={50}
                ></Image>
              </ContactItem>
            </div>
          </div>
        </div>

        <ScrollUpButton />
      </div>
    </div>
  );
}
