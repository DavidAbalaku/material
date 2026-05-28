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
    "Rence Material is a high-performance framework based on Google Material UI Design for Bootstrap 5. Drop in one file — every component transforms into Material 3 instantly.",
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
    "david abalaku",
    "Material Design component library",
    "Bootstrap Material Design 5",
    "Material Design 3 Bootstrap 5",
    "M3 Design System",
    "Material You Bootstrap",
    "Google Blue Theme",
  ],
  authors: [{ name: "david abalaku", url: "https://github.com/davidabalaku" }],
  creator: "david abalaku",
  metadataBase: new URL("https://davidabalaku.github.io/material"),
  verification: {
    google: "googled1ac49cab606250d.html",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rence Material — Bootstrap 5 × Material Design 3",
    description:
      "Convert your Bootstrap 5 project to Google Material Design 3 based on Google Material UI Design. Open-source, zero dependencies, production-ready.",
    url: "https://davidabalaku.github.io/material",
    siteName: "Rence Material",
    images: [
      {
        url: "/rence-material-banner.png",
        width: 1200,
        height: 630,
        alt: "Rence Material Showcase",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rence Material — Bootstrap 5 × Material Design 3",
    description:
      "Drop in one CSS + JS file. Bootstrap 5 becomes Google Material Design 3 instantly.",
    creator: "@davidabalaku",
    images: ["/rence-material-banner.png"],
  },
  icons: {
    icon: "favicon.svg",
    shortcut: "favicon.svg",
    apple: "favicon.svg",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Rence Material",
  "operatingSystem": "Web",
  "applicationCategory": "DeveloperApplication",
  "description": "A powerful Material Design 3 skin for Bootstrap 5 based on Google Material UI Design.",
  "url": "https://davidabalaku.github.io/material",
  "author": {
    "@type": "Person",
    "name": "david abalaku",
    "url": "https://github.com/davidabalaku"
  },
  "softwareVersion": "1.5.0",
  "license": "https://opensource.org/licenses/MIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
