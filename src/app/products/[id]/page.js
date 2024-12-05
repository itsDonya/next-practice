import React, { Suspense } from "react";

import Loading from "./loading";

export function generateMetadata({ params }) {
  const id = params.id;

  return {
    title: `Next Practice - Product ${id}`,
    description: "My Next.js Practice App",
  };
}

function ProductSinglePage({ params }) {
  const Alert = () => {
    return (
      <div className="w-full p-4 bg-slate-100 flex items-center justify-start gap-4 border-2 border-slate-300 rounded-md">
        {/* icon */}
        <div className="size-6 aspect-square bg-slate-400 flex items-center justify-center rounded-full">
          <span className="text-sm text-white font-mono">i</span>
        </div>

        {/* text */}
        <p className="text-slate-400">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
    );
  };
  const Product = async () => {
    const productData = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: params.id,
          title: `Product ${params.id}`,
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid tenetur ut sequi deleniti porro magni laboriosam enim perspiciatis. Unde iure doloremque optio est sunt fugiat obcaecati eum rerum, ut quo atque alias harum asperiores? Fugiat soluta aliquid corporis cupiditate voluptatem!",
        });
      }, 2000);
    });

    return (
      <div className="flex flex-col items-start justify-start gap-4">
        <h1 className="text-3xl text0neutral-400 font-bold">
          {productData.title}
        </h1>
        <p className="lg:w-2/5 text-neutral-600">{productData.description}</p>
        <button className="px-4 py-2 text-sm text-white bg-slate-500 rounded-md hover:brightness-125 transition-all">
          Buy Now
        </button>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col items-start justify-start gap-8">
      <Alert />

      <Suspense fallback={<Loading />}>
        <Product />
      </Suspense>
    </div>
  );
}

export default ProductSinglePage;
