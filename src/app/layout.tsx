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
    <html lang="en" className="" data-palette="a">
      <body className={`antialiased font-sans bg-bg text-ink`}>
        {children}
        
        {/* Palette Switcher (DEV/PREVIEW ONLY) - Client Component */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (process.env.NODE_ENV === 'development') {
                const switcher = document.createElement('div');
                switcher.className = 'palette-switcher';
                switcher.innerHTML = \`
                  <button onclick="document.documentElement.setAttribute('data-palette', 'a')">A. Bright Studio</button>
                  <button onclick="document.documentElement.setAttribute('data-palette', 'b')">B. Fresh Growth</button>
                  <button onclick="document.documentElement.setAttribute('data-palette', 'c')">C. Warm Sunrise</button>
                \`;
                document.body.appendChild(switcher);
              }
            `
          }}
        />
      </body>
    </html>
  );
}
