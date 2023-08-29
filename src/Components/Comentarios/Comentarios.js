import React, { useEffect, useState } from "react";
import db from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import "firebase/firestore";
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";

import "./Comentarios.css";

const Comentarios = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const datos = await getDocs(collection(db, "comentario"));
        const commentList = datos.docs.map((doc) => doc.data());
        setComments(commentList);
      } catch (error) {
        console.error("Error al obtener comentarios", error);
      }
    };
    obtenerDatos();
  }, [comments]);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="container-comentarios">
      <div className="title-comentarios">
        <span>Déjanos tus mejores deseos</span>
      </div>
      <div className="comment-list">
        {comments.map((comment, index) => (
          <CommentCard key={index} comment={comment} />
        ))}
      </div>
      <div className="comment-container">
        <CommentForm addComment={addComment} />
      </div>
    </div>
  );
};

export default Comentarios;
