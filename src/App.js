import React, { Component } from 'react';
import './App.css';
import './css/animate.css';

import './css/verticalNavbar.css';
import './css/general.css'
import VerticalNavbar from './pages/verticalNavbar';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';
import ProjectsPage from './pages/projectsPage';
import ExperiencePage from './pages/experiencePage';
import EducationPage from './pages/educationPage';
import SkillsPage from './pages/skillsPage';

import WOW from 'wowjs';

class App extends Component {
  constructor(){
    super();
    this.state = {
      isMobile: false
    }
  }
  
  componentDidMount(){
    new WOW.WOW().init();
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.setState({
        isMobile: true
      })
     }
     else{
      this.setState({
        isMobile: false
      })
     }
}
  render() {
    if(this.state.isMobile){
      return(
        <div className="App">
          <center>
            <h5 className="mt-5">
              Mobile browsers not supported.<br /><br />
              Please visit this site using desktop browsers.
              </h5>
            </center>
        </div>
      )
    }
    else{
    return (
      <div className="App">
        <VerticalNavbar />
        <HomePage />
        <AboutPage />
        <SkillsPage />
        <EducationPage />
        <ExperiencePage />
        <ProjectsPage />
        <ContactPage />
      </div>
    );
    }
  }
}

export default App;
