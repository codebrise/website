import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f1efe9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://codebrise.com"),
  title: {
    default: "CodeBrise — Build. Experiment. Release.",
    template: "%s | CodeBrise",
  },
  description:
    "CodeBrise is an independent software studio building useful products, thoughtful developer tools and open experiments.",
  icons: {
    icon: [
      { url: "/favicons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicons/favicon-192.png",
  },
  openGraph: {
    title: "CodeBrise — Build. Experiment. Release.",
    description:
      "Independent software studio building useful products, thoughtful developer tools and open experiments.",
    url: "https://codebrise.com",
    siteName: "CodeBrise",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeBrise — Independent Software Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeBrise — Build. Experiment. Release.",
    description:
      "Independent software studio building useful products, thoughtful developer tools and open experiments.",
    images: ["/og-image.png"],
  },
};

import { generateStudioJsonLd } from "@/lib/seo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = generateStudioJsonLd();

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F1EFE9] text-[#11151D] font-sans selection:bg-[#8057F5]/20 selection:text-[#11151D]">
        {children}
      </body>
    </html>
  );
}
