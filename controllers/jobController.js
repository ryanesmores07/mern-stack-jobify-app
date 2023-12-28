import Job from "../models/jobModel.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customErrors.js";

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find();
  res.status(StatusCodes.OK).json({
    status: "success",
    jobs,
  });
};

export const createJob = async (req, res) => {
  const { company, position } = req.body;
  const job = await Job.create({ company, position });

  res.status(StatusCodes.CREATED).json({
    status: "success",
    job,
  });
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);

  if (!job) {
    throw new NotFoundError(`no job with id : ${id}`);
  }

  res.status(StatusCodes.OK).json({
    status: "success",
    job,
  });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const { company, position, jobLocation } = req.body;

  const updateJob = await Job.findByIdAndUpdate(
    id,
    { company, position, jobLocation },
    { new: true }
  );

  if (!updateJob) {
    throw new NotFoundError(`no job with id : ${id}`);
  }

  res.status(StatusCodes.OK).json({
    status: "success",
    updateJob,
  });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await Job.findByIdAndDelete(id);

  if (!removedJob) {
    throw new NotFoundError(`no job with id : ${id}`);
  }

  res.status(StatusCodes.OK).json({
    status: "success",
    message: "Job deleted",
  });
};
