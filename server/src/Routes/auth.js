import express from "express";
import User from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = new express.Router();

router.post("/register", async (req, res) => {
  try {
    const { user_name, password } = req.body;

    if (!(user_name && password)) {
      res.status(400).send("All input is required");
    }

    const oldUser = await User.findOne({ user_name });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    var encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      user_name: user_name.toLowerCase(),
      password: encryptedPassword,
    });

    const token = jwt.sign(
      { user_id: user._id, user_name },
      process.env.TOKEN_KEY,
      {},
    );
    user.token = token;

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { user_name, password } = req.body;

    if (!(user_name && password)) {
      res.status(400).send("All input is required");
    }
    const user = await User.findOne({ user_name });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, user_name },
        process.env.TOKEN_KEY,
        {},
      );

      user.token = token;

      res.status(200).json(user);
    } else res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
});

export default router;
