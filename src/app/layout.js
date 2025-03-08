import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  weight: '400',
  subsets: ["latin"],
});

export const metadata = {
  title: "Nubox",
  description: "O mais simples",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${nunito.className}`}
      >
        {children}
      </body>
    </html>
  );
}
