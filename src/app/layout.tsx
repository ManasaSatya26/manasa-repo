import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Lakshmi Prasanna | Classical Dance Instructor Portfolio",
  description:
    "Certified Kuchipudi dancer and dance instructor. Founder of Saraswathi Nrithyalaya. Inspiring young minds through Indian classical dance.",
  openGraph: {
    title: "Lakshmi Prasanna | Classical Dance Instructor",
    description:
      "Certified Kuchipudi dancer, dance instructor, and founder of Saraswathi Nrithyalaya. Available for school teaching positions.",
    type: "website",
    locale: "en_IN",
    siteName: "Lakshmi Prasanna Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lakshmi Prasanna | Classical Dance Instructor",
    description:
      "Certified Kuchipudi dancer inspiring young minds through Indian classical dance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
