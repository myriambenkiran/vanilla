import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from "redux";
import {withRouter} from 'react-router';
import { removeItem,addQuantity,subtractQuantity} from './cartActions.js';
import Recipe from './Recipe.js';
import './style/Cart.css';





class Cart extends Component{

        //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render(){
              
        let addedItems = this.props.addedItems.length ?
            <div>
                <h4>YOUR PAYMENT IS SECURE</h4>
                <p>Pay safely by debit card upon our eco-delivery.</p>
                {this.props.addedItems.map(item=> <CartItem key={item.id} {...item} handleRemove={this.handleRemove} handleSubtractQuantity={this.handleSubtractQuantity} handleAddQuantity={this.handleAddQuantity}/>)}
                <Recipe/>
            </div>
            :<div className="NothingInBag">
                <h4>Nothing in your bag yet.</h4>
                <Link to="./shop"><div className="buttonShop">Start shopping</div></Link>
            </div>
             
       return(
            <div className="container">
                <div className="Cart">
                    <h2>CART {this.props.totalQuantity?`(${this.props.totalQuantity})`:""}</h2>

                    {addedItems}
                    <div className="Paragraph">
                        <h3>Need help?</h3>
                        <p>Contact us to get personalised support</p>
                        <p>Email: support@vanilladelivery.com</p>
                        <p>Call: +447737832909</p>
                 </div>
                </div>  
            </div>
       );
    }
}

class CartItem extends Component{

    render(){

        let product = this.props;
                let volumeSlash;
        let volumeText;
        if(product.volume){
            volumeSlash = <p>/</p>
            volumeText = `- ${product.volume} `
        }


         return(
         <div className="CartItem">
             <div className="image">
                <Link to={`./shop/${product.id}`}><img style={{width:"200px"}} src={require(`${product.src}`).default}/></Link>
            </div>
            <div className="productInfo">
                <h3>{product.name}</h3>
                <div className="priceAndVolume">
                    <p>£{product.price}</p>
                    {volumeSlash}
                    <p>{product.volume}</p>
                </div>
                <p>{product.brand.toUpperCase()}</p>
            
                <div className="Quantity">
                    <Link to="/cart"><button onClick={()=>{this.props.handleSubtractQuantity(product.id)}}>-</button></Link>
                    <div>Quantity: {product.quantity}</div> 
                    <Link to="/cart"><button onClick={()=>{this.props.handleAddQuantity(product.id)}}>+</button></Link>
                </div>
                <div className="remove" onClick={()=>{this.props.handleRemove(product.id)}} >Remove</div>
            </div>
         </div>
                   
         );
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        totalQuantity: state.totalQuantity
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Cart);
