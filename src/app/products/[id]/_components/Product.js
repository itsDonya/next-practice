import React from "react";

async function Product({ id }) {
  if (!id) {
    throw new Error("Product ID is missing");
  }

  const productData = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: id,
        title: `Product ${id}`,
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
}

export default Product;
