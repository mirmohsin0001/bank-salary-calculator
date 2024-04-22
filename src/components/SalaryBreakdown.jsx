import React from "react";

function SalaryBreakdown({ basicSalary, daRate }) {
  const specialPay = 1970;

  const DA = isNaN(basicSalary) ? 0 : (basicSalary + specialPay) * daRate; // Handle potential NaN value

  const TA = 850;
  const daOnTa = daRate * TA;

  const specialGradeAllowance = (26.5 / 100) * basicSalary;
  const daOnSpecialGradeAllowance = daRate * specialGradeAllowance;

  const daOnSpecialPay = specialPay * daRate;
  const HRA = (10.25 / 100) * (basicSalary + specialPay + daOnSpecialPay); // HRA is 10.25% of basic salary

  const grossSalary =
    basicSalary +
    specialPay +
    DA +
    HRA +
    specialGradeAllowance +
    daOnSpecialGradeAllowance +
    TA +
    daOnTa;

  const nps = (10 / 100) * (basicSalary + DA + specialPay);

  const netSalary = grossSalary - nps;

  return (
    <>
      <div className="mt-3">
        {/* <h2 className="display-6 fst-italic">Salary Breakdown</h2> */}

        <p className="mb-0">
          Basic Pay:<span className="float-end"> {basicSalary.toFixed(0)}</span>
        </p>
        <p className="mb-0">
          Special Pay:<span className="float-end">{specialPay.toFixed(0)}</span>
        </p>
        <p className="mb-0">
          DA:<span className="float-end"> {DA.toFixed(0)}</span>
        </p>
        <p className="mb-0">
          TA: <span className="float-end">{(TA + daOnTa).toFixed(0)}</span>
        </p>
        <p className="mb-0">
          SGA:{" "}
          <span className="float-end">
            {(specialGradeAllowance + daOnSpecialGradeAllowance).toFixed(0)}
          </span>
        </p>
        <p className="mb-0">
          HRA: <span className="float-end">{HRA.toFixed(0)}</span>
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

      <div className="mt-5 pb-5">
        <p className="text-muted fst-italic pb-5">
          DA calculated @ {(daRate * 100).toFixed(2)}%, HRA @ 10.25%, SGA @
          26.5% and NPS @ 10% of (Basic + DA)
        </p>
      </div>
    </>
  );
}

export default SalaryBreakdown;
