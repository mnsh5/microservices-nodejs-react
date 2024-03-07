import axios from "axios";
import React, { useEffect, useState } from "react";

import { Props } from "./global";

export interface Comment {
  id: string;
  content: string;
}

export const CommentList: React.FC<Props> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  const getData = async () => {
    try {
      const res = await axios.get<Comment[]>(
        `http://localhost:4001/posts/${postId}/comments`
      );
      setComments(res.data);
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [postId]);

  const renderedComments = comments.map(({ id, content }) => {
    return <li key={id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
