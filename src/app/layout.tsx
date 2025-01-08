import type { Metadata } from "next";
import "./Styles/globals.css";
import { redHatDisplay } from "@/ui/fonts";
import Sidebar from '../app/components/Sidebar';
import { GhibliContextProvider } from "@/Context/Context";
import { ToastContainer } from "react-toastify";


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
          <div className="flex h-screen">

            <div className="w-full flex flex-col md:flex-row">


              <Sidebar />


              <div className="md:w-full  p-6 relative mb:pl-60">{children}</div>

            </div>

          </div>
          <ToastContainer />

        </body>
      </html >
    </GhibliContextProvider>
  );
}
