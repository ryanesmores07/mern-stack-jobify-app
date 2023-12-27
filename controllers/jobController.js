import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), company: "apple", position: "front-end" },
  { id: nanoid(), company: "google", position: "back-end" },
];

export const getAllJobs = async (req, res) => {
  res.status(200).json({
    status: "success",
    jobs,
  });
};

export const createJob = async (req, res) => {
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
};

export const getJob = async (req, res) => {
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
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const { company, position } = req.body;

  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(400).json({
      status: "error",
      message: `There is no job with the id of ${id}`,
    });
  }

  job.company = company;
  job.position = position;

  res.status(200).json({
    status: "success",
    job,
  });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({
      status: "error",
      message: `There is no job with the id of ${id}`,
    });
  }

  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;
  res.status(200).json({
    status: "success",
    message: "Job deleted",
  });
};
