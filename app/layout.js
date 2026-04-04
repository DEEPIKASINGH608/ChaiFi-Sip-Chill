import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "ChaiFi - Sip & Chill",
  description: "ChaiFi is a decentralized application (dApp) built on the Ethereum blockchain that allows users to create and manage their own tea shops. With ChaiFi, users can brew and sell virtual tea, earn rewards, and interact with other tea enthusiasts in a fun and engaging way.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        <div className="min-h-[87vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px, #00091d_1px)] bg-[size:20px_20px]">
        {children}
        </div>
        <Footer/>
        </body>
    </html>
  );
}




