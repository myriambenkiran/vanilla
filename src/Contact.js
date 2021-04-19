import React from 'react';
import './style/Contact.css';




class Contact extends React.Component {


    render() {
        return (
        	<div className="Contact">
                <h2>VANILLA HELP CENTER</h2>
                <p>Contact us to get personalised support</p>
                <p>Email: support@vanilladelivery.com</p>
                <a href="https://wa.me/+447737832909?text=Thanks for contacting us. Tell us what we can do for you."><div className="buttonShop">Contact Us</div></a>
        	</div>
       	);
    }
}


export default Contact;