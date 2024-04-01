import { config } from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./router/router.js";
import connectDB from "./database/conn.js";

const app = express();
config();

// app middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// application port
const PORT = process.env.PORT || 8080;

// routes

app.use("/api", router); // apis

app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error);
  }
});

// start server only when we have valid connection
connectDB()
  .then(() => {
    try {
      app.listen(PORT, () => {
        console.log(`server connected to http://localhost:${PORT}`);
      });
    } catch (error) {
      console.log("Cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection");
  });
