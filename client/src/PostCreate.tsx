import axios from "axios";
import React, { useState } from "react";



export const PostCreate = () => {
  const [title, setTitle] = useState("");


  const onSubmit = async (e: React.FormEvent<Element>) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/posts", {
      title,
    });
    setTitle("");
  };

  console.log(title);

  return (
    <>
      <div className="mt-4">
        <form className="" onSubmit={onSubmit}>
          <label className="block">
            <span className="text-gray-700">Title</span>
            <input
              className="form-input mt-1 block w-1/2 border-current outline-pink-500"
              placeholder="Post"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </form>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2">
        Submit
      </button>
      <p>{title}</p>
    </>
  );
};
