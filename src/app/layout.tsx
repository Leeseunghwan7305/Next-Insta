import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Nav from "./common/Nav";
import AuthContext from "@/context/AuthContext";

const Open = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={Open.className}>
      <body className="w-full max-w-screen-xl overflow-auto mx-auto">
        <AuthContext>
          <header className="z-10">
            <Nav />
          </header>
          <main>{children}</main>
        </AuthContext>
      </body>
    </html>
  );
}
