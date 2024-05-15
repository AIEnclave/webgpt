import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebGPT - Your AI Ally",
  description: "Browser AI Ally. Chat with webpage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <meta name="google-site-verification" content="2dLFkWirgGTfJU5-58zDRUgG25YjSCW03qXaeIbYwxw" />
      <meta name="google-site-verification" content="4Dg86CmrTyLnehJ-87gb8HlECGgXZcksqOJ59b5bG70" />
      <body
        className={cn(
          "grainy flex min-h-screen flex-col font-sans antialiased",
          GeistSans.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
