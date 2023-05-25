import React, {Component} from 'react';
import '../css/subComponents/projectCard.css';
import ProjectModal from './projectModal';

class projectCard extends Component {  

    componentDidMount(){
        var index =this.props.index;
        document.getElementsByClassName("project-card")[index].onmouseenter = function(){
            document.getElementsByClassName("project-name")[index].classList.add("animated");
            document.getElementsByClassName("project-name")[index].classList.add("fadeInDown");

            document.getElementsByClassName("learn-more-button")[index].classList.add("animated");
            document.getElementsByClassName("learn-more-button")[index].classList.add("fadeInUp");
        };

        document.getElementsByClassName("project-card")[index].onmouseleave = function(){
            document.getElementsByClassName("project-name")[index].classList.remove("animated");
            document.getElementsByClassName("project-name")[index].classList.remove("fadeInDown");

            document.getElementsByClassName("learn-more-button")[index].classList.remove("animated");
            document.getElementsByClassName("learn-more-button")[index].classList.remove("fadeInUp");
        };

    }

    render() {
      return (
        <div className="project-card wow fadeInUp">

                <img src={require('../images/projectSS/'+this.props.name+'1.png')} alt={this.props.name} className="project-image" />
                <div className="overlay"></div>
                <h3 className="project-name">{this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}</h3>
                <a data-toggle="modal" data-target={"#"+this.props.name+"projectModal"} >
                <div className="learn-more-button"> Learn More <i className="fas fa-info-circle pl-1"></i></div>
                </a>
                <ProjectModal project={this.props.name} picNo={this.props.picNo} desc={this.props.desc}/>
        </div>
      );
    }
  }

export default projectCard;
