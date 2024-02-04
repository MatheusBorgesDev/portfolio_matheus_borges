import { BrainCogIcon, CircleUserIcon, MenuIcon, MessageCircleHeart, PresentationIcon, SunIcon } from "lucide-react";
import { Card } from "./card";
import { Toggle } from "./toggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import Logo from "./Logo";
import { Separator } from "./separator";
import Link from "next/link";

const Header = () => {
  return (
    <Card className="p-3 m-0 border-2 border-background-foreground rounded-t-none w-full">
      <div className="flex items-center justify-between">
        <Sheet>
          <SheetTrigger>
            {" "}
            <MenuIcon />{" "}
          </SheetTrigger>
          <SheetContent className="w-full" side="left">
            <SheetTitle className="text-center mt-8">
              <Logo />
            </SheetTitle>

            <div className="flex flex-col text-[30px] mt-12 gap-10">
              <SheetClose>
                <div className="flex items-center gap-2">
                  <BrainCogIcon size={35} />
                  <p>Habilidades</p>
                </div>
                <Separator />
              </SheetClose>

              <SheetClose>
                <div className="flex items-center gap-2">
                  <PresentationIcon size={35} />
                  <p>Projetos</p>
                </div>
                <Separator />
              </SheetClose>

              <SheetClose>
                <div className="flex items-center gap-2">
                  <CircleUserIcon size={35} />
                  <p>Sobre mim</p>
                </div>
                <Separator />
              </SheetClose>

              <SheetClose>
                <div className="flex items-center gap-2">
                  <MessageCircleHeart size={35} />
                  <p>Entre em contato</p>
                </div>
                <Separator />
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/">
          <Logo />
        </Link>

        <Toggle variant="outline">
          {" "}
          <SunIcon />{" "}
        </Toggle>
      </div>
    </Card>
  );
};

export default Header;
