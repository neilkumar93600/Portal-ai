import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next";

import { Toaster } from "@/components/ui/sonner";
import { TRPCReactProvider } from "@/trpc/client";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const baseUrl =
  process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Portal.ai — AI Meeting Assistant & Agents That Join Your Calls",
    template: "%s | Portal.ai",
  },
  description:
    "Add AI agents to your meetings. Portal.ai lets you create agents that join calls, follow instructions, and collaborate in real time. Free trial.",
  openGraph: {
    type: "website",
    title: "Portal.ai — AI Meeting Assistant & Agents That Join Your Calls",
    description:
      "Add AI agents to your meetings. Portal.ai lets you create agents that join calls, follow instructions, and collaborate in real time. Free trial.",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Portal.ai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portal.ai — AI Meeting Assistant & Agents That Join Your Calls",
    description:
      "Add AI agents to your meetings. Portal.ai lets you create agents that join calls, follow instructions, and collaborate in real time. Free trial.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Portal.ai",
  url: baseUrl,
  logo: `${baseUrl}/logo.svg`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NuqsAdapter>
      <TRPCReactProvider>
        <html lang="en">
          <head>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(organizationSchema),
              }}
            />
          </head>
          <body className={`${inter.className} antialiased`}>
            <Toaster />
            {children}
          </body>
        </html>
      </TRPCReactProvider>
    </NuqsAdapter>
  );
}
