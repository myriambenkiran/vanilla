
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from "redux";
import {withRouter} from 'react-router';
import './style/Cart.css'
//import { addShipping } from './cartActions.js'

class Recipe extends Component{

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    

    render(){

        let products = "";
        for (var i = 0; i < this.props.addedItems.length; i++) {
            products += "%0D%0A";
            products += `⚫ *${this.props.addedItems[i].name}* quanity:, volume:, `;
        }
        
        return(
            <div className="Recipe">
                <h3>Summary</h3>
                <p>Subtotal: £{this.props.total} </p>
                <p>Delivery: £2</p>
                <h4>Total: £{this.props.total+2} </h4>
                <a className="quickBuy" href={`https://wa.me/+447737832909?text=Tap send to confirm your order: ${products}.`}><div className="buttonShop">Request a delivery</div></a>
                <p>*You'll choose your delivery option after this step.</p>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        //addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default compose(
  withRouter,
connect(mapStateToProps,mapDispatchToProps)
)(Recipe);