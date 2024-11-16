"use client";

// import { useEffect, useState } from 'react';
import Card from "@/components/Card";
import { Product } from "@/lib/types/types";

type ProductListingProps = {
  products: Product[];
};

export default function ProductListing({ products }: ProductListingProps) {
  //   const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     fetch('/api/products')
  //       .then((res) => res.json())
  //       .then((data) => setProducts(data));
  //   }, []);

  return (
    <section className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 flex justify-center">
        Goods and Deals
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
