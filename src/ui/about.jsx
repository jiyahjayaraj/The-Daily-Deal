const About = () => {
  return (
<section id="about" className="about">
        <h2 className="section-title">
        <span className="number"></span>About Me
      </h2>

      <div className="about-content">
        <p>
          I'm a developer who enjoys turning ideas into real, functional
          applications. I started my journey learning the fundamentals and now
          I'm diving deeper into modern web technologies.
        </p>

        <p className="mt">
          Here are some technologies I've been working with:
        </p>

        <ul className="tech-list">
          <li>React</li>
          <li>MongoDB</li>
          <li>Node.js</li>
          <li>AI</li>
          <li>JavaScript</li>
          <li>Python</li>
        </ul>
      </div>
    </section>
  );
};

export default About;