import React from "react";
import image0 from "../imaged/image0.jpeg"
import image1 from "../imaged/image1.jpeg"



function Main() {
  return (
    <div>
      <div class="about" id="about">
        <div class="container">
          <div class="profile-img">
            <img src={image0} alt="image0"/>
          <div class="about-details"></div>
            <div class="about-heading">
              <h1>About</h1>
              <h4>Myself</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
              ipsam, totam nostrum assumenda, culpa blanditiis cumque inventore
              magnam doloremque dicta nam veritatis facere? Sed error qui hic
              ipsum rerum soluta?culpa blanditiis cumque inventore magnam
              doloremque dicta nam veritatis facere?
            </p>
          </div>
        </div>
      </div>
      <div class="skills" id="skills">
        <div class="container">
          <div class="div-heading">
            <h1>Skills</h1>
            <h4>Tech Stack</h4>
          </div>
          <div class="my-skills">
            <div class="skill">
              <div class="icon-container">
                <i class="fas fa-database"></i>
              </div>
              <h1>Mongo DB</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
              </p>
            </div>
            <div class="skill">
              <div class="icon-container">
                <i class="fas fa-server"></i>
              </div>
              <h1>Express</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
              </p>
            </div>
            <div class="skill">
              <div class="icon-container">
                <i class="fas fa-layer-group"></i>
              </div>
              <h1>React</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
              </p>
            </div>
            <div class="skill">
              <div class="icon-container">
                <i class="fas fa-layer-group"></i>
              </div>
              <h1>NodeJS</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
              </p>
            </div>
          </div>


          <div class="project" id="project">
     
          <h1>Projects</h1>
          <h4>Check Out My Work</h4>
        </div>
        <div class="project-item">
          <div class="project-img has-margin-right">
          <img src={image1} alt="image1"/>
          </div>
          <div class="project-description">
            <h4>Park Finder</h4>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores dicta maxime obcaecati assumenda, ullam vero mollitia,
              tenetur quia, et dolorem odit voluptate earum magni libero
              deleniti. Quod vitae repellat consequuntur. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Unde eos officiis at minus esse
              nostrum deserunt consequuntur tempore harum incidunt, minima,
              animi aspernatur, quam quisquam blanditiis. Non quia eligendi
              minima!
            </div>
            {/* <a href="#" class="cta">View Details</a> */}
          </div>


          <div class="project-item">
          <div class="project-description has-margin-right">
            <h4>Movie Bucket List</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores dicta maxime obcaecati assumenda, ullam vero mollitia,
              tenetur quia, et dolorem odit voluptate earum magni libero
              deleniti. Quod vitae repellat consequuntur. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Unde eos officiis at minus esse
              nostrum deserunt consequuntur tempore harum incidunt, minima,
              animi aspernatur, quam quisquam blanditiis. Non quia eligendi
              minima!
            </p>
            {/* <a href="#" class="cta">View Details</a> */}
          </div>
          <div class="project-img">
          <img src={image1} alt="image1"/>
          </div>
          
          <div class="project-item">
          <div class="project-description has-margin-right">
            <h4>Movie Bucket List</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores dicta maxime obcaecati assumenda, ullam vero mollitia,
              tenetur quia, et dolorem odit voluptate earum magni libero
              deleniti. Quod vitae repellat consequuntur. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Unde eos officiis at minus esse
              nostrum deserunt consequuntur tempore harum incidunt, minima,
              animi aspernatur, quam quisquam blanditiis. Non quia eligendi
              minima!
            </p>
            {/* <a href="#" class="cta">View Details</a> */}
          </div>
          {/* <div class="project-img"> */}
          <img src={image1} alt="image1"/>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
