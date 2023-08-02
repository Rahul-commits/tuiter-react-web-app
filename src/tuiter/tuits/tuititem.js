import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import TuitStats from "./tuitstats";
import {deleteTuit} from "../reducers/tuits-reducer";
import { useDispatch } from "react-redux";
import { BiX } from "react-icons/bi"; // Import the BiX icon
import { AiOutlineClose } from "react-icons/ai";

const TuitItem = ({ tuit }) => {
  const [liked, setLiked] = useState(tuit.liked);
  const [likes, setLikes] = useState(tuit.likes);

  const handleLikeToggle = (newLikedState) => {
    if (newLikedState) {
      setLikes((prevLikes) => prevLikes + 1);
    } else {
      setLikes((prevLikes) => prevLikes - 1);
    }
    setLiked(newLikedState);
  };
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
  console.log(id)
    dispatch(deleteTuit(id));
  };

  return (
    <li className="list-group-item">
      <div className="tuit-item">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            width={40}
            className="float-start rounded-circle"
            src={`/images/${tuit.image}`}
            style={{ borderRadius: "50%", marginRight: "10px" }}
          />
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>{tuit.userName}</span>
          <FaCheckCircle style={{ color: "#1da1f2", fontSize: "14px", marginLeft: "4px" }} />
          <span style={{ marginLeft: "5px", marginRight: "5px" }}>{tuit.handle}</span>
          <span style={{ fontSize: "12px", color: "#888" }}>&#8226;</span>
          <span style={{ fontSize: "14px", color: "#888", marginRight: "5px" }}>{tuit.time}</span>
           <AiOutlineClose
                      style={{ fontSize: "20px", cursor: "pointer", marginLeft:"auto" }}
                      onClick={() => deleteTuitHandler(tuit._id)}
                    />
        </div>

        <div className="tuit-content">{tuit.title}</div>
        <TuitStats
          replies={tuit.replies}
          retuits={tuit.retuits}
          likes={likes}
          liked={liked}
          onLikeToggle={handleLikeToggle}
        />
      </div>
    </li>
  );
};

export default TuitItem;
