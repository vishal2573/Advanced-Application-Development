// Checkout.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import NavBar1 from "../components/NavBar1";
import Footer from "../components/Footer";
import Cart from "./Cart";
import DeliveryForm from "./DeliveryForm";
import PaymentForm from "./PaymentForm";
import ConfirmationForm from "./ConfirmationForm";
import "../assets/css/Checkout.css";
import PreviewForm from "./PreviewForm";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PreviewForm />;
      case 2:
        return <DeliveryForm />;
      case 3:
        return <PaymentForm />;
      case 4:
        return <ConfirmationForm />;
      default:
        return null;
    }
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <Header />
      <NavBar1 />
      <div className="checkout-container">
        <ul className="steps steps-vertical lg:steps-horizontal">
          <li className={currentStep === 1 ? "step step-primary" : "step"}>
            Preview
          </li>
          <li className={currentStep === 2 ? "step step-primary" : "step"}>
            Delivery Details
          </li>
          <li className={currentStep === 3 ? "step step-primary" : "step"}>
            Payment
          </li>
          <li className={currentStep === 4 ? "step step-primary" : "step"}>
            Confirmation
          </li>
        </ul>
        <div className="step-content">{renderStep()}</div>
        {currentStep !== 1 && currentStep !== 4 && (
          <button
            className="btn btn-outline btn-warning"
            onClick={handlePrevStep}
          >
            Previous
          </button>
        )}
        {currentStep !== 4 && (
          <button
            className="btn btn-outline btn-warning"
            onClick={handleNextStep}
          >
            Next
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
