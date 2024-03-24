import MyInfo from "../assets/data.json";

const CVPage = () => {
  return (
    <div>
      <main>
        <section class="main-content">
          <div class="cv-container">
            <div class="action-links">
              <a
                href="../assets/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                DOWNLOAD CV
              </a>
            </div>

            <div className="education">
              <h2 className="right-title">EDUCATION</h2>
              <div className="timeline">
                {MyInfo.education.map((e) => {
                  return (
                    <>
                      <article className="left-tl-content" key={e.school}>
                        <h5 className="tl-title">{e.school}</h5>
                        <p className="para">{e["time-period"]}</p>
                      </article>

                      <article className="right-tl-content">
                        <h5 className="tl-title-2">{e.subject}</h5>
                        <p className="para">{e.description}</p>
                      </article>
                    </>
                  );
                })}
              </div>
            </div>

            <div className="experience">
              <h2 className="right-title">WORK EXPERIENCE</h2>
              <div className="timeline">
                {MyInfo["work experience"].map((w) => {
                  return (
                    <>
                      <article key={w.workplace}>
                        <h5 className="tl-title">{w.workplace}</h5>
                        <p className="para">{w["time-period"]}</p>
                      </article>

                      <article key={w.workplace}>
                        <h5 className="tl-title-2">{w.jobtitle}</h5>
                        <p className="para">{w["focus-area"]}</p>
                      </article>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CVPage;
