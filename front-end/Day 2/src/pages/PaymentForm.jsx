// PaymentForm.jsx
import React, { useState } from "react";
import "../App.css";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-white">
        Payment Details
      </h2>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="paymentMethod" className="text-white">
            Payment Method
          </label>
          <select
            id="paymentMethod"
            className="input input-bordered text-white"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
          >
            <option value="">Select Payment Method</option>
            <option value="UPI">UPI</option>
            <option value="Debit">Debit Card</option>
            <option value="Credit">Credit Card</option>
            <option value="COD">Cash on Delivery</option>
          </select>
        </div>
        {paymentMethod === "Debit" || paymentMethod === "Credit" ? (
          <>
            <input
              type="text"
              placeholder="Card Number"
              className="input input-bordered text-white"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <input
              type="date" // Change type to date
              placeholder="Expiry Date"
              className="input input-bordered text-white"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="CVV"
              className="input input-bordered text-white"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </>
        ) : paymentMethod === "UPI" ? (
          <input
            type="text"
            placeholder="UPI ID"
            className="input input-bordered text-white"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
        ) : null}
      </form>
    </div>
  );
};

export default PaymentForm;
