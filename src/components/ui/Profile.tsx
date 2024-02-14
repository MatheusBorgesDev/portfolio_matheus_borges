import Link from "next/link";
import Image from "next/image";
import ContactItem from "./ContactItem";

const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center relative mb-6">
      <div>
        <div className="w-[15rem] p-[.15rem] rounded-full border-blue bg-gradient-to-b from-foreground to-primary shadow-md">
          <Link href="/about">
            <Image
              src="https://github.com/MatheusBorgesDev.png"
              width={0}
              height={0}
              className="h-auto w-full rounded-full"
              sizes="100vw"
              alt="Foto de Matheus Borges"
            />
          </Link>
        </div>
      </div>

      <div className="flex gap-4 border-2 p-2 backdrop-blur-sm rounded-xl absolute bottom-[-1.45rem] border-primary bg-gradient-to-r from-background to-primary/90 shadow-md">
        <ContactItem>
          <Image
            src="/gmail.svg"
            alt="Ícone do WhatsApp"
            width={20}
            height={20}
          ></Image>
        </ContactItem>

        <ContactItem>
          <Image
            src="/whatsapp.svg"
            alt="Ícone do WhatsApp"
            width={20}
            height={20}
          ></Image>
        </ContactItem>

        <ContactItem>
          <Image
            src="/linkedin.svg"
            alt="Ícone do WhatsApp"
            width={20}
            height={20}
          ></Image>
        </ContactItem>

        <ContactItem>
          <Image
            src="/github.svg"
            alt="Ícone do WhatsApp"
            width={20}
            height={20}
          ></Image>
        </ContactItem>
      </div>
    </div>
  );
};

export default Profile;
