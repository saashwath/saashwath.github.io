import React, {Component} from 'react';
import '../css/homePage.css';
import DownloadableFile from '../downloadableFiles/Saashwath.pdf';

// import SaashwathImage from '../images/saashwath1.jpeg';
// import SaashwathImage2 from '../images/saashwath2.jpeg';

class HomePage extends Component {
    constructor(props){
        super(props)

        this.state={
            like: false
        }

    }
    likeStatus(status){

        this.setState({
            like: status
        });
    }

    goToAbout(){
        document.body.scrollTop = document.getElementById('about').offsetTop;
        document.documentElement.scrollTop = document.getElementById('about').offsetTop;
      }

      
    render() {

      return (
        <div className="home-page">
            <div className="row home-content">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">

                    {this.state.like
                    ?<div className="liked animated infinite pulse"> <i className="fas fa-heart" onClick={(e) => this.likeStatus(false)} /> </div>
                    :<div className="not-liked wow fadeInLeft"> <i className="far fa-heart" onClick={(e) => this.likeStatus(true)} /> </div>
                    }

                    <div className="give-me-a-like">
                        Give Me a Like
                    </div>

                </div>

                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 home-right-half-holder">
                    <div className="home-below-content wow fadeInUp">
                      <div className="name">
                          I'm Saashwath
                      </div>
                      <div className="short-des">
                          Web and app developer | Freelancer
                      </div>
                      <div className="center-home-button">
                      <a href={DownloadableFile} download="saashwath.pdf"><button className="btn btn-primary home-button"> Download Resume <i className="fas fa-download"></i> </button></a>
                      <a onClick={this.goToAbout}> <button className="btn btn-primary home-button"> More About Me </button> </a>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

export default HomePage;
