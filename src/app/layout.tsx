import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased w-full" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
