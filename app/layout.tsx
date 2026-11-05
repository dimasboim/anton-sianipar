import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const lora = Lora({ subsets: ["latin"], variable: "--font-serif", weight: ["500", "600", "700"] });

const siteUrl = "https://antonzulkarnainsianipar.my.id";
const title = "Dr. Anton Zulkarnain Sianipar, M.Pd — Dosen & Peneliti";
const description =
  "Profil Dr. Anton Zulkarnain Sianipar, M.Pd — dosen dan peneliti bidang Teknologi Pendidikan dan Pendidikan Matematika.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title,
    description,
    siteName: "Anton Zulkarnain Sianipar",
    locale: "id_ID",
    images: [{ url: "/anton.png", width: 220, height: 342, alt: "Dr. Anton Zulkarnain Sianipar" }],
  },
  twitter: { card: "summary", title, description, images: ["/anton.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
