import type { Metadata } from "next";
import "./Styles/globals.css";
import { redHatDisplay } from "@/ui/fonts";
import Sidebar from '../app/components/Sidebar';
import { GhibliContextProvider } from "@/Context/Context";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Ghibli Movie App",
  description: "Ghibli Movies with NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GhibliContextProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/Favicon.ico" />
        </head>
        <body className={`${redHatDisplay.className} antialiased`}>
          <div className="flex h-full pb-2 bg-red-50 flex-1">

            <div className="w-full flex flex-col md:flex-row">


              <Sidebar />


              <div className="md:w-full relative md:pl-52 mx-1.5">{children}</div>

            </div>

          </div>
          <Footer />
          <ToastContainer />

        </body>
      </html >
    </GhibliContextProvider>
  );
}
