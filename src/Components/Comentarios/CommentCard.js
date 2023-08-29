import React from "react";

const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <h3>{comment.Nombre}</h3>
      <hr className="divider" />
      <p>{comment.Deseo}</p>
    </div>
  );
};

export default CommentCard;
