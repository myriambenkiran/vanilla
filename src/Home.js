import React from 'react';
import './Home.css';
import {Img} from 'react-image'
import home1 from './images/home1.jpg';
import home2 from './images/home2.jpg';
import home3 from './images/home3.jpg';
import brands from './json/Brands.json';


const steps = [
    {
        "id": "1",
        "title": "Decide what you want",
        "src": "./images/home1.jpg",
        "instructions": "Browse our catalogues and choose from our range of brands.",
    },
    {
        "id": "2",
        "title": "Decide what you want",
        "src": "./images/step2.png",
        "instructions": "Browse our catalogues and choose from our range of brands."
    },
    {
        "id": "3",
        "title": "Decide what you want",
        "src": "./images/step3.png",
        "instructions": "Browse our catalogues and choose from our range of brands."
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
        			<p> Get beauty to your door under an hour </p>
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
        		<h3>Text to order: (+44) 773 783 2909</h3>
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
        		<img src={require(`${this.props.src}`)} alt="" className="img-responsive" />
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
        	</div>

       	);
    }
}


class Brand extends React.Component {


    render() {
    	let brand = this.props;
        return (
        	<div className="Brand">
        		<img src={require(`${this.props.src}`)}/>
        		<h3>{brand.name}</h3>
        	</div>

       	);
    }
}




export default Home;