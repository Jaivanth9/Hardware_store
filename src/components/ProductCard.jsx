import React from "react";
const ProductCard = ({ product, onAddToCart, onRemoveFromCart, cartItem }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden relative">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-contain"
      />
      <div className="p-4 pb-16">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <p className="text-gray-500 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-xl text-black font-medium">₹{product.price}</p>
          <div className="absolute bottom-0 left-0 w-full bg-white py-2 px-4 flex items-center justify-end space-x-2">
            {cartItem ? (
              <div className="flex items-center space-x-2 mb-2">
                <button
                  className="bg-gray-400 text-black px-4 py-1 font-bold rounded-sm hover:bg-gray-300"
                  onClick={() => onRemoveFromCart(product)}
                >
                  -
                </button>
                <span className="text-black font-bold">
                  {cartItem.quantity}
                </span>
                <button
                  className="bg-gray-400 text-black px-4 py-1 font-bold rounded-sm hover:bg-gray-300"
                  onClick={() => onAddToCart(product)}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                className="bg-red-500 text-white px-4 py-2 mb-2 rounded-md hover:bg-red-600"
                onClick={() => onAddToCart(product)}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
