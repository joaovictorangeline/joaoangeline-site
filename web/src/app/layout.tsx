import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joao Angeline | WordPress Developer & Customer Success",
  description: "Bringing solutions and building relationships.",
   openGraph: {
    title: "Joao Angeline | WordPress Developer & Customer Success",
    description:
      "See more about Joao Angeline, a WordPress Developer who builds custom plugins, themes and Gutenberg blocks with PHP, JavaScript and React.",
    url: "/",
    siteName: "Joao Angeline",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Joao Angeline — WordPress Developer & Customer Success" }],
  },
  twitter: {
    card: "summary",
    title: "Joao Angeline | WordPress Developer & Customer Success",
    description:
      "See more about Joao Angeline, a WordPress Developer who builds custom plugins, themes and Gutenberg blocks with PHP, JavaScript and React.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}