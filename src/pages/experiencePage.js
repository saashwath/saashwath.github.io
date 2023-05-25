import React, {Component} from 'react';
import '../css/experiencePage.css';

class ExperiencePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      xp: [
        {
          type: 'Software Engineer',
          company:'Calypso Technologies (now Adenza)',
          place: 'Chennai, India',
          fromTo: 'Sep 2022-Present',
          duration: '',
          role: 'Software Developer',
          desc: "Developed Engine for ECMS which processes various events and maintains real time data to compute creditline information. Developed e2e commitstage to run in jenkins for collateral server and acadia server. Incharge of sub-module in Collateral (Acadia) and few other specific collateral functionalities."
        },
        {
          type: 'Associate Software Engineer',
          company:'Calypso Technologies (now Adenza)',
          place: 'Chennai, India',
          fromTo: 'May 2020-Aug 2022',
          duration: '2.3 years',
          role: 'Software Developer',
          desc: "Single Handedly developed Acadia Margin Agreement connectivity project which provides ability to manage updates to the agreements in Calypso and send / receive to make agreements in sync. Improved performance of MarginCall detail entry / allocation report by 30%. Mentored interns in providing knowledge transfer and assigning tasks to bring them to speed."
        },
        {
          type: 'Software Intern',
          company:'Calypso Technologies (now Adenza)',
          place: 'Chennai, India',
          fromTo: 'May 2018-Nov 2018',
          duration: '6 Months',
          role: 'Software Developer',
          desc: "Developed testing framework for Collateral module that automates multiple user tasks and test scenarios for regression testing."
        },
        {
          type: 'Internship',
          company:'Fibonalabs PVT. LTD',
          place: 'Bangalore, India',
          fromTo: 'May 2018 to Nov 2018',
          duration: '6 months',
          role: 'Web Developer',
          desc: "Developed a platform for architects, engineers to exhibit their profiles, outsource their support services and attend to customer enquiry."
        }
      ]
    }
  }
    render() {

      return (
        <div className="experience-page" id="experience">
            <div className="heading">Experience</div>
            <div className="container">
              <ul className="timeline">

              {this.state.xp.reverse().map((item,index) => {
                if(index%2 === 0){

                return(
                  <li key={index} className="timeline-inverted">
                  <div className="timeline-badge"><i className="fas fa-thumbtack"></i></div>
                  <div className="timeline-panel wow fadeInRight">
                   <small className="pb-1"><i className="fas fa-user-tag"></i> {item.type}</small>
                    <div className="timeline-heading">
                      <h4>{item.company}</h4>
                      <p className="text-muted">{item.place}</p>
                      </div>
                      
                      <div className="row pb-1">
                          <h6 className="col-6 pl-0"><i className="far fa-calendar-alt pr-2"></i>{item.fromTo}</h6>
                          <h6 className="col-6 p-0 pr-3 text-right"><i className="fas fa-user-clock pr-1"></i> {item.duration}</h6>
                      </div>

                      <h3 className="m-auto text-center pb-3">{item.role}</h3>
                    <div className="timeline-body">
                        {item.desc}
                    </div>
                  </div>
                </li>
                );
                }
                else{
                  return(
                    <li key={index}>
                    <div className="timeline-badge"><i className="fas fa-map-pin"></i></div>
                    <div className="timeline-panel wow fadeInLeft">
                     <small className="pb-1"><i className="fas fa-user-tag"></i> {item.type}</small>
                      <div className="timeline-heading">
                        <h4>{item.company}</h4>
                        <p className="text-muted">{item.place}</p>
                        </div>
                        
                        <div className="row pb-1">
                            <h6 className="col-6 pl-0"><i className="far fa-calendar-alt pr-2"></i>{item.fromTo}</h6>
                            <h6 className="col-6 p-0 pr-3 text-right"><i className="fas fa-user-clock pr-1"></i> {item.duration}</h6>
                        </div>
  
                        <h3 className="m-auto text-center pb-3">{item.role}</h3>
                      <div className="timeline-body">
                          {item.desc}
                      </div>
                    </div>
                  </li>
                  );
                }
              })

            }
              </ul>
          </div>
        </div>
      );
    }
  }

export default ExperiencePage;