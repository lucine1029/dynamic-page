import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <main>
        <section class="main-content" id="mainColor">
          <div class="main-container-Home">
            <div class="left-container">
              <h1 id="title">Jing Zhang</h1>
              <h2 id="subtitle">
                <span>Fullstack .NET Developer Student</span>
              </h2>
              <p>
                <br />
                <p>
                  <strong>Phone </strong>073-914 1272
                </p>
                <br />
                <p>
                  <strong>Email </strong>jing.zhang@chasacademy.se
                </p>
                <br />
                <p>
                  <strong>Address </strong>Sankt Eriksplan 76, 113 20, Stockholm
                </p>
              </p>
              <div class="action-links">
                <a
                  href="https://www.linkedin.com/in/jing-zhang-bb45b5a9/"
                  class="key-links"
                >
                  LinkedIn
                </a>
                <a href="https://github.com/lucine1029" class="key-links">
                  GitHub
                </a>
                <a href="./2024LIA_CV_Net_Jing.pdf">DOWNLOAD CV</a>
              </div>
            </div>
            <div class="right-container">
              <div class="image">
                <a href="Portfolio.html">
                  <img
                    id="Homepage-photo"
                    src="images/Homepage/Jing3.png"
                    alt="profile"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
