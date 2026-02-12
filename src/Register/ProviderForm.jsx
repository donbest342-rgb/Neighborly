import { useState } from "react";
import StepOne from "./StepOne.jsx";
import StepTwo from "./StepTwo.jsx";
import StepThree from "./StepThree.jsx";

export default function ProviderForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const updateForm = (data) => {
    setFormData({ ...formData, ...data });
  };

  return (
    <div className="form-container">
      <Progress step={step} />

      {step === 1 && (
        <StepOne
          onNext={() => setStep(2)}
          updateForm={updateForm}
        />
      )}

      {step === 2 && (
        <StepTwo
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
          updateForm={updateForm}
        />
      )}

      {step === 3 && (
        <StepThree
          onBack={() => setStep(2)}
          formData={formData}
        />
      )}
    </div>
  );
}

function Progress({ step }) {
  return (
    <div className="progress">
      <span className={step >= 1 ? "active" : ""} />
      <span className={step >= 2 ? "active" : ""} />
      <span className={step >= 3 ? "active" : ""} />
    </div>
  );
}
