import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import localFont from "next/font/local";

const noto = localFont({
  src: [
    {
      path: "../fonts/NotoSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/NotoSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/NotoSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/NotoSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-noto",
});

const description =
  "Holy Habits von Nuria — Yoga, Coaching und ätherische Öle für einen ganzheitlichen Weg zu mehr Wohlbefinden. Bewegung, Selbstbestimmtheit und Klarheit für Deinen Alltag.";

export const metadata: Metadata = {
  title: {
    default: "Holy Habits — Yoga. Coaching. Oils.",
    template: "%s — Holy Habits",
  },
  description,
  metadataBase: new URL("https://www.holyhabits.club"),
  keywords: [
    "Yoga",
    "Coaching",
    "ätherische Öle",
    "Movement",
    "Achtsamkeit",
    "Nuria",
    "Holy Habits",
    "Yoga Diez",
    "Yoga Elz",
    "Wohlbefinden",
  ],
  authors: [{ name: "Nuria" }],
  creator: "Nuria",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Holy Habits — Yoga. Coaching. Oils.",
    description,
    url: "https://www.holyhabits.club",
    siteName: "Holy Habits",
    images: [
      {
        url: "/images/NURIA_VISTENKARTEUND LOGO_20240430.jpeg",
        width: 640,
        height: 414,
        alt: "Holy Habits Logo",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Holy Habits — Yoga. Coaching. Oils.",
    description,
    images: ["/images/NURIA_VISTENKARTEUND LOGO_20240430.jpeg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Holy Habits",
  description,
  url: "https://www.holyhabits.club",
  image: "https://www.holyhabits.club/images/NURIA_VISTENKARTEUND LOGO_20240430.jpeg",
  founder: { "@type": "Person", name: "Nuria" },
  areaServed: [
    { "@type": "Place", name: "Diez" },
    { "@type": "Place", name: "Elz" },
  ],
  knowsAbout: ["Yoga", "Movement", "Coaching", "Ätherische Öle", "Achtsamkeit"],
  makesOffer: [
    { "@type": "Offer", name: "Yoga" },
    { "@type": "Offer", name: "Coaching" },
    { "@type": "Offer", name: "Ätherische Öle" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${noto.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
