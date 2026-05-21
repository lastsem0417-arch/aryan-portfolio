import type { Metadata } from "next";
import "./globals.css";

import { Inter, Space_Grotesk } from "next/font/google";

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ThemeProvider from "@/components/ThemeProvider";
import Loader from "@/components/Loader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Aryan Singh | Portfolio",
  description: "Creative Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body
  className={`${inter.variable} ${spaceGrotesk.variable} antialiased transition-colors duration-700`}
>

       <ThemeProvider>

  <SmoothScroll />
  <CustomCursor />
  <Loader />

  {children}

</ThemeProvider>
      </body>
    </html>
  );
}