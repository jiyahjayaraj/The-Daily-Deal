const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>

      <div className="project-list">

        {/* Eventora */}
        <div className="project-item">
          <div>
            <h3>Eventora</h3>
            <p>
Eventora is an AI-powered event management platform designed to help users create, manage, and explore events, enhanced with smart, personalized recommendations driven by user behavior and preferences.            </p>

            <span className="tech">
              AI • React • Node.js • MongoDB
            </span>
          </div>

          <div className="icons">
            <a href="https://github.com/jiyahjayaraj/EVENTORA" target="_blank">
              🔗
            </a>
          </div>
        </div>

        {/* Sign Language */}
        <div className="project-item">
          <div>
            <h3>Sign Language Detection</h3>
            <p>
              A machine learning project that detects sign language gestures
              in real-time using computer vision.
            </p>

            <span className="tech">
              Python • OpenCV • ML
            </span>
          </div>

          <div className="icons">
            <a href="https://github.com/KadeejaHibaPT/mini-project" target="_blank">🔗</a>
          </div>
        </div>
          {/* Sign Language */}
        <div className="project-item">
          <div>
            <h3>Sign Language Detection</h3>
            <p>
              A machine learning project that detects sign language gestures
              in real-time using computer vision.
            </p>

            <span className="tech">
              Python • OpenCV • ML
            </span>
          </div>

          <div className="icons">
            <a href="https://github.com/jiyahjayaraj/EVENTORA" target="_blank">🔗</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;