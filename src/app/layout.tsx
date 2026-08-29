import type { Metadata } from "next";
import { Roboto, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emily-vo-portfolio.vercel.app"),
  title: site.title,
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Emily Vo Portfolio",
    title: "Emily Vo - Portfolio",
    description:
      "A multidisciplinary portfolio combining business insight, creative thinking, and technical expertise.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emily Vo - Portfolio",
    description:
      "A multidisciplinary portfolio combining business insight, creative thinking, and technical expertise.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${jakarta.variable} h-full bg-white`}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className="flex min-h-full flex-col bg-white font-sans text-foreground antialiased"
      >
        {children}
      </body>
    </html>
  );
}
