"use client";

import React from "react";
import { useParams } from "next/navigation";

function ProductsLayout({ children }) {
  const routeParams = useParams();

  const productId = routeParams.id;

  const breadcrumbProductId = () => {
    if (productId) {
      return (
        <>
          <span className="text-neutral-400">{">"}</span>
          <span className="text-slate-600">{productId}</span>
        </>
      );
    }
  };

  return (
    <article className="w-full h-full flex flex-col items-start justify-start gap-8">
      {/* <> */}
      <p className="text-sm flex text-center justify-start gap-2">
        <span className="text-neutral-400">Home</span>
        <span className="text-neutral-400">{">"}</span>
        <span className={routeParams.id ? "text-slate-400" : "text-slate-600"}>
          Products
        </span>

        {breadcrumbProductId()}
      </p>

      {children}
      {/* </> */}
    </article>
  );
}

export default ProductsLayout;
