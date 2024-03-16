"use client";

import {
  ChevronsUpIcon,
  CircleUserIcon,
  HomeIcon,
  MenuIcon,
  MessageCircleHeart,
  MoonIcon,
  PresentationIcon,
  SunIcon,
} from "lucide-react";
import { Card } from "./card";
import Logo from "./Logo";
import Link from "next/link";
import React, { useState } from "react";
import ScrollLink from "./ScrollLink";
import { Separator } from "./separator";

interface HeaderProps {
  isHomePage: boolean;
}

const Header = ({ isHomePage = true }: HeaderProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const [isEnglish, setIsEnglish] = useState(true);
  const [isdarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setIsEnglish((prevState) => !prevState);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <Card className="fixed top-0 left-0 z-20 py-2 px-3 bg-background border-[.1rem] border-background-foreground rounded-t-none w-full lg:px-10">
      <div className="flex items-center justify-between">
        <div className="lg:hidden w-[24px] h-[24px]">
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
        </div>

        <Link href="/">
          <Logo />
        </Link>

        <div className="flex items-center gap-20">
          <div className="hidden lg:flex">
            <ScrollLink pageElement={"projects"}>Projetos</ScrollLink>

            <ScrollLink pageElement={"about-me"}>Sobre mim</ScrollLink>

            <ScrollLink pageElement={"contact"}>Contato</ScrollLink>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleLanguage} className="w-6 text-lg">
              {isEnglish ? "En" : "Br"}
            </button>

            <span>|</span>

            <button onClick={toggleDarkMode}>
              {isdarkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Header;
