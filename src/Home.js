import React from 'react';
import './style/Home.css';
import {Img} from 'react-image'
import home12 from './images/home1.jpg';
import home2 from './images/home2.jpg';
import home3 from './images/home3.jpg';
import home4 from './images/home4.png';
import brands from './json/Brands.json';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';
import pdf from './pdf/Aesop.pdf';
import { load } from 'react-require';


const pdf2 = require('./pdf/Aesop.pdf').default;
const home1 = require('./images/home1.jpg').default;

const steps = [
    {
        "id": "1",
        "title": "Decide what you want",
        "src": "./images/step1.png",
        "instructions": "Access a range of products from our brands selection",
    },
    {
        "id": "2",
        "title": "Text us to order",
        "src": "./images/step2.png",
        "instructions": "Text us the ID of each product you want to place an order"
    },
    {
        "id": "3",
        "title": "We’re here! (in minutes)",
        "src": "./images/step3.png",
        "instructions": "Pay by debit cards upon our pollution free delivery"
    }
];


class Home extends React.Component {


    render() {
        return (
        	<div className="Home">
        		<Main/>
        		<HowItWorks/>
        		<Brands/>
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
        			<p> Get your skincare favourites in minutes </p>
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
                <div className="TextUs">
        		<h3>Text to order: (+44) 773 783 2909</h3>
                <p>We currently deliver the amazing SW3, SW7 and SW10 districts.</p>
                </div>
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
        		<img src={step.src} alt="" className="img-responsive" />
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

class Brands extends React.Component {


    render() {
        return (
        	<div className="PickBrand">
        		<h1>Pick a brand</h1>
        		<div className="Brands">
        		{brands.map(b => <Brand key={b.id} {...b} />)}
        		</div>
                <img className="produits" src={home4}/>
                <h3>Love this product? Get them in minutes</h3>
                <p>Text to order: (+44) 773 783 2909</p>
        	</div>

       	);
    }
}


class Brand extends React.Component {

    render() {
        
    	let brand = this.props;
        return (
        	<div className="Brand">
                <a href={require(`${brand.pdf}`).default} target="_blank">
        		<img src={require(`${brand.src}`).default}/>
        		<h3>{brand.name}</h3>
                </a>
        	</div>

       	);
    }
}


export default withRouter(Home);
