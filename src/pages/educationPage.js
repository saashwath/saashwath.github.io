import React, {Component} from 'react';
import '../css/educationPage.css';

import CitLogo from '../images/education/citLogo.png';
import pvvLogo from '../images/education/pvvLogo.jpg';

class EducationPage extends Component {

    collapseChange(heading,icon,content){

        document.getElementById(content).classList.toggle('show');
        if(document.getElementById(heading).classList.contains('active-accordian')){
            document.getElementById(heading).classList.remove('active-accordian');
            document.getElementById(icon).classList.remove('fa-minus-square');
            document.getElementById(icon).classList.add('fa-plus-square');
        }
        else{
            document.getElementById(heading).classList.add('active-accordian');
            document.getElementById(icon).classList.remove('fa-plus-square');
            document.getElementById(icon).classList.add('fa-minus-square');
        }

    }

    render() {
      return (
        <div className="education-page" id="education">
          <div className="heading">Education</div>
          <div className="row wow zoomIn">
                <div className="col-xs-hidden col-sm-hidden col-md-3 col-lg-3 col-xl-3" />
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-0">
                        <div className="accordian active-accordian pl-1" id="degreeHeading" onClick={(e) => this.collapseChange('degreeHeading','degreeArrow','degree')}>MSc Software Systems<span id="degreeArrow" className="fas fa-minus-square arrow" /></div>
                        <div id="degree" className="accordian-content collapse pl-1 show animated fadeIn">
                                <div className="row pt-3 pb-3">
                                <center className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                    <a href="http://www.cit.edu.in/" target="_blank" rel="noopener noreferrer" > <img src={CitLogo} alt="CIT LOGO" height="150px" width="150px" className="mb-3"/> </a>
                                    <h6><b>Coimbatore Institute Of Technology</b></h6>
                                </center>
                                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 text-align">
                                    Master of Science in Software Systems is a unique 5 years integrated course with internship facilities within the curriculum. This course maily concentrates on computer science and software. Blending the theoretical learning with extensive laboratory practice in the smart environment.
                                </div>
                                </div>
                        </div>

                        <div className="accordian  pl-1" id="hscHeading" onClick={(e) => this.collapseChange('hscHeading','hscArrow','hsc')}>Higher Secondary Grade<span id="hscArrow" className="fas fa-plus-square arrow" /></div>
                        <div id="hsc" className="accordian-content collapse animated pl-1 fadeIn">
                                <div className="row pt-3 pb-3">
                                    <center className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                        <img src={pvvLogo} alt="PVV LOGO" height="150px" width="150px" className="mb-3"/>
                                        <h6 className="mb-0"><b>Premier Vidyaa Vikash</b></h6>
                                        <h6 className="mb-0"><b>Matriculation Higher Secondary school</b></h6>
                                    </center>
                                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 text-align">
                                        State Board Higher Secondary HSC course in Tamil Nadu with group code: 102 which includes subjects like Physics, Chemistry, Computer Science, Mathematics along with primary language subject English and secondary language subject French.
                                    </div>
                                </div>
                        </div>

                        <div className="accordian  pl-1" id="sslcHeading" onClick={(e) => this.collapseChange('sslcHeading','sslcArrow','sslc')}>Secondary Grade<span id="sslcArrow" className="fas fa-plus-square arrow" /></div>
                        <div id="sslc" className="accordian-content collapse animated fadeIn in pl-1">
                            <div className="row pt-3 pb-3">
                                    <center className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                        <img src={pvvLogo} alt="PVV LOGO" height="150px" width="150px" className="mb-3"/>
                                        <h6 className="mb-0"><b>Premier Vidyaa Vikash</b></h6>
                                        <h6 className="mb-0"><b>Matriculation Higher Secondary school</b></h6>
                                    </center>
                                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 text-align">
                                        State Board Secondary school course in Tamil Nadu 'Samacheer Kalvi' with primary science subjects.
                                    </div>
                            </div>
                        </div>
                </div>
                <div className="col-xs-hidden col-sm-hidden col-md-3 col-lg-3 col-xl-3" />
            </div>

        </div>
      );
    }
  }

export default EducationPage;
