import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles

import SalaryInput from "./components/SalaryInput"; // Import SalaryInput component
import SalaryBreakdown from "./components/SalaryBreakdown"; // Import SalaryBreakdown component
import Footer from "./components/Footer";

function App() {
  const [basicSalary, setBasicSalary] = useState(24050); // Stage 4 selected by default
  const [daRatePercent, setDaRatePercent] = useState(15.73); // Initial DA rate in percentage
  const [isCalculated, setIsCalculated] = useState(false); // Define isCalculated state

  const handleSalaryChange = (salary) => {
    setBasicSalary(salary);
    setIsCalculated(false);
  };

  const handleDaRateChange = (event) => {
    setDaRatePercent(parseFloat(event.target.value)); // Update state with percentage value
    setIsCalculated(false);
  };

  const calculateSalary = () => {
    const daRate = daRatePercent / 100; // Convert percentage to decimal for calculations
    setIsCalculated(true);
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
        {isCalculated && (
          <SalaryBreakdown
            basicSalary={basicSalary}
            daRate={daRatePercent / 100}
          />
        )}{" "}
        {/* Pass converted DA rate */}
      </div>

      {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}

      <Footer />
    </>
  );
}

export default App;
