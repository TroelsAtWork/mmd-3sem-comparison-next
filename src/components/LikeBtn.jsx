"use client";
import { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  return (
    <button onClick={() => setLikes(likes + 1)}>
      {/* The returned value from the ternary operation is concatenated into the string */}
      🔥 Like{likes > 1 ? "s" : ""} {likes}
    </button>
  );
};

export default LikeButton;
