import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./components/navigation";
import { TracingBeam } from "../app/components/ui/tracing-beam"; // Import the TracingBeam component

// Load custom fonts
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

// Metadata for the app
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`flex flex-col min-h-screen bg-gray-50 text-gray-900 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <header className="bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <Navigation />
            </div>
          </header>
        {/* Wrap header, navigation, and footer inside TracingBeam */}
        <TracingBeam className="flex-1">
          
          

          {/* Main Content */}
          <main className="flex-1 max-w-7xl mx-auto px-4 py-6">{children}</main>

          
        </TracingBeam>
        {/* Footer */}
        <footer className="bg-slate-900 text-white bottom-0">
            <div className="max-w-7xl mx-auto px-4 py-4 text-center">
              © {new Date().getFullYear()} Mulubrhan. All rights reserved.
            </div>
          </footer>
      </body>
    </html>
  );
}