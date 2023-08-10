import React, { useState } from "react";
import { FaCheckCircle, FaThumbsDown } from "react-icons/fa"; // Import icons
import TuitStats from "./tuitstats";
import { deleteTuitThunk, updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

const TuitItem = ({ tuit }) => {
  const [liked, setLiked] = useState(tuit.liked);
  const [likes, setLikes] = useState(tuit.likes);
  const [disliked, setDisliked] = useState(false);
  const [dislikes, setDislikes] = useState(tuit.dislikes);

  const handleLikeToggle = () => {
    const newLikedState = !liked;

    if (newLikedState) {
      setLikes((prevLikes) => prevLikes + 1);
    } else {
      setLikes((prevLikes) => prevLikes - 1);
    }

    setLiked(newLikedState);

    dispatch(updateTuitThunk({ ...tuit, likes: newLikedState ? likes + 1 : likes - 1 }));
  };

  const handleDislikeToggle = () => {
    const newDislikedState = !disliked;

    if (newDislikedState) {
      setDislikes((prevDislikes) => prevDislikes + 1);
    } else {
      setDislikes((prevDislikes) => prevDislikes - 1);
    }

    setDisliked(newDislikedState);

    dispatch(updateTuitThunk({ ...tuit, dislikes: newDislikedState ? dislikes + 1 : dislikes - 1 }));
  };

  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
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
            alt="User Avatar"
          />
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>{tuit.username}</span>
          <span style={{ marginLeft: "5px", marginRight: "5px" }}>{tuit.handle}</span>
          <FaCheckCircle style={{ color: "#1da1f2", fontSize: "14px", marginLeft: "4px" }} />
          <span style={{ fontSize: "12px", color: "#888" }}>&#8226;</span>
          <span style={{ fontSize: "14px", color: "#888", marginRight: "5px" }}>{tuit.time}</span>
          <AiOutlineClose
            style={{ fontSize: "20px", cursor: "pointer", marginLeft: "auto" }}
            onClick={() => deleteTuitHandler(tuit._id)}
          />
        </div>
        <span style={{ fontWeight: "bold", marginRight: "5px" }}>{tuit.username}</span>
        <div className="tuit-content">{tuit.tuit}</div>
        <TuitStats
          replies={tuit.replies}
          retuits={tuit.retuits}
          likes={likes}
          liked={liked}
          onLikeToggle={handleLikeToggle}
          dislikes={dislikes}
          disliked={disliked}
          onDislikeToggle={handleDislikeToggle}
        />
      </div>
    </li>
  );
};

export default TuitItem;
