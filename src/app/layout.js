import Head from 'next/head';
import { Navbar } from "@/web/sections";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/web/sections";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zerotier"
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
export default RootLayout;