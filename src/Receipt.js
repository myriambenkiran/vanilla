
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from "redux";
import {withRouter} from 'react-router';
import './style/Cart.css';

class Recipe extends Component{

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

                <Checkout products={products}/>

                <a className="quickBuy" href={`https://wa.me/+447737832909?text=Tap send to order! ${products}.`}><div className="buttonShop">Request a delivery</div></a>
                <p>*A rider will contact you shortly to arrange your delivery.</p>
            
            </div>
        )
    }
}



class Checkout extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: "",
            phone: "",
            email: ""
        }
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit = () => {
        const templateId = 'template_test';
        const serviceID = 'zoho';
        alert("username: " + this.state.username + " phone: " + this.state.phone + " email: " + this.state.email);
        alert(this.props.products);
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
        return(
            <div>
            <input name="username" type='text' onChange={this.changeHandler}/>
            <input name="phone" type='text' onChange={this.changeHandler}/>
            <input name="email" type='text' onChange={this.changeHandler}/>
            <button type="submit" onClick={this.onSubmit}> Send mail </button>
            </div>
        );
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