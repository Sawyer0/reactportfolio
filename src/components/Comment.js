import React from "react";

function Footer() {
  return (
   <div>
       <div class="contact" id="contact">
      <div class="container">
        <div class="div-heading">
          <h1>Contact</h1>
          <h4>Let's get in touch!</h4>
        </div>
        <div class="social-media">
          <ul class="nav-list">
            <li>
              {/* <a href="#" class="icon-link">
                <i class="fab fa-github-square"></i>
              </a>
              <a href="#" class="icon-link">
                <i class="fab fa-linkedin-square"></i>
              </a> */}
            </li>
          </ul>
        </div>
        <form action="">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name...."
            required
          />
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email...."
            required
          />
          <label for="subject">Message</label>
          <textarea name="subject" id="subject" cols="10" rows="10"></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
   </div>
  );
}

export default Footer;