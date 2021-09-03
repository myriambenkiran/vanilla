import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from "redux";
import { withRouter } from 'react-router';
import { removeItem, addQuantity, subtractQuantity, clearCart } from './cartActions.js';
//import Receipt from './Receipt.js';
import './style/Cart.css';
import Modal from 'react-modal';





class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    closeModal = () => {
        this.setState({ showModal: false });
    }

    openModal = () => {
        this.setState({ showModal: true });
    }

    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }

    render() {

        let addedItems = this.props.addedItems.length ?
            <div>
                <h4>YOUR PAYMENT IS SECURE</h4>
                <p>Pay safely by debit card upon our eco-delivery.</p>
                {this.props.addedItems.map(item => <CartItem key={item.id} {...item} handleRemove={this.handleRemove} handleSubtractQuantity={this.handleSubtractQuantity} handleAddQuantity={this.handleAddQuantity} />)}
                <Receipt addedItems={this.props.addedItems} total={this.props.total} clearCart={this.props.clearCart} openModal={this.openModal} />
            </div>
            : <div className="NothingInBag">
                <h4>Nothing in your bag yet.</h4>
                <Link to="./shop/all"><div className="buttonShop">Start shopping</div></Link>
            </div>

        return (
            <div className="container">
                <div className="Cart">
                    <h2>CART {this.props.totalQuantity ? `(${this.props.totalQuantity})` : ""}</h2>

                    {addedItems}

                    {this.state.showModal && (
                        <Modal
                            isOpen={true}
                            onRequestClose={this.closeModal}
                            className="modal"
                            overlayClassName="overlay"
                        >
                            <button className="close_modal" onClick={this.closeModal}>x</button>
                            <div className="order_details">
                                <h2>THANK YOU FOR SHOPPING WITH US</h2>
                                <p>We’re pleased to confirm that we have received your order. A rider will send you a text shortly to start arranging your delivery. You can contact us at any time if you need anything.</p>
                            </div>
                        </Modal>
                    )}
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

class CartItem extends Component {

    render() {

        let product = this.props;
        let volumeSlash;
        let volumeText;
        if (product.volume) {
            volumeSlash = <p>/</p>
            volumeText = `- ${product.volume} `
        }


        return (
            <div className="CartItem">
                <div className="image">
                    <Link to={`./shop/${product.id}`}><img style={{ width: "200px" }} src={require(`${product.src}`).default} /></Link>
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
                        <Link to="/cart"><button onClick={() => { this.props.handleSubtractQuantity(product.id) }}>-</button></Link>
                        <div>Quantity: {product.quantity}</div>
                        <Link to="/cart"><button onClick={() => { this.props.handleAddQuantity(product.id) }}>+</button></Link>
                    </div>
                    <div className="remove" onClick={() => { this.props.handleRemove(product.id) }} >Remove</div>
                </div>
            </div>

        );
    }
}


class Receipt extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showCheckoutForm: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState({ showCheckoutForm: true });
        console.log(this.state.showCheckoutForm);
    }

    render() {

        let productsWhat = "";
        let products = "";
        productsWhat += `%0a`;
        for (var i = 0; i < this.props.addedItems.length; i++) {
            let volume = this.props.addedItems[i].volume ? ` (${this.props.addedItems[i].volume})` : "";
            productsWhat += `%0a`;
            productsWhat += `${this.props.addedItems[i].quantity}x ${this.props.addedItems[i].name}${volume} - ${this.props.addedItems[i].brand}, £${this.props.addedItems[i].price},`;
            products += `${this.props.addedItems[i].quantity}x ${this.props.addedItems[i].name}${volume} - ${this.props.addedItems[i].brand}, £${this.props.addedItems[i].price},<br/>`;
        }
        productsWhat = productsWhat.slice(0, -1);
        products = products.slice(0, -6);
        productsWhat += `%0a`;
        productsWhat += `%0a`;
        productsWhat += `Total (incl. £2 delivery): £${this.props.total + 2}`;

        return (
            <div className="Recipe">
                <h3>Summary</h3>
                <p>Subtotal: £{this.props.total} </p>
                <p>Delivery: £2</p>
                <h4>Total: £{this.props.total + 2} </h4>


                <div className="buttonShop" onClick={this.handleClick}>Go to checkout</div>

                <CheckoutForm show={this.state.showCheckoutForm} addedItems={this.props.addedItems} total={this.props.total + 2} products={products} clearCart={this.props.clearCart} openModal={this.props.openModal} />
            </div>
        )

        //<a className="quickBuy" href={`https://wa.me/+447737832909?text=Tap send to order! ${products}.`}><div className="buttonShop">Request a delivery</div></a>
    }
}


class CheckoutForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: ""
        }

        this.handleInput = this.handleInput.bind(this);
        this.createOrder = this.createOrder.bind(this);
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            phone: this.state.phone,
            products: this.props.addedItems
        }

        const templateId = 'template_test';
        const serviceID = 'zoho';
        this.sendFeedback(serviceID, templateId, { user_name: this.state.name, user_phone: this.state.phone, message: this.props.products, total: this.props.total });
        this.props.clearCart();
        this.props.openModal();
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

    render() {

        return (
            <div>
                {this.props.show && (
                    <div>
                        <form className="checkoutForm" onSubmit={this.createOrder}>
                            <div className="checkoutFormInput">
                                <label>Name:</label>
                                <input name="name" type="text" required onChange={this.handleInput}></input>
                            </div>
                            <div className="checkoutFormInput">
                                <label>Phone number:</label>
                                <input name="phone" type="phone" required onChange={this.handleInput}></input>
                                <p>We will contact you on this phone number to arrange your delivery, please double check it before checking out.</p>
                            </div>
                            <button className="buttonShop" type="submit">Arrange an eco-delivery</button>
                        </form>
                    </div>

                )}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        totalQuantity: state.totalQuantity,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) },
        substractShipping: () => { dispatch({ type: 'SUB_SHIPPING' }) },
        clearCart: () => { dispatch({ type: 'CLEAR_CART' }) }
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Cart);
