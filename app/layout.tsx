import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camelliera — Build the future of Discord",
  description: "A next-generation Discord developer platform for bots, workflows, analytics and automation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
