import Job from "../models/jobModel.js";
import { StatusCodes } from "http-status-codes";

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({
    status: "success",
    jobs,
  });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);

  res.status(StatusCodes.CREATED).json({
    status: "success",
    job,
  });
};

export const getJob = async (req, res) => {
  const job = await Job.findById(req.params.id);

  res.status(StatusCodes.OK).json({
    status: "success",
    job,
  });
};

export const updateJob = async (req, res) => {
  const { company, position, jobLocation } = req.body;

  const updateJob = await Job.findByIdAndUpdate(
    req.params.id,
    { company, position, jobLocation },
    { new: true }
  );

  res.status(StatusCodes.OK).json({
    status: "success",
    updateJob,
  });
};

export const deleteJob = async (req, res) => {
  const removedJob = await Job.findByIdAndDelete(req.params.id);

  res.status(StatusCodes.OK).json({
    status: "success",
    message: "Job deleted",
  });
};
