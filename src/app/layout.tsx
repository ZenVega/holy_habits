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

export const metadata: Metadata = {
  title: "Holy Habits",
  description: "Yoga.Coaching.Oils",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto.variable} antialiased`}>
        <main>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
