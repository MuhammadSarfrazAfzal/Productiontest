import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Founder's career<span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering</h4>
                <h5>University of Rasul</h5>
              </div>
              <h3>EDU</h3>
            </div>
            <p>
              Pursued BS Software Engineering in Mandi Bahauddin, Pakistan.
              Built a strong foundation in modern web engineering, algorithms,
              database systems (MongoDB, MySQL), and agile development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Baberya Tech </h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed and maintained responsive web applications using
              React.js and Next.js. Built scalable UI components, integrated
              RESTful APIs, converted Figma designs to pixel-perfect code, and
              optimized performance with lazy loading and state management.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer</h4>
                <h5>Full-Stack Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing and developing production-grade web applications with
              React, Next.js, Node.js, Express, and MongoDB. Building platforms
              like ContractHubPK, interactive travel apps, and e-commerce solutions
              with clean, maintainable architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
