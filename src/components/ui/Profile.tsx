import Link from "next/link";
import Image from "next/image";
import ContactItem from "./ContactItem";

const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center relative mb-6">
      <div>
        <div className="w-[15rem]">
          <Image
            src="https://github.com/MatheusBorgesDev.png"
            width={0}
            height={0}
            className="h-auto w-full rounded-full shadow-brutal"
            sizes="100vw"
            alt="Foto de Matheus Borges"
          />
        </div>
      </div>

      <div className="backdrop-blur-sm bg-transparent rounded-xl absolute bottom-[-1.45rem] shadow-brutal">
        <div className="flex gap-4 p-2">
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
    </div>
  );
};

export default Profile;
