import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-headline",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colosson 3D | Industrial Excellence Defined",
  description: "Transformamos la identidad corporativa en objetos físicos de alta precisión. Ingeniería industrial de lujo para marcas que no aceptan lo común.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`dark ${spaceGrotesk.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="bg-background text-on-background font-body min-h-full flex flex-col selection:bg-primary selection:text-on-primary">
        {children}
      </body>
    </html>
  );
}
