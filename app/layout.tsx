import type { Metadata, Viewport } from "next";
import "./globals.scss";
import ClientShell from "./components/ClientShell";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#152d61",
};

export const metadata: Metadata = {
  title: {
    default: "Rence Material — Bootstrap 5 Material Design 3 Framework",
    template: "%s | Rence Material",
  },
  description:
    "Rence Material is a high-performance CSS & JS UI framework that brings Google Material Design 3 to Bootstrap 5. Drop in one file — every component transforms instantly.",
  keywords: [
    "Rence Material",
    "Material Design Bootstrap",
    "Bootstrap 5 Material Design",
    "Google Material Design framework",
    "Material UI CSS",
    "Bootstrap Material skin",
    "M3 Bootstrap",
    "Material Design 3 CSS",
    "CSS UI framework",
    "Rence",
    "David Abalaku",
    "Material Design component library",
    "Bootstrap Material Design 5",
    "frontend framework",
    "open source CSS framework",
  ],
  authors: [{ name: "David Abalaku", url: "https://github.com/davidabalaku" }],
  creator: "David Abalaku",
  metadataBase: new URL("https://davidabalaku.github.io/material"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rence Material — Bootstrap 5 × Material Design 3",
    description:
      "Convert your Bootstrap 5 project to Google Material Design 3 with a single CSS file. Open-source, zero dependencies, production-ready.",
    url: "https://davidabalaku.github.io/material",
    siteName: "Rence Material",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rence Material — Bootstrap 5 × Material Design 3",
    description:
      "Drop in one CSS + JS file. Bootstrap 5 becomes Google Material Design 3 instantly.",
    creator: "@davidabalaku",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body className="min-h-full m-0 p-0" suppressHydrationWarning>
        <ClientShell>
           {children}
        </ClientShell>
      </body>
    </html>
  );
}
