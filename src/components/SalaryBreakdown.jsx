import React from "react";

function SalaryBreakdown({ basicSalary, daRate }) {
  const DA = isNaN(basicSalary) ? 0 : basicSalary * daRate; // Handle potential NaN value
  const HRA = basicSalary * 0.1025; // HRA is 10.25% of basic salary
  const specialGradeAllowance = (26.5 / 100) * basicSalary;
  const daOnSpecialGradeAllowance = daRate * specialGradeAllowance;
  const TA = 850;
  const daOnTa = daRate * TA;
  const grossSalary =
    basicSalary +
    DA +
    HRA +
    specialGradeAllowance +
    daOnSpecialGradeAllowance +
    TA +
    daOnTa;

  const nps = (10 / 100) * (basicSalary + DA);

  const netSalary = grossSalary - nps;

  return (
    <>
      <div className="mt-3">
        {/* <h2 className="display-6 fst-italic">Salary Breakdown</h2> */}

        <p className="mb-0">
          Basic Pay:<span className="float-end"> {basicSalary.toFixed(0)}</span>
        </p>
        <p className="mb-0">
          DA:<span className="float-end"> {DA.toFixed(0)}</span>
        </p>
        <p className="mb-0">
          {" "}
          HRA: <span className="float-end">{HRA.toFixed(0)}</span>
        </p>
        <p className="mb-0">
          SGA:{" "}
          <span className="float-end">{specialGradeAllowance.toFixed(0)}</span>
        </p>
        <p className="mb-0">
          TA: <span className="float-end">{TA.toFixed(0)}</span>
        </p>
        <p className="mb-0">
          DA on SGA:{" "}
          <span className="float-end">
            {daOnSpecialGradeAllowance.toFixed(0)}
          </span>
        </p>
        <p className="mb-0">
          DA on TA:<span className="float-end"> {daOnTa.toFixed(0)}</span>
        </p>
        <p className="mb-3 fw-bold">
          Gross Pay: <span className="float-end">{grossSalary.toFixed(0)}</span>
        </p>

        <p className="mb-0">
          NPS: <span className="float-end">{nps.toFixed(0)}</span>
        </p>
        <p className="mb-0 fw-bold">
          Net Pay:<span className="float-end"> {netSalary.toFixed(0)}</span>
        </p>
      </div>

      <div class="mt-5 pb-5">
        <p class="text-muted fst-italic pb-5">
          DA calculated @ {(daRate*100).toFixed(2)}%, HRA @ 10.25%, SGA @ 26.5% and NPS @ 10% of (Basic + DA)
        </p>
      </div>
    </>
  );
}

export default SalaryBreakdown;
