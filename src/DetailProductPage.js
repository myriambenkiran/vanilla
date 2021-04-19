import React from 'react';
import products from './json/productnew.json';
import {withRouter} from 'react-router';
import './style/DetailProductPage.css';


class DetailProductPage extends React.Component {

    render() {

        const productId = this.props.match.params.productId;
        const product = products.filter(p => p.id === productId)[0];

        let how;
        let important;
        let volumeSlash;
        let volumeText;

        if(product.how){
            how = <p><strong>How to use: </strong>{product.how}</p>
        }

        if(product.important){
             important = <p><strong>Note: </strong>{product.important}</p>
        }

        if(product.volume){
            volumeSlash = <h4>/</h4>
            volumeText = `- ${product.volume} `
        }

        return (
        	<div className="DetailProductPage">
                <img src={require(`${product.src}`).default}/>
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
                <a className="quickBuy" href={`https://wa.me/+447737832909?text=Tap send to add ${product.name} ${volumeText}from ${product.brand.toUpperCase()} to your bag (£${product.price}).`}><div className="buttonShop">Get it now</div></a>
                </div>
            </div>
       	);
    }
}


export default withRouter(DetailProductPage);
