"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    id: 1,
    title: "Home",
    slug: "/",
  },
  {
    id: 2,
    title: "Products",
    slug: "/products",
  },
  {
    id: 3,
    title: "Blog",
    slug: "/blog",
  },
];

function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="w-full h-16 p-4 bg-slate-200 flex items-center justify-start gap-16">
      <p>App Header</p>

      <nav className="flex items-center justify-start gap-6">
        {navLinks.map((item) => {
          return (
            <Link
              key={item.id}
              href={item.slug}
              className={
                `${
                  pathname == item.slug
                    ? "text-neutral-700"
                    : "text-neutral-500 hover:text-neutral-700"
                }` + " transition-all duration-300"
              }>
              {item.title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

export default AppHeader;
