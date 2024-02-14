import { ArrowUp } from "lucide-react";
import { Button } from "./button";

const ScrollUpButton = () => {
  const targetElement = document.getElementById("header");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="flex w-full text-foreground object-fit justify-end">
      <Button onClick={ScrollUpButton} className="flex text-foreground object-fit">
        <ArrowUp />
      </Button>
    </div>
  );
};

export default ScrollUpButton;
