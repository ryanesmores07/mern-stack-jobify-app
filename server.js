import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";

// routers
import jobRouter from "./routes/jobRouter.js";

const app = express();
const port = process.env.PORT || 5100;

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "Data Received", data: req.body });
});

app.use("/api/v1/jobs", jobRouter);

app.use("*", (req, res) => {
  res.status(404).json({
    message: "URL Not Found",
  });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "Something went wrong" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
