import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <>
      <div>
        <main>
          <section class="main-content">
            <div class="contact">
              <div class="content">
                <h1>Contact Me</h1>
                <p>
                  I am a fullstack .NET/C# developer student. I am eager to
                  contribute my expertise to your projects and continue my
                  learning journey in the dynamic field of technology. Feel free
                  to reach out!
                </p>
                <p>
                  I am a fullstack .NET/C# developer student. It was my first
                  encounter with Databases, SQL and using EntityFramework and
                  ASP.NET. I am a fullstack .NET/C# developer.{" "}
                </p>
              </div>
              <div class="container">
                <div class="contactInfo">
                  <div class="box">
                    <div class="icons">
                      <i class="ri-map-pin-user-line"></i>
                    </div>
                    <div class="text">
                      <h3>Address</h3>
                      <p>
                        Sankt Eriksplan 76,
                        <br />
                        113 20
                        <br />
                        Stockholm
                      </p>
                    </div>
                  </div>
                  <div class="box">
                    <div class="icons">
                      <i class="fa-solid fa-phone"></i>
                    </div>
                    <div class="text">
                      <h3>Phone</h3>
                      <p>073-914 1272</p>
                    </div>
                  </div>
                  <div class="box">
                    <div class="icons">
                      <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div class="text">
                      <h3>Email</h3>
                      <p>jing.zhang@chasacademy.se</p>
                    </div>
                  </div>
                </div>
                <div class="contactForm">
                  <form action="/save-form-data" method="post">
                    <h2>Send Message</h2>
                    <div class="inputBox">
                      <input type="text" name="" required="required" />
                      <span>Full Name</span>
                    </div>
                    <div class="inputBox">
                      <input type="text" name="" required="required" />
                      <span>Email</span>
                    </div>
                    <div class="inputBox">
                      <textarea
                        required="required"
                        cols="30"
                        rows="7"
                      ></textarea>
                      <span>Type your message...</span>
                    </div>
                    <div class="inputBox">
                      <input type="submit" name="" value="Send" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ContactPage;
