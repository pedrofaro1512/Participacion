import React, { useState } from "react";
import db from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import "firebase/firestore";

const CommentForm = ({ addComment }) => {
  const [name, setName] = useState("");
  const [newComment, setNewComment] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newComment.trim() !== "" && name.trim() !== "") {
      addComment({ name, comment: newComment });
      setName("");
      setNewComment("");
    }
    console.log(`Nombre: ${name} Comentario: ${newComment}`);

    try {
      const docRef = await addDoc(collection(db, "comentario"), {
        Nombre: name,
        Deseo: newComment,
      });
    } catch (event) {
      console.error("Error al agregar tarea");
    }
  };

  return (
    <div className="comment-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <textarea
          rows="4"
          cols="50"
          placeholder="Déjanos tus mejores deseos..."
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
        />
        <button type="submit">Agregar comentario</button>
      </form>
    </div>
  );
};

export default CommentForm;
