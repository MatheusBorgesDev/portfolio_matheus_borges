"use client";

import {
  ChevronsUpIcon,
  CircleUserIcon,
  HomeIcon,
  MenuIcon,
  MessageCircleHeart,
  PresentationIcon,
  SunIcon,
} from "lucide-react";
import { Card } from "./card";
import { Toggle } from "./toggle";
import Logo from "./Logo";
import Link from "next/link";
import React, { useState } from "react";
import ScrollLink from "./ScrollLink";
import { Separator } from "./separator";
import { Button } from "./button";

interface HeaderProps {
  isHomePage: boolean;
}

const Header = ({ isHomePage = true }: HeaderProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Card className="fixed top-0 left-0 z-20 p-3 bg-background border-[.1rem] border-background-foreground rounded-t-none w-full">
      <div className="flex items-center justify-between">
        {isHomePage ? (
          <button onClick={toggleMenu}>
            {!isMenuOpen ? <MenuIcon /> : <ChevronsUpIcon />}
          </button>
        ) : (
          <Link href="/">
            <HomeIcon />
          </Link>
        )}

        {isMenuOpen && (
          <div
            onClick={toggleMenu}
            className="w-full bg-background rounded-b-lg border border-gray-300 absolute top-[4.5rem] left-0 shadow-lg"
          >
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

        <Toggle variant="default" className="p-0">
          <SunIcon />
        </Toggle>
      </div>
    </Card>
  );
};

export default Header;
