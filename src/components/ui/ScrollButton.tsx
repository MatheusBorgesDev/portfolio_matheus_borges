"use client";

import { Button } from "./button";
import { ReactNode } from "react";

interface ScrollButtonProps {
  pageElement: string;
  children: ReactNode;
}

const ScrollButton = ({ pageElement, children }: ScrollButtonProps) => {
  const scrollToElement = () => {
    const targetElement = document.getElementById(pageElement);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      id="scrollButton"
      className="flex w-full text-foreground gap-4 items-center justify-start"
      onClick={scrollToElement}
    >
      {children}
    </Button>
  );
};

export default ScrollButton;
