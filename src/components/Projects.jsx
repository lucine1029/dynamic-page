import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Music from "../assets/images/Portfolio/MusicAPI.png";
import Bank from "../assets/images/Portfolio/BankProject.png";
import Ball from "../assets/images/Portfolio/BallGame.png";
import { PacmanLoader } from "react-spinners";
import "../components/project.css";
import Accordion from "react-bootstrap/Accordion";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://api.github.com/users/lucine1029/repos";
  const projectNames = ["Music-API", "Bank-Program", "Ball-Game"];
  const projectImages = {
    "Music-API": Music,
    "Bank-Program": Bank,
    "Ball-Game": Ball,
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const filteredRepos = data
          .filter((repo) => projectNames.includes(repo.name))
          .map((repo) => ({
            ...repo,
            image: projectImages[repo.name] || null,
          }));

        setTimeout(() => {
          setRepos(filteredRepos);
          setIsLoading(false);
        }, 3000);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="loading-content">
        <h3>Please wait, Github projects are loading now...</h3>
        <PacmanLoader color="#36d7b7" size={40} className="spinner" />;
      </div>
    );
  }

  return (
    <>
      <div className="row">
        {repos.map((repo) => {
          return (
            <Card
              style={{
                minHeight: "31rem",
                width: "100%",
                display: "block",
                backgroundImage: `url(${repo.image})`,
                backgroundSize: "cover",
              }}
              className="portfolio-col"
              key={repo.id}
            >
              <Card.Body className="layer">
                <Card.Title>
                  <a href={repo.html_url}>
                    <h3>{repo.name} on github</h3>
                  </a>
                </Card.Title>
              </Card.Body>
              <h2>{repo.name}</h2>
              <Accordion className="accordion">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5>Click me for more information!</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>{repo.description}</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          );
        })}
      </div>
    </>
  );

  //   const projectNames = ["Music-API", "Bank-Program", "Ball-Game"];
  //   const projectImages = {
  //     "Music-API": Music,
  //     "Bank-Program": Bank,
  //     "Ball-Game": Ball,
  //   };

  //   useEffect(() => {
  //     fetuch(url)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const filteredRepos = data
  //           .filter((repo) => projectNames.includes(repo.name))
  //           .slice(0, 3)
  //           .map((repo) => ({
  //             ...repo,
  //             image: projectImages[repo.name] || null,
  //           }));

  //         setTimeout(() => {
  //           setRepos(filteredRepos);
  //           setIsLoading(false);
  //         }, 3000);
  //       });
  //   }, []);

  //   if (isLoading) {
  //     return (
  //       <>
  //         <ClockLoader color="#36d7b7" />
  //         {/* <ClockLoader color="#36d7b7" />;<h3>Github projects are loading...</h3>; */}
  //       </>
  //     );
  //   }

  //   return (
  //     <div>
  //       {repos.map((repo) => {
  //         <Card key={repo.id}>
  //           <Card.Body>
  //             <Card.Title>
  //               <h3>{repo.name}</h3>
  //             </Card.Title>
  //             <Card.Text>
  //               <p>{repo.description}</p>
  //             </Card.Text>
  //             <Button variant="warning">
  //               <Card.Link href={repo.html_url}>See in github</Card.Link>
  //             </Button>
  //           </Card.Body>
  //         </Card>;
  //       })}
  //     </div>
  //   );
}
