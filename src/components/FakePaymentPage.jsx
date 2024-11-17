import React, { useState } from "react";

const FakePaymentPage = ({ total = 1489 }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment information:", { cardNumber, expirationDate, cvv });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto mt-28">
      <h2 className="text-2xl font-bold mb-4">Payment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="card-number" className="block font-medium">
            Card Number
          </label>
          <input
            id="card-number"
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="4111 1111 1111 1111"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiration-date" className="block font-medium">
              Expiration Date
            </label>
            <input
              id="expiration-date"
              type="text"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              placeholder="MM/YY"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block font-medium">
              CVV
            </label>
            <input
              id="cvv"
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
        </div>
        <div>
          <p className="text-lg font-medium">Total: ₹{total.toFixed(2)}</p>
        </div>
        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default FakePaymentPage;
