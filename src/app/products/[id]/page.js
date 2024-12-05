import React from "react";

export function generateMetadata({ params }) {
  const id = params.id;

  return {
    title: `Next Practice - Product ${id}`,
    description: "My Next.js Practice App",
  };
}

async function ProductSinglePage({ params }) {
  const product = await new Promise((resolve, reject) => {
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
      <h1 className="text-3xl text0neutral-400 font-bold">{product.title}</h1>
      <p className="lg:w-2/5 text-neutral-600">{product.description}</p>
      <button className="px-4 py-2 text-sm text-white bg-slate-500 rounded-md hover:brightness-125 transition-all">
        Buy Now
      </button>
    </div>
  );
}

export default ProductSinglePage;
