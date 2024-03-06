import express, { Request, Response } from "express";
import cors from "cors"
import { randomBytes } from "crypto";

import { CommentsByPostId } from "./interfaces/global";

const app = express();
const PORT = 4001;

app.use(express.json());
app.use(cors());


const commentsByPostId: CommentsByPostId = {};

app.get("/", (_req: Request, res: Response) => {
  res.send("Welcome to the Comments API!");
});

app.get("/posts/:id/comments", (req: Request, res: Response) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", (req: Request, res: Response) => {
  const commentId = randomBytes(4).toString("hex");

  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content });
  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}/`);
});
