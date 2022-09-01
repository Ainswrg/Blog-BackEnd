import express from "express";
import cors from "cors";

import mongoose from "mongoose";
import IndexRoute from "./routers/index.js";

mongoose
  .connect(
    "mongodb+srv://ainswrg:ainswrg@cluster0.rbbcvgd.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB OK"))
  .catch((err) => console.log(`DB Error: ${err}`));

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", IndexRoute);
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`Server listening on ${PORT}`);
});
