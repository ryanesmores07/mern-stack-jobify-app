import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh! Page not found</h3>
          <p>We can't seem to find the page you are looking for</p>
          <Link to="/dashboard">Back home</Link>
        </div>
      </Wrapper>
    );
  }

  console.log(error);
  return (
    <div>
      <h1>Something went wrong</h1>
      <Link to="/">Back home</Link>
    </div>
  );
};
export default Error;
