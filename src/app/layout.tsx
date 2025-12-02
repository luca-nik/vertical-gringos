import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vertical Gringos",
  description: "Eventi outdoor",
  keywords: "alpinism, electronic music, mountain events, aesthetic lifestyle, outdoor apparel, flow state, vertical gringos",
  openGraph: {
    title: "Vertical Gringos",
    description: "Eventi outdoor",
    type: "website",
    url: "https://www.verticalgringos.com",
    siteName: "Vertical Gringos",
    images: [
      {
        url: "/images/vertical-logo-small.png",
        width: 1200,
        height: 630,
        alt: "Vertical Gringos - Chasing Highs, Shared Vibes",
      },
    ],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vertical Gringos",
    description: "Alpinism, Events, Music & Community",
    images: ["/images/vertical-logo-small.png"],
  },
  metadataBase: new URL("https://www.verticalgringos.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased w-full" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
