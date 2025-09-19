import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingNavDemo } from "@/components/floating-nav-demo";
import Footer from "@/components/footer";
import { ModalProvider } from "@/components/ui/animated-modal";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HouSetimation | Get to know your House Value",
  description: "Application d'estimation de prix de votre maison basée sur les facteurs de la Carolina House Value Datasets.",
  icons: {
    icon: '/Logo/HouSetimation.ico'
  },
  keywords: [
    "HouSetimation",
    "House Value Estimation",
    "AI based estimation",
    "AI prediction",
    "Web Development",
    "Next.js App",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-teal-900`}
      >
        <ModalProvider>
          <FloatingNavDemo/>
          {children}
          <Footer/>
        </ModalProvider>

      </body>
    </html>
  );
}
