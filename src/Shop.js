import React from 'react';
import './style/Shop.css';
import { Img } from 'react-image'
import brands from './json/Brands.json';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { load } from 'react-require';
import filters from './json/Filters.json';
import products from './json/productnew.json';
import Select from 'react-select';
import { connect } from 'react-redux';
import { compose } from "redux";
import { addToCart } from './cartActions.js'

const endPage = [
    {
        "id": 1,
        "title": "Can’t find what you need?",
        "text": "Tell us what brands or products you are looking for.",
        "buttonText": "Tell us",
        "link": "https://wa.me/+447737832909?text=Sorry you didn’t find what you needed. Tell us what product you were looking for."
    },
    {
        "id": 2,
        "title": "Need to recycle?",
        "text": "Get your beauty products empties collected on-demand for £2 fee. Any size product from any beauty brand are welcomed. Even those not bought with us. Collection is free for products you ordered with us.",
        "buttonText": "Recycle",
        "link": "https://wa.me/+447737832909?text=Thanks for doing this. Tap send to start arranging a collection."
    }]

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

class Shop extends React.Component {

    render() {

        let filter = this.props.match.params.filter;
        console.log(filter);

        return (
            <div className="Shop">
                <h2>ETHICAL SHOP</h2>
                <div className="textShop">
                    <p>1. Find in minutes beauty brands really ethical.</p>
                    <p>2. Order multiple products/brands from one place.</p>
                    <p>3. Receive your order pollution and packaging free.</p>
                    <div className="h4">
                        <p>We partner with local shops from all over London to source our products.</p>
                        <p>We deliver from Monday to Saturday across London.</p>
                    </div>
                    <a href={require(`./pdf/Criteria.pdf`).default} target="_blank" >What does "ethical" mean for us?</a>
                </div>
                <Products addToCart={this.props.addToCart} history={this.props.history} filter={filter} />
                {endPage.map(p => <Paragraph key={p.id} {...p} />)}
            </div >
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
        this.state = {
            filter: this.props.filter,
            label: this.props.filter
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.filter !== this.props.filter) {
            this.setState({ filter: this.props.filter });
        }
    }

    handleFilter = option => {
        let filter = "all";
        let label = null;
        if (option.label.toLowerCase() != "all products") {
            filter = option.label.toLowerCase();
            label = option.label;
        };
        this.setState({ filter: filter });
        this.setState({ label: label });
        this.props.history.push(`/shop/${filter}`);

    };

    //sorting by alphebetic order .sort((a, b) => a.brand > b.brand ? 1 : -1)

    render() {

        let selectValue = (this.state.filter == "all") ? null : { value: this.state.filter, label: this.state.label };

        return (
            <div>


                <Select className="filters" options={filters} onChange={this.handleFilter.bind(this)} value={selectValue} placeholder={<div>Select a category or type a brand</div>} />
                <div className="Products">
                    {products.filter(f => (this.state.filter == "all") || f.category.join("|").toLowerCase().includes(this.state.filter)).sort(() => .5 - Math.random()).map(b => <Product key={b.id} {...b} addToCart={this.props.addToCart} filter={this.state.filter} />)}
                </div>
            </div>
        );
    }
}

class Filter extends React.Component {


    render() {

        let filter = this.props.filter.label;
        let stateFilter = this.props.stateFilter;

        let style = {}
        if (!stateFilter) {
            if (filter.toLowerCase() == "all products") {
                style = { textDecoration: "underline" }
            }
        } else {
            if (filter.toLowerCase() == stateFilter.toLowerCase()) {
                style = { textDecoration: "underline" }
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


    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {

        let product = this.props;
        let volumeSlash;
        let volumeText;
        if (product.volume) {
            volumeSlash = <h3>/</h3>
            volumeText = `- ${product.volume} `
        }



        return (
            <div className="Product" >
                <div className="productImage">
                    <Link to={`./shop/${product.id}`}><img src={require(`${product.src}`).default} /></Link>
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
                {/*<a className="quickBuy" href={`https://wa.me/+447737832909?text=Tap send to add ${product.name} ${volumeText}from ${product.brand.toUpperCase()} to your bag (£${product.price}).`}><div className="buttonShop">Get it now</div></a>
            <button className="buttonShop" onClick={()=>{this.handleClick(product.id)}}>Add to Cart</button>
            */}</div>
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
                        <img src={require(`${brand.src}`).default} />
                    </a>
                </div>
                <h3><a href={require(`${brand.pdf}`).default} target="_blank" >{brand.name}</a></h3>
            </div>

        );
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Shop);
