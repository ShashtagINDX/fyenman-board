import { Schema, model } from "mongoose";

const topicSchema = new Schema({
  user_id: String,
  topic: String,
  tokens: [
    {
      string: String,
      understanding: Number,
    },
  ],
  understandingPercent: Number,
});

export default model("Topic", topicSchema);
