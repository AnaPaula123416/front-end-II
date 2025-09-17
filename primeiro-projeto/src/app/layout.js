import "./globals.css";
import Header from "@/components/header";

export const metadata = {
  title: "Olha a Paulada",
  description: "meu site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header>Pauleta</Header>
        {children}
      </body>
    </html>
  );
}
