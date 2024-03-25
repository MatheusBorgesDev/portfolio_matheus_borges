"use client";

import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { useState } from "react";
import { I18nextProvider } from 'react-i18next';
import i18n from '../utils/i18n'

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
      <I18nextProvider i18n={i18n}>
        <div
          className={`flex flex-col overflow-x-clip bg-background bg-cover pt-16 lg:items-center ${
            darkMode ? "dark" : ""
          }`}
        >
          <Header
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
          />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </I18nextProvider>
      </body>
    </html>
  );
}
