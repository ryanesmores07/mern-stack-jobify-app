import { Router } from "express";
import {
  getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";
import {
  validationJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
const router = Router();

router.route("/").get(getAllJobs).post(validationJobInput, createJob);
router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(validationJobInput, validateIdParam, updateJob)
  .delete(validateIdParam, deleteJob);

export default router;
