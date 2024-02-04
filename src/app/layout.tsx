import type { Metadata } from "next";
import { Poppins, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const robotoSlab = Roboto_Slab(
  {
    weight: ['300', '500', '700'],
    subsets: ['latin']
  })

const poppins = Poppins(
  {
    weight: ['300', '500', '700'],
    subsets: ['latin']
  })

export const metadata: Metadata = {
  title: "Matheus Borges - Dev front-end",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoSlab.className}>
        <div className="flex h-full flex-col">
          <Header />
          <div className="flex-1 bg-background">{children}</div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
