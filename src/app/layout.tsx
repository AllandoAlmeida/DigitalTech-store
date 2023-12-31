import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/hearder";
import { AuthProvider } from "@/providers/auth";
import { Footer } from "@/components/ui/footer";
import CartProvider from "@/providers/cart";
import { Toaster } from "@/components/ui/toaster";

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
    <html lang="pt">
      <body className={inter.className}>
        <div className="flex h-full w-full flex-col">
          <AuthProvider>
            <CartProvider>
              <Header />
              <div className="flex-1 md:m-auto md:w-[50rem] md:max-w-[50rem]">
                {children}
              </div>
              <Toaster />
              <Footer />
            </CartProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
