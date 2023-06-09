import React from "react";
import { useRouter } from "next/router";

const CheckoutWizard = ({ currentStep = 0 }) => {
  const router = useRouter()
  return (
    <div className="flex ">
      {["Cart >", "Information >","Shipping >", "Payment"].map((step, index) => (
        <p
          key={step}
          className={`pr-1 ${(index+1) < currentStep && "text-sky-500 font-normal"} ${
            (index+1) > currentStep && "text-gray-400 font-normal"
          } text-sm font-medium`}
        >
          {step}
        </p>
      ))}
    </div>
  );
};

export default CheckoutWizard;
