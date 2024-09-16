import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  AuthProvider  from "./Provider";
import SideMenu from "./layout/SideMenu";
import UpperNav from "./layout/UpperNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Azure Hotel System Management",
  description: "for managing the app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
      </head>
      <body className={`${inter.className} flex overflow-x-hidden`}>
        <AuthProvider>
          <SideMenu/>
          <div className="translate-x-[2.4%] w-full h-screen flex flex-col relative">
          <UpperNav/>
          <div className="md:!w-[98%] mt-[9vh] overflow-y-auto md:px-8 overflow-x-hidden mr-10 h-screen">
          {children}
          </div>
          </div>
        </AuthProvider>
        </body>
    </html>
  );
}
