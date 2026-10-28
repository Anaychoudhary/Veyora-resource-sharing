import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veyora — Resource Sharing",
  description:
    "A trusted platform for sharing underused resources, spaces and equipment.",
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
