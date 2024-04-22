import React from 'react';

function SalaryBreakdown({ basicSalary, daRate }) {
  const DA = isNaN(basicSalary) ? 0 : basicSalary * daRate; // Handle potential NaN value
  const HRA = basicSalary * 0.1025; // HRA is 10.25% of basic salary
  const netSalary = basicSalary + DA + HRA;

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h2>Salary Breakdown</h2>
        <p>Basic Salary: ₹{basicSalary.toFixed(2)}</p>
        <p>Dearness Allowance (DA): ₹{DA.toFixed(2)}</p>
        <p>House Rent Allowance (HRA): ₹{HRA.toFixed(2)}</p>
        <p>Net Salary: ₹{netSalary.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default SalaryBreakdown;
