import "./chartBox.scss";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
} from "recharts";


// type Props = {
//     color: string;
//     icon: string;
//     title: string;
//     number: number | string;
//     dataKey: string;
//     percentage: number;
//     chartData: object[];
// }



function ChartBox({color, icon, title, number, dataKey, percentage, chartData}) {
    
  return (
    <div className="chartBox">
      <div className="textInfo">
        <div className="title">
          <img src={icon} alt="" />
          <span>{title}</span>
        </div>
        <h1>{number}</h1>
        <Link to="/" style={{color: color}}>view all</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={chartData}>
                <Tooltip 
                    contentStyle={{background: 'transparent', border: 'none'}}
                    labelStyle={{display: 'none'}}
                    position={{x: 10, y: 70}}

                />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percentage" style={{color: percentage > 0 ? 'green' : 'tomato'}}>{percentage}%</span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
}

export default ChartBox;
