import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space-grotesk",
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL("https://laven-ventures.vercel.app"),
  title: {
    default: "LAVIEN VENTURES | We Build What Moves Business Forward",
    template: "%s | LAVIEN VENTURES"
  },
  description: "We turn ideas into functioning businesses through technology, automation, branding, marketing, and strategic consulting.",
  keywords: ["venture studio", "web development", "AI automation", "digital marketing", "branding", "business consulting"],
  authors: [{ name: "LAVIEN VENTURES" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "LAVIEN VENTURES",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`antialiased font-sans bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
