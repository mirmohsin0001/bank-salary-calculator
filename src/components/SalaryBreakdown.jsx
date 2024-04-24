import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

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

  // Chart data
  const chartData = [
    { name: "Basic Salary", value: basicSalary, color: "#0088FE" },
    { name: "SGA", value: specialGradeAllowance, color: "#00C49F" },
    { name: "DA", value: DA, color: "#9966FF" },
    { name: "HRA", value: HRA, color: "#FF8042" },
    { name: "Special Pay", value: specialPay, color: "#FF6666" },
    { name: "TA", value: TA, color: "#FFBB28" },
  ];

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

      <div className="my-5 ">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
              // labelLine={false}
              paddingAngle={5}
              innerRadius={50}
              label={(entry) => entry.value.toFixed(0)}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>

            <Tooltip formatter={(value) => value.toFixed(0)} />

            <Legend
              align="center"
              verticalAlign="bottom"
              layout="horizontal"
              iconSize={10}
              wrapperStyle={{ fontSize: "10px" }}
              formatter={(value) => (
                <span style={{ color: "black" }}>{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-0 pb-5">
        <p className="text-muted fst-italic pb-5">
          DA calculated @ {(daRate * 100).toFixed(2)}%, HRA @ 10.25%, SGA @
          26.5% and NPS @ 10% of (Basic + DA)
        </p>
      </div>
    </>
  );
}

export default SalaryBreakdown;
