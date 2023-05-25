import React, {Component} from 'react';
import '../css/aboutPage.css';
import AboutMe from "../images/aboutMe/aboutMe.jpg";
import AboutMeProfile from "../images/aboutMe/aboutMeProfile.jpg";

class AboutPage extends Component {

  goToProjects(){
    document.body.scrollTop = document.getElementById('projects').offsetTop;
    document.documentElement.scrollTop = document.getElementById('projects').offsetTop;
  }

    render() {
      return (
        <div className="about-page" id="about">
          <div className="heading"> About Me </div>
          <div className="row centering-row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 centering-pic">
  
            <img src={AboutMe} alt="Saashwath" className="pic" />
            
            <div className="profile-sizer wow fadeInLeft">
            <img src={AboutMeProfile} alt="Saashwath" className="pic-profile" />
            </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 content wow fadeInUp"> 
            <div>
                I'm a software developer from Coimbatore, India. 
                I'm passionate about playing football. 
                I always wanted to be unique which take me to my destined place.
                I specialize in building react and Java applications.
                I also have interest in creating intuitive, dynamic user experiences. 
                I like exploring people and grasping knowledge from experiences.
                <div className="mt-1"><a onClick={this.goToProjects}> <button className="btn btn-primary about-button"> View my work <i className="fas fa-caret-down pl-1"></i> </button> </a></div>
            </div>
            
            </div>
          </div>
        </div>
      );
    }
  }

export default AboutPage;
