"use client";

import React from "react";

function ProductsLayout({ children }) {
  return (
    <article className="w-full h-full flex flex-col items-start justify-start gap-14">
      {/* pagination */}
      {/* <p className="text-sm flex text-center justify-start gap-2">
        <span className="text-neutral-400">Home</span>
        <span className="text-neutral-400">{">"}</span>
        <span className="text-slate-600">Products</span>
      </p> */}

      {/* <p>{params.id}</p> */}

      {/* page content */}
      {children}
    </article>
  );
}

export default ProductsLayout;
