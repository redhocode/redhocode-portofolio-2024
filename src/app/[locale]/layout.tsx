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
import PlayMusic from "@/components/PlayMusic";
import SideNav from "@/components/sidebar";
import Header from "@/components/Navbar/header";



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
         
            <Header/>
              <div className="flex">
                <SideNav/>
                <div className="w-full overflow-x-auto">
                  <div className="sm:h-[calc(99vh-60px)] overflow-auto ">
                    <div className="w-full flex justify-center mx-auto overflow-auto h-[calc(100vh - 120px)] overflow-y-auto relative">
                      <PageWrapper>

                      <div className="w-full">{children}</div>
                      </PageWrapper>
                    </div>
                  </div>
                </div>
              </div>
              <PlayMusic />
           
          </NextIntlClientProvider>
        </ThemeProvider>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
