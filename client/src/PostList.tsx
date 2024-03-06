import axios from "axios";
import { useEffect, useState } from "react";

export const PostList = () => {
  const [posts, setPosts] = useState<{
    [key: string]: { id: string; title: string; content: string };
  }>({});

  const handlePost = async () => {
    try {
      const res = await axios.get("http://localhost:4000/posts");
      setPosts(res.data);
    } catch (error) {
      console.error("Error al obtener los posts:", error);
    }
  };

  useEffect(() => {
    handlePost();
  }, [posts]);

  const renderedPosts = Object.values(posts).map(({id, title}) => {
    return (
      <div
        className="container mx-auto bg-white shadow-md rounded-lg w-1/3 p-4 mb-4 border border-pink-500"
        style={{ width: "30%", marginBottom: "20px" }}
        key={id}
      >
        <div className="border-b border-pink-500 mb-4 pb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          {/* <CommentList postId={post.id} />
          <CommentCreate postId={post.id} /> */}
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};
