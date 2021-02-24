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
        "title": "Pick a local shop",
        "src": "./images/step1.png",
        "instructions": "Select which local shops you want to order from.",
    },
    {
        "id": "2",
        "title": "Text us to order",
        "src": "./images/step2.png",
        "instructions": "Text us what you want. There’s no minimum and you can place an order 24/7."
    },
    {
        "id": "3",
        "title": "We’re here! (in minutes)",
        "src": "./images/step3.png",
        "instructions": "Receive your order few minutes later and pay upon our eco-delivery. The delivery fee is £3."
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
        			<h1> Simplify </h1>
        			<h1> your </h1>
        			<h1> Life </h1>
        			<p> You can now discover, order and get skincare products in minutes. </p>
                    <a href="/shop"><div className="buttonShop">Shop now</div></a>
        		</div>
        	</div>

       	);
    }
}


class HowItWorks extends React.Component {


    render() {
        return (
        	<div className="HowItWorks">
        		<h1>How it works</h1>
        		<div className="Steps">
        			{steps.map(s => <Step key={s.id} {...s} />)}
        		</div>
                <a href="/shop"><div className="buttonShop">Shop now</div></a>
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
        			<div className="number">
        				<p>{step.id}</p>
        			</div>
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
