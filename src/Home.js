import React from 'react';
import './style/Home.css';
import {Img} from 'react-image'
import home1 from './images/home1.jpg';
import home2 from './images/home2.jpg';
import home3 from './images/home3.jpg';
import home4 from './images/home4.png';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';
import { load } from 'react-require';


const steps = [
    {
        "id": "1",
        "title": "Give your skin LOVE",
        "src": "./images/step1.jpg",
        "instructions": "Your skin deserves the best! That’s a given! You will find what she deserves within our range of products!",
    },
    {
        "id": "2",
        "title": "Own your beauty and time",
        "src": "./images/step2.jpg",
        "instructions": "There are few things in life that can claim to be more precious than time. Place an order in seconds, receive in minutes!"
    },
    {
        "id": "3",
        "title": "Love your skin and your Planet",
        "src": "./images/step3.jpg",
        "instructions": "Just like you, we are committed to do our part for our beloved Planet! We only use bikes and no additional packaging."
    }
];


class Home extends React.Component {


    render() {
        return (
        	<div className="Home">
        		<Main/>
        		<HowItWorks/>
        	</div>

       	);
    }
}

class Main extends React.Component {


    render() {
        return (
        	<div className="Main">
        		<div className="Images">
        			<img src={home1} />
        			<img src={home2} />
        			<img src={home3} />
        		</div>
        		<div className="Text">
        			<h1> Redefining online shopping for skincare</h1>
        			<p>Greener. Faster. Happier.</p>
                    <a href="/shop"><div className="buttonShop">Join the movement!</div></a>
        		</div>
        	</div>

       	);
    }
}


class HowItWorks extends React.Component {


    render() {
        return (
        	<div className="HowItWorks">
                <div className="aboutVanilla">
                    <h3>The first on-demand skincare platform</h3>
                    <p>We have selected for you the best of the skincare products available around. And to make your life even simpler we offer an eco-delivery for you to get them in minutes, without much efforts, wherever you are and whenever you feel like it!</p>
                </div>
        		<h1>Why you should use Vanilla</h1>
        		<div className="Steps">
        			{steps.map(s => <Step key={s.id} {...s} />)}
        		</div>
                <a href="/shop"><div className="buttonShop">Get in there!</div></a>

        	</div>

       	);
    }
}


class Step extends React.Component {
	render() {
        const src = require('./images/home1.jpg');
		let step = this.props;
		return (
		    <div className="Step">
        		<img src={require(`${step.src}`).default} alt="" className="img-responsive" />
        		<div className="title">
        			<h3>{step.title}</h3>
        		</div>
        		<div className="instructions">
					<p>{step.instructions}</p>
        		</div>
        	</div>
		);
	}
}


export default withRouter(Home);
