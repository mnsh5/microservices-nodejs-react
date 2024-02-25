import express, { Request, Response } from "npm:express@^4.17";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("Welcome to the Post API!");
});


app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}/`);
});