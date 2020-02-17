import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import './LandingPage.css';
import ModalImage from "react-modal-image";

export default function LandingPage(){
  return(
    <React.Fragment>
      <NavBar active="Bio"/>
      <div className="LandingPage">
        <img id="profileImage" alt="Nicholas Cox" src="https://res.cloudinary.com/dvqaajrs0/image/upload/v1578069797/bjkz2zsbktlam8gomk6u.jpg"/>
        <h2>About Me</h2>
        <hr />
        <p>Full-Stack Web Developer leveraging a background in music and customer service to work 
          in harmony with other developers and create positive user experiences. Earned a Bachelor’s 
          Degree in Web Journalism from the University Of Memphis in 2015, and a certificate in Full 
          Stack Web Development from Vanderbilt University in February of 2020,  specializing in React, 
          NodeJS, Express, and MongoDB. Motivated and always curious, I use a variety of resources to 
          solve problems in innovative and creative ways. My goal in every project is to create seamless, 
          easy-to-use applications that are pleasant for both the users and the other developers involved. 
          I applied my knowledge of NodeJS and Express in a recent project where I worked in a team of four 
          to create an application that pairs people who are listing garages for rent to people who want 
          to use them. Looking forward to applying knowledge in a professional, team environment.
        </p>
        <div className="LandingPage-links">
          <div className="LandingPage-linkGroup">
            <a href="mailto:nick.a.cox@gmail.com"><i className="fa fa-envelope LandingPage-clickable"></i></a>
            <p><b>Email: </b>nick.a.cox@gmail.com</p>
          </div>
          <div id="resumeGroup" className="LandingPage-linkGroup">
            <ModalImage
              small="https://res.cloudinary.com/dvqaajrs0/image/upload/v1581808094/crResume.png"
              large="https://res.cloudinary.com/dvqaajrs0/image/upload/v1581808094/crResume.png"
              alt="Nick Cox Resume"
            />
            <p>Resume</p>
          </div>
          <div className="LandingPage-linkGroup">
            <a target="blank" href="https://github.com/nich-o-las">
              <i className="fa fa-github LandingPage-clickable"></i>
              <p>Github Profile</p>
            </a>
          </div>
          <div className="LandingPage-linkGroup">
            <a target="blank" href="https://www.linkedin.com/in/nicholas-cox-20bb38b9/">
              <i className="fa fa-linkedin LandingPage-clickable"></i>
              <p>LinkedIn Profile</p>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};