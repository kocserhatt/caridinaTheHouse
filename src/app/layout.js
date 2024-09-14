import { Inter } from "next/font/google";
import Head from 'next/head'; // Head bileşeni eklendi
import "./globals.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CaridinaTheHouse",
  description: "CaridinaTheHouse, akvaryum hobisi ile ilgili bilgilerin paylaşıldığı bir blog sitesidir.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main> {/* main etiketi eklendi */}
        <Footer />
      </body>
    </html>
  );
}
