import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "BloomPath - AI Parenting Companion",
  description:
    "Science-based parenting, one step at a time. Track your child's development with Montessori-inspired guidance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${nunito.variable} font-sans antialiased`}>
        {children}
        <footer className="border-t border-border py-8 text-center text-sm text-text-muted">
          <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <span>&copy; {new Date().getFullYear()} Quakr</span>
            <span className="hidden sm:inline text-border">|</span>
            <a href="/privacy" className="hover:text-primary-dark transition-colors">
              Privacy Policy
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <a href="/terms" className="hover:text-primary-dark transition-colors">
              Terms of Service
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
