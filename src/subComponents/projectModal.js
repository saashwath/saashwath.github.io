import React, { Component } from 'react';
import '../css/subComponents/projectModal.css';

class ProjectModal extends Component {

    render() {
        return (
            <div className="project-modal" tabIndex="-1" role="dialog" aria-labelledby="projectModalLabel" aria-hidden="true" >
            <div className="modal fade" id={this.props.project+"projectModal"}>
                <div className="modal-dialog modal-dialog-centered modal-lg">
               
                    <div className="modal-content">
                        <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>

                                            <div id={this.props.project+"projectSScarosal"}  className="carousel slide" data-ride="carousel" data-interval="false" data-keyboard={true}>
                                            <ol className="carousel-indicators">
                                            {this.props.picNo.map((item,index) =>{
                                                    if(index===0){
                                                        return(
                                                            <li key={index} data-target={"#"+this.props.project+"projectSScarosal"}  data-slide-to={index} className="active"></li>
                                                        )
                                                    }
                                                    else{
                                                        return(
                                                            <li key={index}data-target={"#"+this.props.project+"projectSScarosal"}  data-slide-to={index}></li>
                                                        )
                                                    }
                                                }
                                            )}
                                            </ol>

                                            <div className="carousel-inner">
                                            {this.props.picNo.map((item,index) =>{
                                                        if(index===0){      
                                                        return(
                                                            <div key={index} className="carousel-item active">
                                                            <img src={require('../images/projectSS/'+this.props.project+item+'.png')} alt={this.props.project+item} className="projectSS-carosal-image" />
                                                            </div>
                                                        )
                                                        }
                                                        else{
                                                            return(
                                                                <div key={index} className="carousel-item">
                                                                <img src={require('../images/projectSS/'+this.props.project+item+'.png')} alt={this.props.project+item} className="projectSS-carosal-image" />
                                                                </div>
                                                            )  
                                                        }
                                                    }
                                            )}
                                            </div>

                                            <a className="carousel-control-prev" href={"#"+this.props.project+"projectSScarosal"} role="button" data-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="carousel-control-next" href={"#"+this.props.project+"projectSScarosal"} role="button" data-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                            </div>
                                                    <div className="row pl-4 pr-4">
                                                    <div className="modal-project-heading col-9">
                                                    <img src={require('../images/projectLogo/'+this.props.project+'.png')} alt={this.props.project+"Logo"} className="project-logo" />
                                                    <h3 className="pl-1">{this.props.project}</h3>
                                                    </div>
                                                    <div className="modal-project-heading col-3">
                                                        <a href={"https://github.com/saashwath/"+this.props.project.charAt(0).toUpperCase() + this.props.project.slice(1)} target="_blank" rel="noopener noreferrer" >
                                                            <button className="btn btn-primary view-on-github-button"> View On Github <i className="fab fa-github"></i> </button>
                                                        </a>
                                                    </div>
                                                    </div>
                                                    <hr />
                                                    <div className="text-justify px-4 pb-3">
                                                        <p>{this.props.desc}</p>
                                                    </div>

                        </div>
                       </div>
                       </div>
                     </div>
                    </div>
        );
    }
}

export default ProjectModal;