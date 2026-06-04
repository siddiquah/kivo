import React from 'react'
import {ProductType} from '@/types/product'

type ProductCardType = {
  product: ProductType
}

function ProductCard({product} : ProductCardType) {
  return (
    <div>
          <div
            
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

            <h2 className="font-semibold text-lg mt-4 min-h-[64px]">
              {product.name}
            </h2>

            <p className="mt-2 text-2xl font-bold">
              ₹{product.price}
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
      </div>
  )
}

export default ProductCard
