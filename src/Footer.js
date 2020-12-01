import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';



class Footer extends React.Component {


    render() {
        return (
        	<div className="Footer">
        		<p>2020 Vanilla. All rights reserved.</p>
        		<div className="FooterMenu">
                		<Link exact to="/about"> About Vanilla </Link>
                    	<Link exact to="/contact"> Contact us </Link>
                    	<Link exact to="/privacy"> Privacy Policy </Link>
                    	<Link exact to="/terms"> Terms of use </Link>
        		</div>
        	</div>

       	);
    }
}


export default withRouter(Footer);