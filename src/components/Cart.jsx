import React from "react";

const Cart = ({ items }) => {
  return (
    <section id="cart" className="py-4 px-4 md:px-4">
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-500">
                    {item.quantity} x ₹{item.price}
                  </p>
                </div>
              </div>
              <p className="text-lg font-medium">
                ₹{(item.price * item.quantity).toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Cart;
