import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { PageWrapper } from "@/components/page-wrapper";



const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Redho Arifin | Portfolio",
  description: "Portfolio Redho Arifin",
  icons: {
    icon: "/icon.png", // /public path
  },
};

export default async function localLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  
      const messages = await getMessages();
  return (
    <html lang={locale} className="dark">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
             <NextIntlClientProvider messages={messages}>

          <PageWrapper>

          {children}
          </PageWrapper>
             </NextIntlClientProvider>
          <Footer />
        </ThemeProvider>
          <ScrollToTopButton/>
      </body>
    </html>
  );
}
