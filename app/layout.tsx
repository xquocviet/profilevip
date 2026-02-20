import type { Metadata } from "next";
import { Poppins, Sorts_Mill_Goudy } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/lenis";
import RocketTrail from "@/components/RocketTrail";
import RainBackground from "@/components/RainBackground";

const poppins = Poppins({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const sortsMillGoudy = Sorts_Mill_Goudy({
    variable: "--font-mono",
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata: Metadata = {
    title: "Le Quoc Viet - Profile",
    description: "Aspiring full-stack web developer building practical, user-focused web projects while continuously learning and improving.",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-neutral-950 text-white">
                <RainBackground />
                <RocketTrail />
                <LenisScroll />
                {children}
            </body>
        </html>
    );
}
