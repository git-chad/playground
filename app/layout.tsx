import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ReactLenis } from "@/lib/lenis";

export const metadata: Metadata = {
  title: "PLAYGROUND",
  description: "@git-chad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ReactLenis
    //   root
    //   options={{
    //     lerp: 0.1,
    //     smoothWheel: true,
    //   }}
    // >
      <html lang="en">
        <head>
          <link rel="stylesheet" href="https://use.typekit.net/hby7xtd.css" />
          <link
            rel="stylesheet"
            href="https://use.typekit.net/hby7xtd.css"
          ></link>
        </head>
        <body className={`${GeistSans.className}`}>{children}</body>
      </html>
    // </ReactLenis>
  );
}
