import React, {Component} from 'react';

import '../css/subComponents/footer.css';
class Footer extends Component {


    render() {

      return (
        <div className="footer">
            {this.props.content.toUpperCase()}
        </div>
        );
    }
    }

export default Footer;