import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PROFILE } from "@/lib/data";

const interTight = localFont({
  src: [
    {
      path: "../fonts/inter-tight-latin-wght-normal.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../fonts/inter-tight-latin-wght-italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter-tight",
  display: "swap",
});

const instrumentSerif = localFont({
  src: [
    {
      path: "../fonts/instrument-serif-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/instrument-serif-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: [
    {
      path: "../fonts/jetbrains-mono-latin-wght-normal.woff2",
      weight: "100 800",
      style: "normal",
    },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sandipmaity.dev"),
  title: `${PROFILE.name} — ${PROFILE.role}`,
  description: `${PROFILE.name} is a ${PROFILE.role} specializing in scalable ERP, HRMS, and CRM platforms, real-time collaboration engines, and robust RBAC architectures.`,
  keywords: [
    "Sandip Maity",
    "Software Engineer",
    "Full Stack Engineer",
    "Next.js Developer",
    "React",
    "NestJS",
    "Node.js",
    "MongoDB",
    "WebSockets",
    "ERP HRMS CRM",
    "Tedekstra Limited",
  ],
  authors: [{ name: PROFILE.name, url: PROFILE.github }],
  creator: PROFILE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sandipmaity.dev",
    title: `${PROFILE.name} — ${PROFILE.role}`,
    description: PROFILE.tagline,
    siteName: `${PROFILE.name} Portfolio`,
    images: [
      {
        url: "/sandip.jpg",
        width: 1200,
        height: 1200,
        alt: PROFILE.name,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#090a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if ('scrollRestoration' in history) {
                  history.scrollRestoration = 'manual';
                }
                window.scrollTo(0, 0);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased selection:bg-[#eb5424] selection:text-white">
        {children}
      </body>
    </html>
  );
}
