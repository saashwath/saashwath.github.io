import React, {Component} from 'react';
import '../css/skillsPage.css';

import SkillsCard from '../subComponents/SkillsCard';

class SkillsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: [ 'java',
                'python',
                'data Structure',
                'react',
                'MySQL',
                'node',
                'mongoDB',
                'PostgreSQL',
              ]
    }
  }
    render() {
      return (
        <div className="skills-page" id="skills">
          <div className="heading skills-top-padding"> Skills </div>
          <div className="container">

            <div className="row">
            {this.state.skills.map((item, index) => {
              return(
                <div key={index}className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 skills-align-card">
                <SkillsCard name={item} />
                </div>
              );
            }
            )}

            </div>
            </div>
        </div>
      );
    }
  }

export default SkillsPage;
