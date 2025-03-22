"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ContextProvider from "@/context/context";
import Cart from "@/components/cart/Cart";
import Modal from "@/components/ui/Modal";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const isOnProductsPage = pathname === "/products";
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContextProvider>
          <Sidebar />
          <Navbar
            setIsModalOpen={setIsModalOpen}
            isOnProductsPage={isOnProductsPage}
          />
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <Cart />
          </Modal>

          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
