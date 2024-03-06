import axios from "axios";
import React, { useState } from "react";

export const PostCreate = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("entro")
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/posts", {
        title,
      });
      setTitle("");
      console.log(title)
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <>
      <div className="mt-4">
        <form className="" onSubmit={handleSubmit}>
          <label className="block" htmlFor='title'>
            <span className="text-gray-700">Title</span>
            <input
              className="form-input mt-1 block w-1/2 border-current outline-pink-500"
              placeholder="Post"
              type='text'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
