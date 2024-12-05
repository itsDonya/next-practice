import React, { Suspense } from "react";

import Loading from "./loading";

import Product from "./_components/Product";

export function generateMetadata({ params }) {
  const id = params.id;

  return {
    title: `Next Practice - Product ${id}`,
    description: "My Next.js Practice App",
  };
}

function ProductSinglePage({ params }) {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-8">
      <Suspense fallback={<Loading />}>
        <Product id={params.id} />
      </Suspense>
    </div>
  );
}

export default ProductSinglePage;
