import "./topbox.scss";
import { useSelector } from "react-redux";
import {StudentLimitedData} from '../../utils/functions'

function Topbox() {
  const state = useSelector(state => state.graph)
  console.log('state: -', state)

  // filter to get name, email, imageurl 
  // console.log('jsonData : ',jsonData.file);
  const data = StudentLimitedData(state)

  // console.log('filter data')


  // console.log("data from topdaeals : ",data);


  return (
    <div className="topbox">
      <h1>Top Students</h1>
      <div className="list">
        {data.slice(0,7).map((item) => (
          <div className="listItem" key={item.id}>
            <div className="user">
              <img src={item.img} alt={item.id} />

              <div className="userTexts">
                <span className="username">{item.username}</span>
                <span className="email">{item.email}</span>
              </div>
            </div>
            <span className="amount">${item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Topbox;
