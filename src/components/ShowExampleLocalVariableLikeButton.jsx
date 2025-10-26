"use client";

const LocalLike = () => {
  let likes = 1;

  return (
    // we're modifying a regular variable (likes), so React doesn’t detect a change and doesn’t re-render the button.
    <button
      onClick={() => {
        likes = likes + 1;
        console.log(likes);
      }}
    >
      🔥 Like
      {likes > 1 ? "s " : ""}
      {likes > 0 && likes}
    </button>
  );
};

export default LocalLike;
