// ConfirmationForm.jsx
import React, { useState } from "react";
import "../App.css";
import gift from "../assets/images/gift.gif";

const ConfirmationForm = () => {
  // Function to generate a random tracking ID
  const generateTrackingId = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  // State to hold the randomly generated tracking ID
  const [trackingId, setTrackingId] = useState(generateTrackingId());

  return (
    <div className="p-4">
      <h1 className="text-4xl lg:text-6xl font-semibold mb-6 text-black">
        Order Confirmation
      </h1>
      <p className="text-lg lg:text-xl text-black">
        Your order has been successfully placed. Here is your tracking ID:
        <span className="font-bold"> {trackingId}</span>
      </p>
      <div className="mt-6 lg:mt-10">
        <img src={gift} alt="Success GIF" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default ConfirmationForm;
