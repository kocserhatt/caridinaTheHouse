import { Inter } from "next/font/google";
import Head from 'next/head';
import Script from 'next/script';
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
        {/* Google AdSense Meta Tag */}
        <meta name="google-adsense-account" content="ca-pub-4900925252983916" />
      </Head>
      {/* Google AdSense Script */}
      <Script
        strategy="afterInteractive"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4900925252983916"
        crossOrigin="anonymous"
      />
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
