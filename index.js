import express from "express";
import mongoose from "mongoose";
import postRouter from "./router.js";
import fileUpload from "express-fileupload";
import { config } from "dotenv";

config();

const DB_URL =
  "mongodb+srv://psyhodelhs:ZZxzIxCuMxvRokFb@cluster0.oxzzmju.mongodb.net/mongo-base?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}))

app.use("/api", postRouter);
const startApp = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(`Сервер работает на ${PORT} порте`));
  } catch (e) {
    console.log(e.message);
  }
};

startApp();

// const start = async () => {
//   try {
//     await client.connect();
//     console.log("Подключение было установлено");
//     await client.db().createCollection("users");
//     const users = client.db().collection("users");
//     await users.insertOne({ name: "ulbi tv", age: 21 });
//     const user = await users.findOne({ age: 21 });
//     console.log(user);
//   } catch (e) {
//     console.log(e);
//   }
// };
// start();
