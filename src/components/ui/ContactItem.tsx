import React, { ReactNode } from "react";
import { Button } from "./button";

interface ContactItemProps {
  children: ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ children }) => {
  return <Button variant="secondary" className="h-auto w-auto p-2 rounded-full">{children}</Button>;
};

export default ContactItem;
