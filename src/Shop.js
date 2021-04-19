import React from 'react';
import './style/Shop.css';
import {Img} from 'react-image'
import brands from './json/Brands.json';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';
import { load } from 'react-require';
import filters from './json/Filters.json';
import products from './json/productnew.json';
import Select from 'react-select'

const endPage =[
{
    "id":1,
    "title": "Can’t find what you need?",
    "text":"Tell us what brands or products you are looking for.",
    "buttonText": "Tell us",
    "link": "https://wa.me/+447737832909?text=Sorry you didn’t find what you needed. Tell us what product you were looking for."
},
{
    "id":2,
    "title": "Want to recycle?",
    "text":"Get your beauty products empties collected on-demand for £2 fee. Any size product from any beauty brand are welcomed. Even those not bought with us. Collection is free for products you ordered with us.",
    "buttonText": "Recycle",
    "link": "https://wa.me/+447737832909?text=Thanks for doing this. Tap send to start arranging a collection."
},
{
    "id":3,
    "title": "Want to be part of our success?",
    "text":"We’re at the very beginning of our journey but already looking forward to having incredible people joining us as our users. If you want to support our project and be part of our success, just sign up.",
    "buttonText": "Sign Up",
    "link": "https://wa.me/+447737832909?text=So grateful to count you amongst us. Send us your name and email address to be added into our list of users."
}]

class Shop extends React.Component {

    render() {
        return (
        	<div className="Shop">
                <h2>E-SHOP.</h2>
                <div className="textShop"><h4>Opening times:</h4>
                <p>Order 24/7</p>
                <p>Delivery from Mon to Sat: 11am - 7pm</p>
                <p>Delivery on Sun: 11am - 12pm</p></div>
                <div className="textShop"><h4>YOUR PAYMENT IS SECURE</h4>
                <p>Pay safely by debit card upon our eco-delivery.</p>
                <p>No minimum order. £2 delivery fee.</p></div>
        	   <Products/>
               {endPage.map(p => <Paragraph key={p.id} {...p} />)}
            </div>
       	);
    }
}

class Paragraph extends React.Component {

    render() {
        return (
            <div className="Paragraph">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.text}</p>
                    <a href={this.props.link}><div className="buttonShop">{this.props.buttonText}</div></a>
                
            </div>
        );
    }
}


class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {filter: ""};
    }



    handleFilter = option => {
        let filter = "";
        if (option.label.toLowerCase() != "all products") {
            filter = option.label.toLowerCase();
        };
        this.setState({ filter });
    };

    //sorting by alphebetic order .sort((a, b) => a.brand > b.brand ? 1 : -1)

    render() {
        return (
            <div>
                <Select className="filters" options={filters} onChange={this.handleFilter.bind(this)} placeholder={<div>Select a category or a brand</div>}/>
                <div className="Products">
                {products.filter(f => !this.state.filter || f.category.join( "|" ).toLowerCase().includes(this.state.filter)).sort(() => .5 - Math.random()).map(b => <Product key={b.id} {...b} />)}
                </div>  
        </div>
        );
    }
}

class Filter  extends React.Component{


    render(){

        let filter = this.props.filter.label;
        let stateFilter = this.props.stateFilter;

        let style = {}
        if(!stateFilter){
            if( filter.toLowerCase() == "all products"){
                style = {textDecoration: "underline"}
            }
        }else{
            if( filter.toLowerCase() == stateFilter.toLowerCase()){
                style = {textDecoration: "underline"}
            }
        }

        return (
            <button style={style}
                    onClick={this.props.onClick}>
                {this.props.filter}
            </button>

        );
    }
}

class Product extends React.Component {


    render() {
        
        let product = this.props;
        let volumeSlash;
        let volumeText;
        if(product.volume){
            volumeSlash = <h3>/</h3>
            volumeText = `- ${product.volume} `
        }
        return (
            <div className="Product" >
            <div className="productImage">
                <a href={`./shop/${product.id}`}><img src={require(`${product.src}`).default}/></a>
            </div>
            <div className="productInfo">
            <h3>{product.name}</h3>
            <div className="priceAndVolume">
                <h3>£{product.price}</h3>
                {volumeSlash}
                <h3>{product.volume}</h3>
            </div>
            <p>{product.brand.toUpperCase()}</p>
            <p>{product.type}</p>
            </div>
            <a className="quickBuy" href={`https://wa.me/+447737832909?text=Tap send to add ${product.name} ${volumeText}from ${product.brand.toUpperCase()} to your bag (£${product.price}).`}><div className="buttonShop">Get it now</div></a>
            </div>

        );
    }
}

class Brands extends React.Component {

    render() {
        return (
        	<div className="PickBrand">
                <div className="Brands">
        		
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
            <h3><a href={require(`${brand.pdf}`).default} target="_blank" >{brand.name}</a></h3>
        	</div>

       	);
    }
}


export default withRouter(Shop);
