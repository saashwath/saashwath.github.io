import React, {Component} from 'react';

import '../css/verticalNavbar.css';


class VerticalNavbar extends Component {
  componentDidMount(){
    document.getElementById("homeTab").classList.add('current');
    window.onscroll = function() {

      if (window.pageYOffset < document.getElementById('about').offsetTop) {
        document.getElementById("homeTab").classList.add('current');
    } else {
       document.getElementById("homeTab").classList.remove('current');
    }

      if ((window.pageYOffset >= document.getElementById('about').offsetTop) && (window.pageYOffset < document.getElementById('skills').offsetTop)) {
        document.getElementById("aboutTab").classList.add('current');
    } else {
       document.getElementById("aboutTab").classList.remove('current');
    }

      if ((window.pageYOffset >= document.getElementById('skills').offsetTop) && (window.pageYOffset < document.getElementById('education').offsetTop)) {
        document.getElementById("skillsTab").classList.add('current');
    } else {
      document.getElementById("skillsTab").classList.remove('current');
    }

    if ((window.pageYOffset >= document.getElementById('education').offsetTop) && (window.pageYOffset < document.getElementById('experience').offsetTop)) {
      document.getElementById("educationTab").classList.add('current');
    } else {
    document.getElementById("educationTab").classList.remove('current');
    }

    if ((window.pageYOffset >= document.getElementById('experience').offsetTop) && (window.pageYOffset < document.getElementById('projects').offsetTop)) {
      document.getElementById("experienceTab").classList.add('current');
  } else {
    document.getElementById("experienceTab").classList.remove('current');
  }

    if ((window.pageYOffset >= document.getElementById('projects').offsetTop) && (window.pageYOffset < document.getElementById('contact').offsetTop)) {
      document.getElementById("projectsTab").classList.add('current');
    } else {
    document.getElementById("projectsTab").classList.remove('current');
    }

      if (window.pageYOffset >= document.getElementById('contact').offsetTop) {
        document.getElementById("contactTab").classList.add('current');
    } else {
      document.getElementById("contactTab").classList.remove('current');
    }

    };
  }
    
    // When the user clicks on the button, scroll to the top of the document
    goToHome() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    goToAbout(){
      document.body.scrollTop = document.getElementById('about').offsetTop;
      document.documentElement.scrollTop = document.getElementById('about').offsetTop;
    }

    goToSkills(){
      document.body.scrollTop = document.getElementById('skills').offsetTop;
      document.documentElement.scrollTop = document.getElementById('skills').offsetTop;
    }

    goToExperience(){
      document.body.scrollTop = document.getElementById('experience').offsetTop;
      document.documentElement.scrollTop = document.getElementById('experience').offsetTop;
    }

    goToEducation(){
      document.body.scrollTop = document.getElementById('education').offsetTop;
      document.documentElement.scrollTop = document.getElementById('education').offsetTop;
    }

    goToProjects(){
      document.body.scrollTop = document.getElementById('projects').offsetTop;
      document.documentElement.scrollTop = document.getElementById('projects').offsetTop;
    }

    goToContact(){
      document.body.scrollTop = document.getElementById('contact').offsetTop;
      document.documentElement.scrollTop = document.getElementById('contact').offsetTop;
    }

    render() {
      return (
        <div className="vertical-navbar">
            <div>
                <div onClick={this.goToHome}>
                <div className="icon-div mb-3" id="homeTab">
                <center>
                <i className="fas fa-home" />
                </center>
                </div>
                </div>

                <div onClick={this.goToAbout} >
                <div className="icon-div mb-3" id="aboutTab">
                <center>
                <i className="fas fa-user-tie" />
                </center>
                </div>
                </div>

                <div onClick={this.goToSkills} >
                <div className="icon-div mb-3" id="skillsTab">
                <center>
                <i className="fas fa-lightbulb" />
                </center>
                </div>
                </div>

                <div onClick={this.goToEducation} >
                <div className="icon-div mb-3" id="educationTab">
                <center>
                <i className="fas fa-graduation-cap" />
                </center>
                </div>
                </div>

                <div onClick={this.goToExperience} >
                <div className="icon-div mb-3" id="experienceTab">
                <center>
                <i className="fas fa-briefcase" />
                </center>
                </div>
                </div>

                <div onClick={this.goToProjects} >
                <div className="icon-div mb-3" id="projectsTab">
                <center>
                <i className="fas fa-laptop-code" />
                </center>
                </div>
                </div>

                <div onClick={this.goToContact} >
                <div className="icon-div" id="contactTab">
                <center>
                <i className="fas fa-link" />
                </center>
                </div>
                </div>

            </div>
        </div>
      );
    }
  }

export default VerticalNavbar;