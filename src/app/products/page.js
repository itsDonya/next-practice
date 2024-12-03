import React from "react";
import Link from "next/link";

function ProductsPage() {
  return (
    <section className="w-full grid grid-cols-8 gap-6">
      {[...Array(20).keys()].map((item) => {
        return (
          <Link href={`/products/${item + 1}`}>
            <div className="w-full h-44 flex flex-col items-center justify-center gap-2 border border-neutral-400 rounded-lg">
              <p className="text-4xl text-neutral-400 font-bold">{item + 1}</p>
            </div>
          </Link>
        );
      })}
    </section>
  );
}

export default ProductsPage;
