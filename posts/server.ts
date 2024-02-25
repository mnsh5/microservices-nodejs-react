import express, { Request, Response } from "npm:express@^4.17";
import { v4 } from 'https://deno.land/std/uuid/mod.ts';

const app = express();
const PORT = 5000;

app.use(express.json());

const posts = {};

app.get("/", (_req: Request, res: Response) => {
  res.send("Welcome to the Post API!");
});

app.get("/posts", (_req: Request, res: Response) => {
  res.send(posts);
});

app.post("/posts", (req: Request, res: Response) => {
  const id = v4.generate();
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
