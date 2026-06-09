import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GTMScript, GTMNoScript } from "@/components/shared/GTMScript";
import { GoogleAdsScript } from "@/components/shared/GoogleAdsScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "G1 Fitness | West Anaheim Gym",
    template: "%s | G1 Fitness",
  },
  description:
    "Safe movement. Relentless community. Join G1 Fitness in West Anaheim for group classes and semi-private training. First week free.",
  keywords: [
    "gym anaheim",
    "fitness classes anaheim",
    "personal trainer anaheim",
    "group fitness",
    "hiit classes",
    "semi-private training",
    "west anaheim gym",
  ],
  authors: [{ name: "G1 Fitness" }],
  creator: "G1 Fitness",
  publisher: "G1 Fitness",
  metadataBase: new URL("https://g1fitnessoc.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://g1fitnessoc.com",
    siteName: "G1 Fitness",
    title: "G1 Fitness | West Anaheim Gym",
    description:
      "Safe movement. Relentless community. Join G1 Fitness in West Anaheim for group classes and semi-private training.",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "G1 Fitness Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "G1 Fitness | West Anaheim Gym",
    description:
      "Safe movement. Relentless community. Join G1 Fitness for group classes and semi-private training.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <GoogleAdsScript />
      </head>
      <body className="min-h-full flex flex-col">
        <GTMScript />
        <GTMNoScript />
        {children}
      </body>
    </html>
  );
}
