import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae neque tempora quod quas aliquid harum quibusdam, illo,
            odit maiores rerum dolor. Nam vero, ipsam id dolorem deleniti eaque
            placeat aspernatur.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/logo" className="btn ">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
