import Image from "next/image";

import { Contacts } from "./contacts";

export const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center relative mb-12">
      <div>
        <div className="w-[15rem] md:w-[19rem] lg:w-[24rem]">
          <Image
            src="/profile_image.jpg"
            width={0}
            height={0}
            className="h-auto w-full rounded-full border-2 border-primary"
            sizes="100%"
            alt="Foto de Matheus Borges"
          />
        </div>
      </div>

      <div className="p-2 bg-foreground shadow-greenNeon rounded-xl absolute bottom-[-2.5rem] ">
        <Contacts />
      </div>
    </div>
  );
};
