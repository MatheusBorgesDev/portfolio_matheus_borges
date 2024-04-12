"use client";

import Profile from "@/components/ui/Profile";
import ProjectItem from "@/components/ui/ProjectItem";
import ScrollButton from "@/components/ui/ScrollButton";
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
import { ArrowRight, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/utils/projectsData";
import Contacts from "@/components/ui/Contacts";
import { useTranslation } from "react-i18next";
import i18n from "../../utils/i18n";

export default function Home() {
  const { t } = useTranslation();
  const language = i18n.language;

  const featuredProjectsArray = projectsData.slice(0, 5);

  return (
    <main
      id="header"
      className="flex flex-col pt-20 md:px-[5%] lg:max-w-[70rem] animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-both transition-opacity duration-500"
    >
      <div
        id="profile"
        className="flex flex-col gap-10 px-4 pb-20 justify-center md:flex-row-reverse md:justify-between"
      >
        <Profile />

        <div className="flex flex-col gap-4 lg:justify-center">
          <h1 className="text-lg text-secondary font-bold opacity-90">
            {t("greeting")}
          </h1>
          <h2 className="text-[3rem] lg:text-[3.5rem] text-primary leading-[3rem] font-bold pb-4 max-w-[20rem]">
            {t("developer")}.
          </h2>
          <div className="flex justify-center">
            <TechnologiesField id="#technologies" />
          </div>
        </div>
      </div>

      <div id="projects" className="flex flex-col gap-10 px-4 py-20">
        <div>
          <p className="text-lg text-secondary font-bold opacity-90">
            {"<"}HelloWorld{"/>"}
          </p>
          <h2 className="text-[3rem] lg:text-[3.5rem] text-primary leading-[3rem] font-bold">
            {t("featuredProjects")}.
          </h2>
        </div>

        <div className="flex flex-col gap-8 relative">
          <Carousel className="rounded-lg bg-background">
            <CarouselContent className="ml-4 cursor-grab active:cursor-grabbing">
              {featuredProjectsArray.map((project) => (
                <CarouselItem key={project.id} className="basis-3/3 px-5">
                  <ProjectItem
                    project={{
                      id: project.id,
                      name: project.name,
                      intro:
                        language == "en" ? project.introEn : project.introBr,
                      description:
                        language == "en"
                          ? project.descriptionEn
                          : project.descriptionBr,
                      image: project.image,
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
                <p>{t("seeAllProjects")}</p>
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div id="about-me" className="flex flex-col gap-10 px-4 py-20">
        <div>
          <p className="text-lg text-secondary font-bold opacity-90">
            Matheus Borges
          </p>
          <h2 className="text-[3rem] lg:text-[3.5rem] text-primary leading-[3rem] font-bold">
            {t("aboutMe")}.
          </h2>
        </div>

        <div className="flex gap-2">
          <div className="min-w-[10rem] w-[20rem] max-h-full min-h-[20rem] rounded-xl">
            <Image
              src="https://github.com/MatheusBorgesDev.png"
              width={0}
              height={0}
              className="h-full w-full rounded-xl object-cover shadow-greenNeon"
              sizes="100vw"
              alt="Foto de Matheus Borges"
            />
          </div>

          <div className="flex min-h-full max-h-full rounded-xl bg-foreground text-justify backdrop-blur-lg gap-4 flex-wrap p-5 justify-between shadow-greenNeon items-center">
            <p className="text-secondary">
              &quot;{t("aboutMeFirstDescription")}
              <br />
              <br />
              {t("aboutMeSecondDescription")}&quot;
            </p>
          </div>
        </div>
      </div>

      <div id="contact" className=" flex flex-col gap-8 px-4 py-20">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-lg text-secondary font-bold opacity-90">
              {t("workTogether")}
            </p>
            <h2 className="text-[3rem] lg:text-[3.5rem] text-primary leading-[3rem] font-bold">
              {t("contact")}.
            </h2>
          </div>
        </div>

        <div className="flex flex-col w-full rounded-xl bg-foreground gap-4 flex-wrap my-4 p-5 shadow-greenNeon">
          <div className="flex flex-col gap-4">
            <p className="text-secondary text-center">{t("sendMessage")}</p>

            <div className="flex justify-center">
              <Contacts />
            </div>
          </div>

          {/* <form action="" className="flex flex-col gap-2 text-secondary">
            <Input type="text" placeholder={`${t("name")}`} />
            <Input type="email" placeholder={`${t("email")}`} />
            <Textarea placeholder={`${t("writeYourMessage")}`} />

            <div className="w-full object-fit pt-2">
              <Button
                variant="secondary"
                className="flex gap-2 text-foreground object-fit"
              >
                <p>{t("sendYourMessage")}</p>
                <ArrowRight />
              </Button>
            </div>
          </form> */}
        </div>
      </div>
      <ScrollButton pageElement="header">
        <ArrowUp />
      </ScrollButton>
    </main>
  );
}
