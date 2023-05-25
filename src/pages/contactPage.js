import React, {Component} from 'react';
import Footer from '../subComponents/footer';

import '../css/contactPage.css';
import '../css/bootstrapOverrides.css';

class ContactPage extends Component {


    render() {

      return (
        <div className="contact-page" id="contact">
        <div className="heading pb-3">Connect With Me</div>
        <div className="row contact-content-holder">
            <div className="col-xs-hidden col-sm-hidden col-md-2 col-lg-2 col-xl-2" />
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 contact-box wow fadeInUp">

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="row pt-3">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 colomn-margin-bottom">
                            <div className="row">
                                <center className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 wow fadeInLeft">
                                    <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope icon-style" ></i></a>
                                </center>
                                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 content-vertical-align">
                                    <a href="mailto:saashwath22@gmail.com?Subject=Reg:" target="_blank" rel="noopener noreferrer">saashwath22@gmail.com</a>
                                </div>
                            </div>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 colomn-margin-bottom">
                            <div className="row">
                                <center className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 wow fadeInLeft">
                                    <a href="https://www.google.com/maps/" target="_blank" rel="noopener noreferrer"><i className="fas fa-map-marker-alt icon-style" /> </a>
                                </center>
                                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 content-vertical-align">
                                <div>Thondamuthur Road, Coimbatore</div>
                                </div>
                            </div>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 responsive-margin-bottom">
                            <div className="row">
                                <center className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 wow fadeInLeft">
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram icon-style" /></a>
                                </center>
                                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 content-vertical-align">
                                    <a href="https://www.instagram.com/i_am_saas" target="_blank" rel="noopener noreferrer">i_am_saas</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="row pt-3">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 colomn-margin-bottom">
                            <div className="row">
                                <center className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 wow fadeInLeft">
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square icon-style" ></i></a>
                                </center>
                                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 content-vertical-align">
                                    <a href="https://www.facebook.com/saashwath" target="_blank" rel="noopener noreferrer">Saashwath Amudhan</a>
                                </div>
                            </div>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 colomn-margin-bottom">
                            <div className="row">
                                <center className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 wow fadeInLeft">
                                    <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-snapchat icon-style" /> </a>
                                </center>
                                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 content-vertical-align">
                                <a href="https://www.snapchat.com/add/saashwath" target="_blank" rel="noopener noreferrer">Saashwath</a>
                                </div>
                            </div>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="row">
                                <center className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 wow fadeInLeft">
                                    <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp icon-style" /></a>
                                </center>
                                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 content-vertical-align">
                                    <a>+91 9566850276</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-xs-hidden col-sm-hidden col-md-2 col-lg-2 col-xl-2" />
        </div>
        
        <Footer content="Saashwath © 2019" />
        </div>
      );
    }
  }

export default ContactPage;
