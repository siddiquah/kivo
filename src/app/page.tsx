import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-5xl font-bold mb-10">
        Music Store
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="
              bg-white
              p-4
              rounded-xl
              shadow-md
              hover:shadow-xl
              hover:-translate-y-1
              transition
              duration-300
              flex
              flex-col
            "
          >
            <img
              src={product.image}
              alt={product.name}
              className="
                w-full
                h-104
                object-cover
                rounded-lg
              "
            />

            <h2 className="font-semibold text-lg mt-4">
              {product.name}
            </h2>

            <p className="mt-2 text-2xl font-bold">
              ₹{product.price.toLocaleString()}
            </p>

            <button
              className="
                mt-auto
                w-full
                bg-slate-900
                text-white
                py-3
                rounded-lg
                hover:bg-slate-700
                transition
              "
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}