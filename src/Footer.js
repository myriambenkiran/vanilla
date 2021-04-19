import React from 'react';
import './style/Footer.css';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';
import insta from './images/instagram.png';

class Footer extends React.Component {


    render() {
        return (
        	<div className="Footer">
        		<p>2021 GROP LIMITED (No. 12425967). All rights reserved.</p>
        		<div className="FooterMenu">
                		<Link exact to="/about"> ABOUT </Link>
                    	<Link exact to="/contact"> CONTACT </Link>
                        <a href={require(`./pdf/Terms.pdf`).default} target="_blank" >TERMS</a>
                        <a href="https://www.instagram.com/vanilla.ldn/"><img src={insta} /></a>
        		</div>
        	</div>

       	);
    }
}


export default withRouter(Footer);