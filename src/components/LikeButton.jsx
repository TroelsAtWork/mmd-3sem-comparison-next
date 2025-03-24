"use client";
import { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  return (
    <button onClick={() => setLikes(likes + 1)}>
      {/* 🔥 {likes === 0 ? " Like" : likes === 1 ? ` Like ${likes}` : ` Likes ${likes}`} */}
      🔥 {likes > 0 ? `Like${likes > 1 ? "s" : ""} ${likes}` : "Like"}
    </button>
  );
};

export default LikeButton;
