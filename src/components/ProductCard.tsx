import React from 'react'

function ProductCard({props}) {
  return (
    <div>
          <div
            key={props.id}
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
              src={props.image}
              alt={props.name}
              className="
                w-full
                h-104
                object-cover
                rounded-lg
              "
            />

            <h2 className="font-semibold text-lg mt-4 min-h-[64px]">
              {props.name}
            </h2>

            <p className="mt-2 text-2xl font-bold">
              ₹{props.price}
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
