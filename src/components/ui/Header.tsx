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
import React, { useState, MouseEventHandler } from "react";
import ScrollLink from "./ScrollLink";
import { Separator } from "./separator";
import { usePathname } from "next/navigation";
import { useTranslation } from 'react-i18next';
import i18n from "../../utils/i18n";


interface HeaderProps {
  toggleDarkMode: MouseEventHandler<HTMLButtonElement>;
  darkMode: boolean;
}

const Header = ({ toggleDarkMode, darkMode }: HeaderProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setIsEnglish((prevState) => !prevState);
    const newLanguage = isEnglish ? 'br' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const isHomePage = usePathname() === "/";

  const { t } = useTranslation()

  return (
    <Card className="fixed top-0 left-0 z-20 py-2 px-3 bg-foreground border-[.1rem] border-background-foreground rounded-none w-full lg:px-10">
      <div className="flex items-center justify-between">
        <div className="lg:hidden w-[24px] h-[24px]">
          {isHomePage ? (
            <button onClick={toggleMenu} className="text-secondary">
              {!isMenuOpen ? <MenuIcon /> : <ChevronsUpIcon />}
            </button>
          ) : (
            <Link href="/" className="text-secondary">
              <HomeIcon />
            </Link>
          )}

          {isMenuOpen && (
            <div
              onClick={toggleMenu}
              className="w-full bg-background rounded-b-lg border absolute top-[4rem] left-0 shadow-lg"
            >
              <ScrollLink pageElement={"projects"}>
                <PresentationIcon /> {t("projects")}
              </ScrollLink>

              <Separator />

              <ScrollLink pageElement={"about-me"}>
                <CircleUserIcon /> {t("aboutMe")}
              </ScrollLink>

              <Separator />

              <ScrollLink pageElement={"contact"}>
                <MessageCircleHeart /> {t("contact")}
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
            <ScrollLink pageElement={"projects"}>{t("projects")}</ScrollLink>

            <ScrollLink pageElement={"about-me"}>{t("aboutMe")}</ScrollLink>

            <ScrollLink pageElement={"contact"}>{t("contact")}</ScrollLink>
          </div>

          <div className="flex items-center gap-4 text-secondary">
            <button onClick={toggleLanguage} className="w-6 text-lg">
              {isEnglish ? "En" : "Br"}
            </button>

            <span>|</span>

            <button onClick={toggleDarkMode}>
              {!darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Header;
