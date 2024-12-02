import React from "react";
import Link from "next/link";

function AppHeader() {
  return (
    <header className="w-full h-16 p-4 bg-slate-200 flex items-center justify-start gap-16">
      <p>App Header</p>

      <nav className="flex items-center justify-start gap-6">
        <Link
          href="/"
          className="text-neutral-500 hover:text-neutral-700 transition-all duration-300">
          Home
        </Link>

        <Link
          href="/products"
          className="text-neutral-500 hover:text-neutral-700 transition-all duration-300">
          Products
        </Link>

        <Link
          href="/blog"
          className="text-neutral-500 hover:text-neutral-700 transition-all duration-300">
          Blog
        </Link>
      </nav>
    </header>
  );
}

export default AppHeader;
