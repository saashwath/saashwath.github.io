import React, {Component} from 'react';
import '../css/projectsPage.css';
import ProjectCard from '../subComponents/projectCard';

class ProjectsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
                { name: 'desk',
                  picNo:[1],
                  desc:"A web application that contains an image gallery and a to-do manager developed using J2EE technology."
                },
                { name: 'photoCrypter', 
                  picNo:[1,2], 
                  desc:"A Java application that allows the user to save photos securely and view them privately with password."
                },
                { name: 'connectionMaker', 
                  picNo:[1,2,3], 
                  desc:"Saving contacts of friends and relatives which can be accessed anytime anywhere"
                }
              ]
    }
  }

    render() {
      return (
        <div className="projects-page" id="projects">
          <div className="heading">Projects</div>
          <div className="container">
                  <div className="row">
                  {this.state.projects.map((item, index) => {
                    return(
                      <div key={index}className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 project-align-card">
                        <ProjectCard name={item.name} index={index} picNo={item.picNo} desc={item.desc} />
                      </div>
                    );
                  }
                  )}
                          
                          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 project-align-card">
                          <a href="https://github.com/saashwath" target="_blank" rel="noopener noreferrer" >
                          <div className="project-card view-more-on-github-button wow fadeInUp">
                            <div className=""> View More Projects On GitHub <i className="fab fa-github pl-1"></i></div>
                            </div>
                            </a>
                            </div>

                  </div>
              </div>

        </div>
      );
    }
  }

export default ProjectsPage;