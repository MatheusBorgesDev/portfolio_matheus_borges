"use client";

import { Button } from "./button";
import { ReactNode, useEffect } from "react";

interface ScrollButtonProps {
  pageElement: string;
  children: ReactNode;
}

const ScrollButton = ({ pageElement, children }: ScrollButtonProps) => {
  useEffect(() => {
    const scrollToElement = () => {
      const targetElement = document.getElementById(pageElement);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    const button = document.getElementById("scrollUpButton");
    if (button) {
      button.addEventListener("click", scrollToElement);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", scrollToElement);
      }
    };
  }, [pageElement]);

  return (
    <div className="flex w-full bg-transparent pr-4 pb-10 text-foreground object-fit justify-end">
      <Button id="scrollUpButton" className="flex text-foreground object-fit">
        {children}
      </Button>
    </div>
  );
};

export default ScrollButton;
