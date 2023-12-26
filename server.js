import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import { nanoid } from "nanoid";
const app = express();
const port = process.env.PORT || 5100;

let jobs = [
  { id: nanoid(), company: "apple", position: "front-end" },
  { id: nanoid(), company: "google", position: "back-end" },
];

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

// GET ALL JOBS
app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({
    status: "success",
    jobs,
  });
});

// CREATE JOB
app.post("/api/v1/jobs", (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({
      status: "error",
      message: "Please provide company and position",
    });
  }
  const id = nanoid(10);
  const job = { id, company, position };
  jobs.push(job);
  res.status(200).json({
    status: "success",
    job,
  });
});

// GET SINGLE JOB
app.get("/api/v1/jobs/:id", (req, res) => {
  const { id } = req.params;

  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({
      status: "error",
      message: `There is no job with the id of ${id}`,
    });
  }

  status: "error",
    res.status(200).json({
      status: "success",
      job,
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
