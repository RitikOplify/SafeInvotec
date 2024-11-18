import localFont from "next/font/local";
import "./globals.css";
import "remixicon/fonts/remixicon.css";

import { Poppins } from "next/font/google";

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
        {children}
      </body>
    </html>
  );
}
