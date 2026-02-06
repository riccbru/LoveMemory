import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fatto con amore per RGV",
  description:
    "Completa il gioco e vedi che succede",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
