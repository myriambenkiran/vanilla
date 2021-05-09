
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from "redux";
import {withRouter} from 'react-router';
import './style/Cart.css';

class Recipe extends Component{

    onSubmit = (products) => {
        const templateId = 'template_test';
        const serviceID = 'zoho';
        //this.sendFeedback(serviceID, templateId, { user_name: this.state.username, user_phone: this.state.phone, user_email: this.state.email, message: this.state.products, total: this.props.total });
    }

    sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }


    render(){

        let products = "";
        products += `%0a`;
        for (var i = 0; i < this.props.addedItems.length; i++) {
            let volume = this.props.addedItems[i].volume ? ` (${this.props.addedItems[i].volume})` : "";
            products += `%0a`;
            products += `${this.props.addedItems[i].quantity}x ${this.props.addedItems[i].name}${volume} - ${this.props.addedItems[i].brand}, £${this.props.addedItems[i].price},`;
        }
        products = products.slice(0, -1);
        products += `%0a`;
        products += `%0a`;
        products += `Total (incl. £2 delivery): £${this.props.total+2}`;
        
        return(
            <div className="Recipe">
                <h3>Summary</h3>
                <p>Subtotal: £{this.props.total} </p>
                <p>Delivery: £2</p>
                <h4>Total: £{this.props.total+2} </h4>


                <a className="quickBuy" href={`https://wa.me/+447737832909?text=Tap send to order! ${products}.`}><div className="buttonShop">Request a delivery</div></a>
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