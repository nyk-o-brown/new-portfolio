import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const title = "Brown Nyakako — Full Stack Developer";
const description =
  "Full Stack Web & Mobile Developer based in Nairobi, Kenya. Building things that actually work.";
const siteUrl = "https://brownodoyo.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Brown Nyakako",
    images: [{ url: "/headshot.jpg", width: 800, height: 800, alt: title }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/headshot.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#0a0a0a] text-neutral-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
