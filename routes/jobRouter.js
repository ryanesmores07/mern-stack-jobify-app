import { Router } from "express";
import {
  getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";
import { validationJobInput } from "../middleware/validationMiddleware.js";
const router = Router();

router.route("/").get(getAllJobs).post(validationJobInput, createJob);
router
  .route("/:id")
  .get(getJob)
  .patch(validationJobInput, updateJob)
  .delete(deleteJob);

export default router;
