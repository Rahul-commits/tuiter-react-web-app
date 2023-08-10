import React from "react";
import { FaComment, FaRetweet, FaHeart, FaThumbsDown, FaChartBar, FaShare } from "react-icons/fa";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStats = ({ replies, retuits, likes, dislikes, onLikeToggle, liked, onDislikeToggle, disliked }) => {
  const handleLikeClick = () => {
    onLikeToggle(!liked);
  };

  const handleDislikeClick = () => {
    onDislikeToggle(!disliked);
  };

  const dispatch = useDispatch();

  return (
    <div style={tuitStatsContainerStyle}>
      <button onClick={handleLikeClick} style={actionStyle}>
        <FaComment />
        <span>{replies}</span>
      </button>
      <button onClick={handleLikeClick} style={actionStyle}>
        <FaRetweet />
        <span>{retuits}</span>
      </button>
      <button onClick={handleLikeClick} style={actionStyle}>
        {liked ? (
          <FaHeart style={heartLikedStyle} />
        ) : (
          <FaHeart style={heartUnlikedStyle} />
        )}
        <span>{likes}</span>
      </button>
      <button onClick={handleDislikeClick} style={actionStyle}>
        {disliked ? (
          <FaThumbsDown style={dislikeActiveStyle} />
        ) : (
          <FaThumbsDown style={dislikeInactiveStyle} />
        )}
        <span>{dislikes}</span>
      </button>
      <button style={actionStyle}>
        <FaChartBar />
        <span>24.3k</span>
      </button>
      <button style={actionStyle}>
        <FaShare />
      </button>
    </div>
  );
};

const tuitStatsContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "12px",
};

const actionStyle = {
  display: "flex",
  alignItems: "center",
  color: "#888",
  fontSize: "14px",
  gap: "2px",
  border: "none",
  background: "transparent",
  cursor: "pointer",
};

const heartLikedStyle = {
  fontSize: "16px",
  color: "red",
};

const heartUnlikedStyle = {
  fontSize: "16px",
};

const dislikeActiveStyle = {
  fontSize: "16px",
  color: "blue", // Adjust the color for an active dislike
};

const dislikeInactiveStyle = {
  fontSize: "16px",
  color: "#888", // Adjust the color for an inactive dislike
};

export default TuitStats;
