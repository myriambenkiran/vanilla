import React, { Component } from 'react';
import products from './json/productnew.json';
import { withRouter } from 'react-router';
import './style/DetailProductPage.css';
import './style/Home.css';
import { connect } from 'react-redux';
import { compose } from "redux";
import { addToCart } from './cartActions.js';
import { Link } from 'react-router-dom';


const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

class DetailProductPage extends React.Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {

        const productId = this.props.match.params.productId;
        console.log(productId);
        console.log(products);
        const product = products.filter(p => p.id === productId)[0];

        let how;
        let important;
        let volumeSlash;
        let volumeText;
        let linkToBoutique;

        if (product.how) {
            how = <p><strong>How to use: </strong>{product.how}</p>
        }

        if (product.important) {
            important = <p><strong>Note: </strong>{product.important}</p>
        }

        if (product.volume) {
            volumeSlash = <h4>/</h4>
            volumeText = `- ${product.volume} `
        }

        if(product.boutiqueId){
            linkToBoutique = <Link to={`/boutique/${product.boutiqueId}`} className="linkToBoutique">Discover the boutique</Link>
        }

        const path = require('path')
        console.log(path.dirname())

        return (
            <div className="DetailProductPage">
                <img src={require(`${product.src}`).default} />
                <div className="DetailText">
                    <h3>{product.name}</h3>
                    <div className="priceAndVolume">
                        <h4>£{product.price}</h4>
                        {volumeSlash}
                        <h4>{product.volume}</h4>
                    </div>
                    <h5>{product.brand}</h5>
                    <p>{product.info}</p>
                    {how}
                    {important}
                    {linkToBoutique}
                    <div className="buttonShop" onClick={() => { this.handleClick(product.id) }}>Add to Cart</div>
                    
                </div>
            </div>
        );
    }
}




export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(DetailProductPage);
