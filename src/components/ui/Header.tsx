"use client";

import {
  CircleUserIcon,
  HomeIcon,
  MenuIcon,
  MessageCircleHeart,
  PresentationIcon,
  SunIcon,
  XIcon,
} from "lucide-react";
import { Card } from "./card";
import { Toggle } from "./toggle";
import Logo from "./Logo";
import Link from "next/link";
import React, { useState } from "react";
import ScrollLink from "./ScrollLink";
import { Separator } from "./separator";
import { Button } from "./button";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Card className="fixed top-0 left-0 z-20 p-3 bg-background border-[.1rem] border-background-foreground rounded-t-none w-full">
      <div className="flex items-center justify-between">
        <button onClick={toggleMenu}>
          {!isMenuOpen ? <MenuIcon /> : <XIcon />}
        </button>

        {isMenuOpen && (
          <div
            onClick={toggleMenu}
            className="w-full bg-background rounded-b-lg border border-gray-300 absolute top-[4.5rem] left-0 shadow-lg"
          >
            <Link href="/" onClick={toggleMenu}>
              <Button
                variant="link"
                className="flex w-full text-lg gap-4 items-center justify-start my-2"
              >
                <HomeIcon /> Home
              </Button>
            </Link>

            <Separator />

            <ScrollLink pageElement={"projects"}>
              <PresentationIcon /> Projetos
            </ScrollLink>

            <Separator />

            <ScrollLink pageElement={"about-me"}>
              <CircleUserIcon /> Sobre mim
            </ScrollLink>

            <Separator />

            <ScrollLink pageElement={"contact"}>
              <MessageCircleHeart /> Contato
            </ScrollLink>

            <Separator />
          </div>
        )}

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
