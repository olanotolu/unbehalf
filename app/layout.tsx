import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unbehalf — Superintelligence on behalf of U",
  description: "Superintelligence on behalf of U.",
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
