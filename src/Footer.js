import React from 'react';
import './style/Footer.css';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';



class Footer extends React.Component {


    render() {
        return (
        	<div className="Footer">
        		<p>2021 GROP LIMITED (No. 12425967). All rights reserved.</p>
        		<div className="FooterMenu">
                		<Link exact to="/about"> About Vanilla </Link>
                    	<Link exact to="/contact"> Contact us </Link>
        		</div>
        	</div>

       	);
    }
}


export default withRouter(Footer);