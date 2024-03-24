import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Projects from "../components/Projects";

const PortfolioPage = () => {
  return (
    <div>
      <main>
        <section class="main-content">
          <div class="portfolio">
            <h1 class="title" id="titleP">
              My Portfolio
            </h1>
            <p class="subtitle" id="subtitleP">
              <strong>HELLO, </strong>Welcome to my work collection.
            </p>
            <Projects />
          </div>
        </section>
      </main>
    </div>
  );
};

export default PortfolioPage;
