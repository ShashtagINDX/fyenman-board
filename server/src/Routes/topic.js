import express from "express";
import verifyToken from "../middleware/verifyToken.js";

import Topic from "../model/topic.js";

const router = new express.Router();

router.post("/add-topic", verifyToken, async (req, res) => {
  const { topic, tokens } = req.body;
  const { _id: user_id } = req.user;
  const understandingPercent =
    (tokens.reduce((total, data) => {
      return (total += data.understanding);
    }, 0) *
      100) /
    (4 * tokens.length);

  const createdTopic = await Topic.create({
    understandingPercent,
    topic,
    tokens,
    user_id,
  });

  res.status(200).send(createdTopic);
});

export default router;
