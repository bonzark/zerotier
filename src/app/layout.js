import Head from 'next/head';
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from '@/web/components';
import { Navbar } from '@/web/components/Navbar';

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
      <body className={`${inter.className} text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
export default RootLayout;