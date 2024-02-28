import Image from "next/image";
import Contacts from "./Contacts";

const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center relative mb-12">
      <div>
        <div className="w-[15rem]">
          <Image
            src="/profile_image.jpg"
            width={0}
            height={0}
            className="h-auto w-full rounded-full shadow-brutal"
            sizes="100%"
            alt="Foto de Matheus Borges"
          />
        </div>
      </div>

      <div className="backdrop-blur-sm bg-transparent rounded-xl absolute bottom-[-2.5rem] shadow-brutal p-2">
        <Contacts/>
      </div>
    </div>
  );
};

export default Profile;
