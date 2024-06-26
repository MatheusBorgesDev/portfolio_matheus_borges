import { ReactNode } from "react";

import { Button } from "./button";

interface ScrollLinkProps {
  pageElement: string;
  children: ReactNode;
}

export function ScrollLink({ pageElement, children }: ScrollLinkProps) {
  const scrollToElement = () => {
    const targetElement = document.getElementById(pageElement);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      id="scrollButton"
      variant="link"
      className="flex w-full text-lg gap-4 items-center justify-start"
      onClick={scrollToElement}
    >
      {children}
    </Button>
  );
}
