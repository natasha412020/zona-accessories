import "./globals.css";

export const metadata = {
  title: "Zona Accessories — Hydrogel & Backskin",
  description:
    "Kenali Hydrogel, pelindung fleksibel untuk smartphone kamu. Hydrogel dan backskin motif dekoratif berkualitas tinggi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased text-slate-900">{children}</body>
    </html>
  );
}