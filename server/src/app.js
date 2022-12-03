import express from "express";
import cors from "cors";
import verifyToken from "./middleware/verifyToken.js";
import AuthRoutes from "./Routes/auth.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(AuthRoutes);

app.post("/welcome", verifyToken, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

app.use("*", (req, res) => res.status(404).json({ error: "Route not found" }));

export default app;
