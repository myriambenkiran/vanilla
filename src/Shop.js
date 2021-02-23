import React from 'react';
import './style/Home.css';
import {Img} from 'react-image'
import brands from './json/Brands.json';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';
import { load } from 'react-require';


class Shop extends React.Component {


    render() {
        return (
        	<div className="Home">
        		<Brands/>
        	</div>

       	);
    }
}

class Brands extends React.Component {


    render() {
        return (
        	<div className="PickBrand">
        		<h1>Shop all skincare</h1>
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
        	<div className="Brand" >
            <div className="BrandImg">
                <a href={require(`${brand.pdf}`).default} target="_blank">
        		<img src={require(`${brand.src}`).default}/>
                </a>
            </div>
            <h3>Shop <a href={require(`${brand.pdf}`).default} target="_blank" >{brand.name}</a></h3>
        	</div>

       	);
    }
}


export default withRouter(Shop);
