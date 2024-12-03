import React from "react";

export const metadata = {
  title: "Next Practice - Single Product",
  description: "My Next.js Practice App",
};

function ProductSinglePage({ params }) {
  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <h1 className="text-3xl text0neutral-400 font-bold">
        Product {params.id}
      </h1>

      <p className="w-2/5 text-neutral-600">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
        tenetur ut sequi deleniti porro magni laboriosam enim perspiciatis. Unde
        iure doloremque optio est sunt fugiat obcaecati eum rerum, ut quo atque
        alias harum asperiores? Fugiat soluta aliquid corporis cupiditate
        voluptatem!
      </p>

      <button className="px-4 py-2 text-sm text-white bg-slate-500 rounded-md hover:brightness-125 transition-all">
        Buy Now
      </button>
    </div>
  );
}

export default ProductSinglePage;
