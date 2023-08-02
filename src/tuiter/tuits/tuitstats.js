import React from "react";
import { FaComment, FaRetweet, FaHeart, FaChartBar, FaShare } from "react-icons/fa";

const TuitStats = ({ replies, retuits, likes, onLikeToggle, liked }) => {
  const handleLikeClick = () => {
    onLikeToggle(!liked);
  };

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
        {liked ? <FaHeart style={heartLikedStyle} /> : <FaHeart style={heartUnlikedStyle} />}
        <span>{likes}</span>
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

export default TuitStats;
