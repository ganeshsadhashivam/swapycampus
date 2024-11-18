"use client"; // Mark this as a client component

import { usePathname } from "next/navigation";
import Header from "../app/(shared)/header/Header";
import Footer from "../app/(shared)/footer/Footer";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Exclude Header and Footer for specific routes
  const excludedRoutes = ["/login", "/signup"];
  const isExcludedRoute = excludedRoutes.includes(pathname);

  return (
    <>
      {!isExcludedRoute && <Header />}
      {children}
      {!isExcludedRoute && <Footer />}
    </>
  );
}
