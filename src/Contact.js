import React from 'react';
import './style/Contact.css';
import help from './images/help.png';




class Contact extends React.Component {


    render() {
        return (
        	<div className="Contact">
                <div className="title">
                    <h1>Welcome to the Vanilla Help Center</h1>
                    <img src={help}/>
                </div>
                <h4>Send us a text or Call us to get personalised support</h4>
                <p>Get help with anything. Available 24/7. </p>
                <div className="phone">
                    <p>Phone: (+44) 773 783 29 09</p>
                    <p>Email: suppot@vanilladelivery.com</p>
                </div>
        	</div>
       	);
    }
}


export default Contact;