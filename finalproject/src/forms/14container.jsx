import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2'
import Step3 from './Step3';

function FormContainer() {
  const [step, setStep] = useState(1); // Track the current step
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    payment: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input, value) => {
    setFormData({
      ...formData,
      [input]: value,
    });
  };

  return (
    <div>
      {step === 1 && <Step1 nextStep={nextStep} handleChange={handleChange} />}
      {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />}
      {step === 3 && <Step3 prevStep={prevStep} formData={formData} />}
    </div>
  );
}

export default FormContainer;
