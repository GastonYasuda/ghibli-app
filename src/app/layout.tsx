import type { Metadata } from "next";
import "./globals.css";
import { redHatDisplay } from "@/ui/fonts";


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
    <html lang="en">
      <body
        className={`${redHatDisplay.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
