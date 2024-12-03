import "./globals.css";

import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export const metadata = {
  title: "Next Practice",
  description: "My Next.js Practice App",
};

export const fetchCache = "force-no-store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col items-center justify-between">
        <AppHeader />

        <main className="w-full min-h-full p-6">{children}</main>

        <AppFooter />
      </body>
    </html>
  );
}
