"use client"

import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { MouseEvent, useState } from "react";

const robotoSlab = Roboto_Slab({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [darkMode, setDarkMode] = useState(Boolean);

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <html lang="en">
      <body className={robotoSlab.className}>
        <div className={`flex flex-col overflow-x-clip bg-background bg-cover pt-16 lg:items-center ${darkMode ? "dark" : ""}`}>
          <Header isHomePage={false} toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
