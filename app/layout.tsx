import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

import localFont from '@next/font/local'


const nothing = localFont({
  src: [
    {
      path: './nothing.ttf',
      weight: '800'
    },
  ],
  variable: '--font-nothing'
})
 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhyudaya",
  description: "Abhyudaya Deep Verma",
  icons: {
    icon: '/logo.jpg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nothing.variable} font-sans`}>
      
      <body className={inter.className}><div vaul-drawer-wrapper="" className="bg-white min-h-[100vh]">
          {children}
        </div></body>
    </html>
  );
}
