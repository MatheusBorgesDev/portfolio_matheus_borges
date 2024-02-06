import React, { ReactNode } from "react";
import { Button } from "./button";

interface ContactItemProps {
  children: ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ children }) => {
  return (
    <Button className="h-20 w-20">
      {children}
    </Button>
  );
};

export default ContactItem;
