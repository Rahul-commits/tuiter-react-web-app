import React from "react";
import { FaCheckCircle, FaThumbsDown } from "react-icons/fa";
const TuitSummaryItem = (
 {
   tuit = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
     "image": "tesla.png"
   }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-10">
     <span style={{ fontWeight: "bold", marginRight: "5px" }}>{tuit.username}</span>
          <span style={{ marginLeft: "5px", marginRight: "5px" }}>{tuit.handle}</span>
          <FaCheckCircle style={{ color: "#1da1f2", fontSize: "14px", marginLeft: "4px" }} />
          <span style={{ fontSize: "12px", color: "#888" }}>&#8226;</span>
          <span style={{ fontSize: "14px", color: "#888", marginRight: "5px" }}>{tuit.time}</span>
     </div>
     
     <div className="col-2">
       <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`}/>
     </div>
     <span style={{ fontWeight: "bold", marginRight: "5px" }}>{tuit.title}</span>
     <div className="tuit-content">{tuit.tuit}</div>
   </div>
  </li>
 );
};
export default TuitSummaryItem;

