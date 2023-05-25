import React, {Component} from 'react';
import '../css/subComponents/skillsCard.css';

class SkillsCard extends Component {

    render() {
      return (
        <div className="skills-card wow fadeInUp">
        <img src={require('../images/skillsImages/'+this.props.name+'.png')} alt="Saashwath" className="pic-up" />
        <h3 className="name-up">{this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}</h3>
        </div>
      );
    }
  }

export default SkillsCard;
