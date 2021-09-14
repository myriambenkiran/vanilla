import React from 'react';
import './style/Shop.css';
import { Img } from 'react-image'
import brands from './json/Brands.json';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { load } from 'react-require';
import filters from './json/FiltersBoutique.json';
import boutiques from './json/boutiques.json';
import Select from 'react-select';
import { connect } from 'react-redux';
import { compose } from "redux";
import { addToCart } from './cartActions.js'


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

class Boutique extends React.Component {

    render() {

        let filter = this.props.match.params.filter;

        return (
            <div className="Shop">
                <h2>ETHICAL BEAUTY SHOPS IN LONDON</h2>
                <div className="textShop">
                    <p>Discover and pop in the best ethical shops in London. We're continuously looking for more incredible shops. Please tell us if you know of any other ethical shops.</p>
                </div>
                <Products history={this.props.history} filter={filter} />
            </div >
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
        if (option.label.toLowerCase() != "all boutiques") {
            filter = option.label.toLowerCase();
            label = option.label;
        };
        this.setState({ filter: filter });
        this.setState({ label: label });
        this.props.history.push(`/boutique/${filter}`);

    };

    //sorting by alphebetic order .sort((a, b) => a.brand > b.brand ? 1 : -1)
    //<Select className="filters" options={filters} onChange={this.handleFilter.bind(this)} value={selectValue} placeholder={<div>Select a category</div>} />


    render() {

        let selectValue = (this.state.filter == "all") ? null : { value: this.state.filter, label: this.state.label };

        return (
            <div>
                <div className="Products">
                    {boutiques.filter(f => (this.state.filter == "all") || f.category.join("|").toLowerCase().includes(this.state.filter)).sort(() => .5 - Math.random()).map(b => <Product key={b.id} {...b} addToCart={this.props.addToCart} filter={this.state.filter} />)}
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
            if (filter.toLowerCase() == "all boutiques") {
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

        let boutique = this.props;

        return (
            <div className="Product" >
                <div className="productImage">
                    <Link to={`./boutique/${boutique.id}`}><img src={require(`${boutique.src}`).default} /></Link>
                </div>
                <div className="productInfo">
                    <h3>{boutique.name}</h3>
                </div>
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
)(Boutique);
