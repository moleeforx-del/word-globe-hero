import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Origin — Building the Economy of Tomorrow",
  description: "A word-globe editorial hero.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
