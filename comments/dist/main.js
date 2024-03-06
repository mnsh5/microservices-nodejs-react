"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const crypto_1 = require("crypto");
const middleware_1 = require("./middleware");
const app = (0, express_1.default)();
const PORT = 4001;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(middleware_1.allowAPI);
const commentsByPostId = {};
app.get("/", (_req, res) => {
    res.send("Welcome to the Comments API!");
});
app.get("/posts/:id/comments", (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});
app.post("/posts/:id/comments", (req, res) => {
    const commentId = (0, crypto_1.randomBytes)(4).toString("hex");
    const { content } = req.body;
    const comments = commentsByPostId[req.params.id] || [];
    comments.push({ id: commentId, content });
    commentsByPostId[req.params.id] = comments;
    res.status(201).send(comments);
});
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}/`);
});
