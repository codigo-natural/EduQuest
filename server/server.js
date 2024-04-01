import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";

const app = express();

// app middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
config();

// application port
const PORT = process.env.PORT || 8080;

// routes
app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error);
  }
});

app.listen(PORT, () => {
  console.log(`server connected to http://localhost:${PORT}`);
});
