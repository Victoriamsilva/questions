import Header from "@/components/header";
import "../styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Container from "@/components/container";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Container>
          <main>{children}</main>
        </Container>
      </body>
    </html>
  );
}
