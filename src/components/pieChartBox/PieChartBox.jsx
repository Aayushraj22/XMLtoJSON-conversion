import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";
import { useSelector } from "react-redux";

function PieChartBox() {

  const state = useSelector(state => state.graph)
  let data = state.genderRatio

  return (
    <div className="pieChartBox">
      <h1>Gender Ratio</h1>
      <div className="chart">
        <ResponsiveContainer
          width="99%"
          height={300}
        >
          <PieChart>
            <Tooltip 
                contentStyle={{background:'white', borderRadius: '2px'}}
                animationDuration={1500}
            />

            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item, index) => (
                <Cell key={index} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="options">
        {data.map((item, i) => (
          <div className="option" key={i}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name} </span>
            </div>
            <span>{item.value} </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieChartBox;
