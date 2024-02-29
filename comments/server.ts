import express, { Request, Response } from "npm:express@^4.17";
import * as cors from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { randomBytes } from "https://deno.land/std@0.91.0/node/crypto.ts";

const app = express();
const PORT = 5001;

app.use(express.json());
app.use(cors())

const commentsByPostId = {};

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
