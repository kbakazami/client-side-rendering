import "./globals.scss";
import Navbar from "@/app/_components/Navbar/Navbar";
import Footer from "@/app/_components/Footer/Footer";
import Breadcrumb from "@/app/_components/Breadcrumb/Breadcrumb";
import {Suspense} from "react";
import Loading from "@/app/loading";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
    <body className="min-h-screen">
    <Navbar/>
    <Breadcrumb/>
    <Suspense fallback={<Loading/>}>
        {children}
    </Suspense>
    <Footer/>
    </body>
    </html>
  );
}
