import express, { Request, Response } from "express";
import cors from "cors"
import { randomBytes } from "crypto";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

const posts: { [key: string]: any } = {};

app.get("/", (_req: Request, res: Response) => {
  res.send("Welcome to the Post API!");
});

app.get("/posts", (_req: Request, res: Response) => {
  res.send(posts);
});

app.post("/posts", (req: Request, res: Response) => {
  const id = randomBytes(4).toString("hex")
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };
  res.status(201).send(posts[id]);
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}/`);
});
