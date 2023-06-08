import React from "react";

const CheckoutWizard = ({ activeStep = 0 }) => {
  return (
    <div className="flex ">
      {["Cart >", " Information >", "Shipping >", "Payment"].map(
        (step, index) => (
          <p key={step} className={`pr-1 ${index <= activeStep && "text-sky-500"} text-sm `}>
            {step}
          </p>
        )
      )}
    </div>
  );
};

export default CheckoutWizard;
