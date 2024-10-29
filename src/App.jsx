import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles

import SalaryInput from "./components/SalaryInput"; // Import SalaryInput component
import SalaryBreakdown from "./components/SalaryBreakdown"; // Import SalaryBreakdown component
import Footer from "./components/Footer";

function App() {
  const [basicSalary, setBasicSalary] = useState(24050); // Stage 4 selected by default
  const [daRatePercent, setDaRatePercent] = useState(17.20); // Initial DA rate in percentage
  const [isCalculated, setIsCalculated] = useState(false); // Define isCalculated state
  const [error, setError] = useState(false); // Define error state

  const handleSalaryChange = (salary) => {
    setBasicSalary(salary);
    setIsCalculated(false);
  };

  const handleDaRateChange = (event) => {
    setDaRatePercent(parseFloat(event.target.value)); // Update state with percentage value
    setIsCalculated(false);
    setError(false);
  };

  const calculateSalary = () => {
    if (!daRatePercent) {
      setError(true); // Set error state if DA rate is empty
    } else {
      setIsCalculated(true); // Otherwise, calculate salary
    }
  };

  return (
    <>
      <div className="container mt-5 px-5">
        <h1 className="text-center mb-0">Salary Calculator</h1>
        <p className="text-muted text-center mb-4">
          12th Bipartite Settlement (Workmen)
        </p>
        <SalaryInput
          onSalaryChange={handleSalaryChange}
          basicSalary={basicSalary}
          onDaRateChange={handleDaRateChange}
          daRate={daRatePercent} // Pass DA rate as percentage
        />
        <button onClick={calculateSalary} className="btn btn-primary mt-3">
          Calculate
        </button>
        {error && (
          // <p className="text-muted fst-italic mt-3">Please enter DA rate!</p>
          <p className="alert alert-primary text-muted fst-italic mt-3">
            Please enter DA rate!
          </p>
        )}
        {isCalculated && !error && (
          <SalaryBreakdown
            basicSalary={basicSalary}
            daRate={daRatePercent / 100}
          />
        )}{" "}
        {/* Pass converted DA rate */}
      </div>

      <Footer />
    </>
  );
}

export default App;
