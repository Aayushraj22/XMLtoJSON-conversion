import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barChartBox.scss";

// type Props = {
//   title: string;
//   dataKey: string;
//   color: string;
//   chartData: object[];
// };

function BarChartBox({title, dataKey, color, chartData}) {
  // console.log(props);
  return (
    <div className="barChartBox">
      <h1>{title} </h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3347", borderRadius: '5px' }}
              labelStyle={{ display: "none" }}
              cursor={{fill: 'none'}}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarChartBox;
