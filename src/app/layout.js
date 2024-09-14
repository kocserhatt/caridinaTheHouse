import { Inter } from "next/font/google";
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
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
