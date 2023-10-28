import "./topbox.scss";
import { topDealUsers } from "../../data";

function Topbox() {
  return (
    <div className="topbox">
      <h1>Top deals</h1>
      <div className="list">
        {topDealUsers.map((item) => (
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
