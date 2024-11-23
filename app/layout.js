import "./globals.css";
import "remixicon/fonts/remixicon.css";

import { Poppins } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title:
    "Safe Invotec - Industry Leaders in Industrial and Specialty Gas Equipments",
  description: "Industry Leaders in Specialty and Industrial Gas Equipments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
