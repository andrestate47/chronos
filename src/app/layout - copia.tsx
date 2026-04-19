import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chronos Heritage | Timeless Vintage Timepieces",
  description: "Discover a curated collection of exquisite vintage watches. Restored to perfection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
