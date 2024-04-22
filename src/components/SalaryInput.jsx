import React from 'react';

function SalaryInput({ onSalaryChange, basicSalary, onDaRateChange, daRate }) {
  const handleSelectChange = (event) => {
    onSalaryChange(parseFloat(event.target.value));
  };

  return (
    <div className="form-group">
      <label htmlFor="basic-salary" className='fw-bold'>Select Basic Salary:</label>
      <select
        id="basic-salary"
        className="form-control"
        onChange={handleSelectChange}
        value={basicSalary} // Set initial selected value
      >
        <option value="20000">Stage 1 (₹20,000)</option>
        <option value="30000" selected>  {/* Set Stage 2 as selected */}
          Stage 2 (₹30,000)
        </option>
        <option value="40000">Stage 3 (₹40,000)</option>
      </select>
      <label htmlFor="da-rate" className='fw-bold mt-3'>DA Rate (in %):</label>  {/* Label change */}
      <input
        type="number"  // Ensure type is "number"
        step="0.01"  // Allow decimal values
        id="da-rate"
        placeholder="Enter DA Rate (e.g., 15.73)"
        onChange={onDaRateChange}
        className="form-control"
        value={daRate} // Display DA rate as percentage
      />
    </div>
  );
}

export default SalaryInput;
