import axios from "axios";
import { useEffect, useState } from "react";

import { Props } from "./global";

export const CommentCreate: React.FC<Props> = ({ postId }) => {
  const [content, setContent] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleSubmit = async  (e: React.FormEvent) => {
    e.preventDefault(); 
    try {
      await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
        content,
      });
      setContent("");
      setSuccessMessage("Comment added successfully!");
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000); // Tiempo en milisegundos para que el mensaje desaparezca (3 segundos)
      return () => clearTimeout(timer); // Limpia el temporizador al desmontar el componente
    }
  }, [successMessage]);

  return (
    <div className="container mx-auto p-4">
      <form
        className="bg-pink-200 rounded-lg p-8 shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="content"
            className="text-pink-800 font-bold mb-2 block"
          >
            New Comment
          </label>
          <input
            className="w-full px-4 py-2 bg-white text-pink-900 rounded-md focus:outline-none focus:bg-pink-100 focus:border-pink-300"
            placeholder="Enter your text here..."
            type="text"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="bg-pink-300 hover:bg-pink-400 text-pink-800 font-bold py-2 px-4 rounded-md">
          Submit
        </button>
      </form>
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mt-4 rounded-md" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> {successMessage}</span>
        </div>
      )}
    </div>
  );
};
