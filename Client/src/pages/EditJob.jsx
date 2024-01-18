import { useParams, useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch";

export const loader = async () => {
  console.log(id);

  try {
    await customFetch.get("/jobs/:id");
    return null;
  } catch (error) {
    return error;
  }
};
const EditJob = () => {
  const { id } = useParams();
  console.log(id);

  return <h1>EditJob</h1>;
};
export default EditJob;
