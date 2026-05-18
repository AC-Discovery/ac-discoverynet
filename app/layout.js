import "./globals.css";
import { PoppinsFont } from "./Font/font";

export const metadata = {
  title: "E-Discovery Services",
  description: "Technology consultants, finding the right solutions for all your litigation needs.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${PoppinsFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-poppins">{children}</body>
    </html>
  );
}
