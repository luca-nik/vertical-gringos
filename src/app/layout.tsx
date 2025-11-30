import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vertical Gringos - Aesthetic Alpinism & Electronic Music",
  description: "Esperienze uniche che uniscono alpinismo e musica elettronica. Flow state in montagna, good vibes in natura. Eventi, brand e community di esploratori rispettosi.",
  keywords: "alpinism, electronic music, mountain events, aesthetic lifestyle, outdoor apparel, flow state, vertical gringos",
  openGraph: {
    title: "Vertical Gringos - Aesthetic Alpinism & Electronic Music",
    description: "Esperienze uniche che uniscono alpinismo e musica elettronica",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
