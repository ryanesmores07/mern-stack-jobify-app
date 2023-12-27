import Job from "../models/jobModel.js";

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find();
  res.status(200).json({
    status: "success",
    jobs,
  });
};

export const createJob = async (req, res) => {
  const { company, position } = req.body;
  const job = await Job.create({ company, position });

  res.status(201).json({
    status: "success",
    job,
  });
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);

  if (!job) {
    return res.status(404).json({
      status: "error",
      message: `There is no job with the id of ${id}`,
    });
  }

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
