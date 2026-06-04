import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-5xl font-bold mb-10">
        Music Store
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard product = {product} key={product.id}/>
        ))}
      </div>
    </div>
  );
}