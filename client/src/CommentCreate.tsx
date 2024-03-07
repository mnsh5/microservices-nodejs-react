import axios from "axios";
import { useState } from "react";

import { Props } from "./global";

export const CommentCreate: React.FC<Props> = ({ postId }) => {
  const [content, setContent] = useState<string>("");
  

  const handleSubmit = async  (e: React.FormEvent) => {
    e.preventDefault(); 
    try {
      await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
        content,
      });
      setContent("");
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

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
    </div>
  );
};
