import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <main>
      <section class="main-content">
        <div class="about-container">
          <div class="title-container">
            <div class="column">
              <h1 class="title">
                Hi <span>, </span>I<span>'</span>m Jing<span>. </span> Nice to
                meet you<span>.</span>
              </h1>
              <p>
                I am an aspiring fullstack .NET developer student with a fervor
                for coding and a penchant for creative pursuits like board
                games. My journey into the world of IT began in early 2022 when
                I enrolled in an online programming course. Currently, I am
                studying at Chas Academy where I'm exploring the possibilities
                in both frontend and backend development. A whole new world has
                opened to me, I would love to learn more and discuss with you!{" "}
                <br />
                <br />
                As a former healthcare analyst, I bring strong logical-thinking,
                problem-solving, and reporting skills to the programming realm.
                Collaboration, clear communication, and effective prioritization
                have always been my keys to success. <br />
                <br />I am eager to contribute my expertise to your projects and
                continue my learning journey in the dynamic field of technology.
                Feel free to reach out—I’m ready to make a positive impact!{" "}
              </p>
            </div>
          </div>
          <div class="skill-container">
            <div class="frontend">
              <div class="icons">
                <i class="ri-markup-line"></i>
              </div>
              <h1>Frontend Developer</h1>
              <p class="description">
                I like to code things from scratch and enjoy bringing simple
                ideas to life in the browerse. <br />
                <br />
              </p>
              <p class="language">Languages I speak:</p>
              <p>HTML, CSS, JavaScript</p>
              <p class="tools">Dev Tools:</p>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>VSCode</li>
                <li>React/Vite</li>
                <li>Node.js</li>
                <li>Bootstrap</li>
                <li></li>
              </ul>
            </div>
            <div class="backend">
              <div class="icons">
                <i class="ri-code-block"></i>
              </div>
              <h1>Backend Developer</h1>
              <p class="description">
                I find joy in weaving the intricate threads of logic,
                transforming abstract ideas into functional systems that power
                the digital world.
              </p>
              <p class="language">Languages I speak:</p>
              <p>C#</p>
              <p class="tools">Dev Tools:</p>
              <ul>
                <li>ASP.NET Core</li>
                <li>Entity Framework</li>
                <li>SQL Server</li>
                <li>MySQL</li>
                <li>Visual Studio</li>
                <li>Microsoft Azure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
