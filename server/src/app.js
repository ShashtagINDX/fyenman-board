import express from "express";
import cors from "cors";
import verifyToken from "./middleware/verifyToken.js";
import AuthRoutes from "./Routes/auth.js";
import TopicRoutes from "./Routes/topic.js";
import Topic from "./model/topic.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(AuthRoutes);
app.use(TopicRoutes);

app.post("/user", verifyToken, async (req, res) => {
  const topics = await Topic.find({ user_name: req.user.user_name });
  res.status(200).send({ user_name: req.user.user_name, topics });
});

app.use("*", (req, res) => res.status(404).json({ error: "Route not found" }));

export default app;
