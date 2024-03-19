// DeliveryForm.jsx
import React from "react";
import "../App.css";

const DeliveryForm = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-white">
        Delivery Details
      </h2>
      <form className="flex flex-col gap-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered text-white"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="input input-bordered text-white"
          />
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Pincode"
            className="input input-bordered text-white"
          />
          <input
            type="text"
            placeholder="Country"
            className="input input-bordered text-white"
          />
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="State"
            className="input input-bordered text-white"
          />
        </div>
        <textarea
          placeholder="Address"
          className="textarea textarea-bordered text-white"
          rows="4"
        ></textarea>
      </form>
    </div>
  );
};

export default DeliveryForm;
