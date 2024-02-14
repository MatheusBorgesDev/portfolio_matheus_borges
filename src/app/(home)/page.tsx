import ContactItem from "@/components/ui/ContactItem";
import Profile from "@/components/ui/Profile";
import ProjectItem from "@/components/ui/ProjectItem";
import TechnologiesField from "@/components/ui/TechnologiesField";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
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
            <CarouselContent className="-ml-4 cursor-grab active:cursor-grabbing">
              <CarouselItem className="basis-3/3 p-5">
                <ProjectItem
                  imageUrl="https://images.unsplash.com/photo-1609534655988-3f5225c13553?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  projectName="My Coffee Place"
                  projectDescription="Peça seu café de forma fácil."
                />
              </CarouselItem>

              <CarouselItem className="basis-3/3 p-5">
                <ProjectItem
                  imageUrl="https://plus.unsplash.com/premium_photo-1674605365723-15e6749630f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  projectName="Keep Moving!"
                  projectDescription="Sua vida sempre em movimento."
                />
              </CarouselItem>

              <CarouselItem className="basis-3/3 p-5">
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

          <Button className="object-fit">
            <div className="flex gap-2 items-center">
              <p>Acesse todos os projetos</p>
              <ArrowUpRight />
            </div>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-10 px-4 py-20 bg-gradient-to-b from-background to-foreground">
        <div>
          <p className="text-md text-secondary font-bold opacity-80">
            Matheus Borges
          </p>
          <h2 className="text-[3.5rem] text-primary leading-[3rem] font-bold">
            Sobre mim.
          </h2>
        </div>

        <Image
          src="https://github.com/MatheusBorgesDev.png"
          width={0}
          height={0}
          className="h-auto w-full rounded-xl"
          sizes="100vw"
          alt="Foto de Matheus Borges"
        />

        <p className="bg-primary-foreground rounded-xl p-2">
          {" "}
          &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          asperiores libero repellat modi quidem velit dolore odit! Nobis
          doloremque libero aperiam praesentium nam iure, amet error? Similique
          quisquam officiis aspernatur.&quot;{" "}
        </p>
      </div>

      <div className="flex flex-col gap-10 px-4 py-20 bg-gradient-to-b from-background to-foreground">
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

        <div></div>
      </div>
    </div>
  );
}
