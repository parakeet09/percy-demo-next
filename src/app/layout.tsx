import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Percy Demo - Next.js",
  description:
    "A simple Next.js app to demonstrate Percy visual regression testing with colored boxes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
