import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Kokonut - Free UI Components",
    description:
        "Kokonut is a free UI components library for Next.js and React.",
    metadataBase: new URL("https://kokonut.dev"),
    applicationName: "Kokonut",
    category: "development",
    keywords: ["ui", "components", "library", "next.js", "react", "ai"],
    robots: "index, follow",
    authors: [{ name: "Dorian Baffier", url: "https://x.com/dorian_baffier" }],
    openGraph: {
        title: "Kokonut - Free UI Components",
        description:
            "Kokonut is a free UI components library for Next.js and React.",
        url: "https://kokonut.dev",
        siteName: "Kokonut",
    },
    twitter: {
        card: "summary_large_image",
        site: "@kokonutdev",
        creator: "@dorian_baffier",
        title: "Kokonut - Free UI Components",
        description:
            "Kokonut is a free UI components library for Next.js and React.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    geistSans.variable,
                    geistMono.variable,
                    geistSans.className,
                    "antialiased"
                )}
            >
                <ThemeProvider attribute="class" disableTransitionOnChange>
                    <Header />
                    {children}
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
