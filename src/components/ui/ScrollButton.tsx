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
    <div className="flex w-full items-center justify-end p-4 lg:hidden">
      <Button
        id="scrollButton"
        className="flex text-foreground"
        onClick={scrollToElement}
      >
        {children}
      </Button>
    </div>
  );
};

export default ScrollButton;
