import React, { ReactNode } from "react";

import Link from "next/link";
import Image from "next/image";

import { Button } from "./button";

interface ContactItemProps {
  children: ReactNode;
  contactLink: string;
}

export function Contacts() {
  const ContactItem = ({ children, contactLink }: ContactItemProps) => {
    return (
      <Link href={`${contactLink}`} target="_blank">
        <Button
          variant="secondary"
          className="h-auto w-auto p-2 rounded-full bg-card-foreground hover:bg-black "
        >
          {children}
        </Button>
        ;
      </Link>
    );
  };

  return (
    <div className="flex items-center gap-4 text-transparent rounded-xl">
      <ContactItem contactLink="mailto:matheusborges.dev@gmail.com">
        <Image
          src="/gmail.svg"
          alt="Ícone do Gmail"
          width={0}
          height={0}
          className={`h-[1.5rem] w-full`}
        ></Image>
      </ContactItem>

      <ContactItem contactLink="https://wa.me/5549998213687">
        <Image
          src="/whatsapp.svg"
          alt="Ícone do WhatsApp"
          width={0}
          height={0}
          className="h-[1.5rem] w-full"
        ></Image>
      </ContactItem>

      <ContactItem contactLink="https://www.linkedin.com/in/matheus-borges-45baa9250/">
        <Image
          src="/linkedin.svg"
          alt="Ícone do LinkedIn"
          width={0}
          height={0}
          className="h-[1.5rem] w-full"
        ></Image>
      </ContactItem>

      <ContactItem contactLink="https://github.com/MatheusBorgesDev">
        <Image
          src="/github.svg"
          alt="Ícone do Github"
          width={0}
          height={0}
          className="h-[1.5rem] w-full"
        ></Image>
      </ContactItem>
    </div>
  );
}
