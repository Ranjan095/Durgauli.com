/** @format */

import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import StoreProvider from "@/redux/StoreProvider";
import RefreshContextProvider from "@/context/refreshContext/refreshContex";
import { ToastContainer, toast } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "durgauli.com",
  description: "Developer Ranjan Yadav",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <RefreshContextProvider>
          <StoreProvider>
            <NavBar />
            {children}
            <Footer />
          </StoreProvider>
        </RefreshContextProvider>
      </body>
    </html>
  );
}
