import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! We're</h2>
            <h1>
              DEVCORE
              <br />
              <span>DEVELOPMENT</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Creative Agency of </h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Designer and </div>
              <div className="landing-h2-2">Developer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Developer and </div>
              <div className="landing-h2-info-1">Designer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
