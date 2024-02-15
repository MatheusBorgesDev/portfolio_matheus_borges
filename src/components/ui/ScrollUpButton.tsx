"use client"

import { ArrowUp } from "lucide-react";
import { Button, ButtonProps } from "./button";
import { useEffect } from "react";

const ScrollUpButton = () => {
  useEffect(() => {
    const scrollToHeader = () => {
      const targetElement = document.getElementById("header");
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    const button = document.getElementById("scrollUpButton");
    if (button) {
      button.addEventListener("click", scrollToHeader);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", scrollToHeader);
      }
    };
  }, []);

  return (
    <div className="flex w-full bg-foreground pb-4 pr-4 text-foreground object-fit justify-end">
      <Button id="scrollUpButton" className="flex text-foreground object-fit">
        <ArrowUp />
      </Button>
    </div>
  );
};

export default ScrollUpButton;
