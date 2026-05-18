import { Poppins } from "next/font/google";

export const PoppinsFont = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});