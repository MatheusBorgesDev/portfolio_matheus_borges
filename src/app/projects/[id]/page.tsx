"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon, GithubIcon, GlobeIcon } from "lucide-react";
import Image from "next/image";
import BackButton from "./components/BackButton";

const ProjectDetails = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const projectImg =
    "https://images.unsplash.com/photo-1609534655988-3f5225c13553?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const projectDate = "Dez - 2023";

  const imgTechUrl =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";

  const projectName = "My Coffe Place";

  return (
    <div className="flex flex-col px-4 gap-4 text-secondary py-20">
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Image
            src={projectImg}
            width={0}
            height={0}
            className="h-[20rem] w-full object-cover rounded-lg"
            sizes="100%"
            alt="Foto fo projeto"
          />

          <div className="absolute z-10 top-4 left-4">
            <BackButton variant="default" />
          </div>
        </div>
      </div>

      <div className="flex rounded-xl bg-transparent border-primary backdrop-blur-sm gap-4 flex-wrap p-5 justify-between shadow-brutal">
        <div className="flex w-full justify-between items-center">
          {projectDate}

          <div className="flex gap-2">
            <Image
              src={imgTechUrl}
              width={0}
              height={0}
              className="h-auto w-[2.5rem] rounded-xl"
              sizes="100vw"
              alt="Ícone de tecnologia"
            />

            <Image
              src={imgTechUrl}
              width={0}
              height={0}
              className="h-auto w-[2.5rem] rounded-xl"
              sizes="100vw"
              alt="Ícone de tecnologia"
            />

            <Image
              src={imgTechUrl}
              width={0}
              height={0}
              className="h-auto w-[2.5rem] rounded-xl"
              sizes="100vw"
              alt="Ícone de tecnologia"
            />

            <Image
              src={imgTechUrl}
              width={0}
              height={0}
              className="h-auto w-[2.5rem] rounded-xl"
              sizes="100vw"
              alt="Ícone de tecnologia"
            />
          </div>
        </div>

        <h1 className="text-4xl text-primary leading-[3rem] font-bold">
          {projectName}
        </h1>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
          repellendus similique mollitia expedita, enim praesentium aliquam
          adipisci deleniti aperiam earum perspiciatis doloribus quas odit
          nostrum aut, nobis cupiditate totam ipsa.
        </p>

        <div className="flex flex-col justify-between items-center gap-4 w-full">
          <Button
            variant="secondary"
            className="flex justify-between w-full h-12"
          >
            <GlobeIcon /> Demo <ArrowUpRightIcon />{" "}
          </Button>

          <Button
            variant="secondary"
            className="flex justify-between w-full h-12"
          >
            <GithubIcon /> Código <ArrowUpRightIcon />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;