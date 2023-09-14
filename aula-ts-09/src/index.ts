import express, { json } from "express";
import musicRouter from "./routers/music-router";

const app = express();

app.use(json());
app.use(musicRouter);

app.listen(3000, () => {
  console.log(`Server is up and running on port 3000`);
})
