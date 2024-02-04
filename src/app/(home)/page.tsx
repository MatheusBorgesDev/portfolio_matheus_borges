import Header from "@/components/ui/Header";
import { Button } from "@/components/ui/button";
import { ArrowBigRightDashIcon, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col mx-4">
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
          <h1 className="text-md uppercase opacity-65">Olá, Matheus Borges aqui!</h1>
          <h2 className="text-[3.5rem] leading-[3rem] font-bold">Desenvolvedor front-end.</h2>
        </div>

        <div>
          <Button className="object-fit">
            <div className="flex gap-2">
              <p>Veja meus projetos</p>
              <ArrowUpRight />
            </div>
          </Button>
        </div>
      </div>

      <div>
        <p>Tecnologias</p>
      </div>
    </div>
  );
}
