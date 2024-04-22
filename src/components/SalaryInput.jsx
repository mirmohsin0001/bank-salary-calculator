import React from "react";

function SalaryInput({ onSalaryChange, basicSalary, onDaRateChange, daRate }) {
  const handleSelectChange = (event) => {
    onSalaryChange(parseFloat(event.target.value));
  };

  return (
    <div className="form-group">
      <label htmlFor="basic-salary" className="fw-bold mb-2">
        Select Stage:
      </label>
      <select
        id="basic-salary"
        className="form-control form-select"
        onChange={handleSelectChange}
        value={basicSalary} // Set initial selected value
      >
        <option value="24050">Stage 1 (₹24,050)</option>
        <option value="25390">Stage 2 (₹25,390)</option>
        <option value="26730">Stage 3 (₹26,730)</option>
        <option value="28070">Stage 4 (₹28,070)</option>
        <option value="29720">Stage 5 (₹29,720)</option>
        <option value="31370">Stage 6 (₹31,370)</option>
        <option value="33020">Stage 7 (₹33,020)</option>
        <option value="35020">Stage 8 (₹35,020)</option>
        <option value="37020">Stage 9 (₹37,020)</option>
        <option value="39020">Stage 10 (₹39,020)</option>
        <option value="41020">Stage 11 (₹41,020)</option>
        <option value="43360">Stage 12 (₹43,360)</option>
        <option value="45700">Stage 13 (₹45,700)</option>
        <option value="48040">Stage 14 (₹48,040)</option>
        <option value="50380">Stage 15 (₹50,380)</option>
        <option value="52720">Stage 16 (₹52,720)</option>
        <option value="55060">Stage 17 (₹55,060)</option>
        <option value="57400">Stage 18 (₹57,400)</option>
        <option value="61800">Stage 19 (₹61,800)</option>
        <option value="64480">Stage 20 (₹64,480)</option>
        <option value="67160">Stage 21 (₹67,160)</option>
        <option value="69640">Stage 22 (₹69,640)</option>
        <option value="72520">Stage 23 (₹72,520)</option>
        <option value="75200">Stage 24 (₹75,200)</option>
        <option value="77880">Stage 25 (₹77,880)</option>
        <option value="80560">Stage 26 (₹80,560)</option>
        <option value="83240">Stage 27 (₹83,240)</option>
        <option value="85920">Stage 28 (₹85,920)</option>
        <option value="88600">Stage 29 (₹88,600)</option>
        <option value="91280">Stage 30 (₹91,280)</option>
        <option value="93960">Stage 31 (₹93,960)</option>
      </select>
      <label htmlFor="da-rate" className="fw-bold mt-3 mb-2">
        DA Rate (in %):
      </label>{" "}
      {/* Label change */}
      <input
        type="number" // Ensure type is "number"
        step="0.01" // Allow decimal values
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
