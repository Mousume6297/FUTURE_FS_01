import profile from "../assets/form.jpg";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="hero">

      <div className="hero-left">

        <p className="hero-role">Java Developer • Web Developer</p>

        <h1>
          I'm a{" "}
          <span>
            <TypeAnimation
              sequence={[
                "Java Developer",
                2000,
                "Web Developer",
                2000,
                "Software Developer",
                2000
              ]}
              speed={30}
              repeat={Infinity}
            />
          </span>
        </h1>

        <p className="hero-desc">
          MCA student passionate about software and web development with strong knowledge of Java, SQL, and modern web technologies.
        </p>

        <div className="hero-skills">
          <span>Java</span>
          <span>SQL</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Android</span>
        </div>

        <div className="hero-buttons">

  <a href="#projects" className="btn">
  View Projects
</a>

  <a href="/Mousume_barick_Resume.pdf" download = "Mousume.Barick_Resume.pdf" className="btn-outline">
  Download Resume
</a>

  <a
    href="https://www.linkedin.com/in/mousume-barick-2878ba303/"
    target="_blank"
    rel="noreferrer"
    className="btn-outline"
  >
    LinkedIn
  </a>

</div>

      </div>

      <div className="hero-right">

  <div className="profile-wrapper">
    <img src={profile} alt="Mousume" />
  </div>

</div>

    </div>
  );
}

export default Hero;