import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Import all Chart.js defaults

function SalaryBreakdown({ basicSalary, daRate }) {
  const specialPay = 1970;

  // Salary calculations
  const DA = isNaN(basicSalary) ? 0 : (basicSalary + specialPay) * daRate;
  const TA = 850 * (1 + daRate);
  const specialGradeAllowance = (26.5 / 100) * basicSalary * (1 + daRate);
  const daOnSpecialPay = specialPay * daRate; //for claculating HRA
  const HRA = (10.25 / 100) * (basicSalary + specialPay + daOnSpecialPay);
  const grossSalary =
    basicSalary + specialPay + DA + HRA + specialGradeAllowance + TA;
  const nps = (10 / 100) * (basicSalary + DA + specialPay);
  const netSalary = grossSalary - nps;

  // Chart data preparation
  const chartData = {
    labels: ["Basic Salary", "SGA", "DA", "HRA", "Special Pay", "TA"],
    datasets: [
      {
        label: "Salary Breakdown",
        data: [basicSalary, specialGradeAllowance, DA, HRA, specialPay, TA],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)", // Red
          "rgba(54, 162, 235, 0.2)", // Blue
          "rgba(255, 206, 86, 0.2)", // Orange
          "rgba(75, 192, 192, 0.2)", // Grey
          "rgba(153, 102, 255, 0.2)", // Purple
          "rgba(255, 159, 64, 0.2)", // Orange-red
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)", // Red
          "rgba(54, 162, 235, 1)", // Blue
          "rgba(255, 206, 86, 1)", // Orange
          "rgba(75, 192, 192, 1)", // Grey
          "rgba(153, 102, 255, 1)", // Purple
          "rgba(255, 159, 64, 1)", // Orange-red
        ],

        borderWidth: 1,
      },
    ],
  };

  // Chart reference
  const chartRef = useRef(null);

  // Render chart using useEffect
  useEffect(() => {
    const myChart = new Chart(chartRef.current, {
      type: "pie",
      data: chartData,
      options: {
        // Optional options for chart customization (refer to Chart.js documentation)
        legend: {
          position: 'right', // Set legend position to 'right'
        },
      },
    });

    // Cleanup function to avoid memory leaks
    return () => {
      myChart.destroy();
    };
  }, []); // Empty dependency array ensures one-time rendering

  return (
    <>
      <div className="mt-3">
        <div className="mt-3">
          <p className="mb-0">
            Basic Pay:
            <span className="float-end"> {basicSalary.toFixed(0)}</span>
          </p>
          <p className="mb-0">
            Special Pay:
            <span className="float-end">{specialPay.toFixed(0)}</span>
          </p>
          <p className="mb-0">
            DA:<span className="float-end"> {DA.toFixed(0)}</span>
          </p>
          <p className="mb-0">
            TA: <span className="float-end">{TA.toFixed(0)}</span>
          </p>
          <p className="mb-0">
            SGA:{" "}
            <span className="float-end">
              {specialGradeAllowance.toFixed(0)}
            </span>
          </p>
          <p className="mb-0">
            HRA: <span className="float-end">{HRA.toFixed(0)}</span>
          </p>
          <p className="mb-3 fw-bold">
            Gross Pay:{" "}
            <span className="float-end">{grossSalary.toFixed(0)}</span>
          </p>

          <p className="mb-0">
            NPS: <span className="float-end">{nps.toFixed(0)}</span>
          </p>
          <p className="mb-0 fw-bold">
            Net Pay:<span className="float-end"> {netSalary.toFixed(0)}</span>
          </p>
        </div>
      </div>

      <div className="w-75 m-auto">
        <canvas ref={chartRef} width="400" height="400"></canvas>
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