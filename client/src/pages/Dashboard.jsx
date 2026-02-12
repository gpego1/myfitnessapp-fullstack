import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import "../styles/dashboard.css";

const data = [
  { name: "Jan", peso: 80 },
  { name: "Fev", peso: 78 },
];

export default function Dashboard() {
  return (
    <div className="chart-box">
      <h2>Dashboard</h2>

      <LineChart width={400} height={300} data={data}>
        <Line dataKey="peso" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}
