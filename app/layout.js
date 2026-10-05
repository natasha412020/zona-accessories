import "./globals.css";

export const metadata = {
  title: "Zona Accessories — Hydrogel & Backskin",
  description:
    "Kenali Hydrogel Antigo, pelindung fleksibel untuk smartphone kamu. Hydrogel dan backskin motif dekoratif berkualitas tinggi.",
  icons: {
    icon: "/logo-zona.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased text-slate-900">{children}</body>
    </html>
  );
}