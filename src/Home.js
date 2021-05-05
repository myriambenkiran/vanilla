import React from 'react';
import './style/Home.css';
import {Img} from 'react-image'
import HomePage1 from './images/homePage1.jpg';
import HomePage2 from './images/homePage2.jpg';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';
import { load } from 'react-require';


const steps = [
    {
        "id": "1",
        "title": "Give your skin LOVE",
        "src": "./images/step1.jpg",
        "instructions": "Your skin deserves the best! That’s a given! You will find what she deserves within our range of products!",
    },
    {
        "id": "2",
        "title": "Own your beauty and time",
        "src": "./images/step2.jpg",
        "instructions": "There are few things in life that can claim to be more precious than time. Place an order in seconds, receive in minutes!"
    },
    {
        "id": "3",
        "title": "Love your skin and your Planet",
        "src": "./images/step3.jpg",
        "instructions": "Just like you, we are committed to do our part for our beloved Planet! We only use bikes and no additional packaging."
    }
];


const text =[
        "We enable you to order beauty and hair care products from local shops and we deliver your order where and when you want, by bikes. 80% - 100% of what you need or want is available locally. We offer you the power to shop for beauty in a smarter and more environmentally conscious way.",
        "Our service is designed to address unnecessary pollution, unnecessary hassle, waste of time and other avoidable problems resulting from traditional e-commerce. When you order your beauty and hair care products with us, you contribute to develop a smarter and more environmentally conscious e-commerce that lets you control your time by deciding when and where you want to receive your order and reduce your environmental impacts by favouring a 100% pollution-free delivery over traditional shipping."
        ]

const recycleText = "Get your empties collected for £2 fee. Any size product from any beauty brand are welcomed. Even those not bought with us. Collection is free for products ordered with us."


class Home extends React.Component {


    render() {
        return (
        	<div className="HomePage">
        		<Main/>
                <div className="recycle">
                    <h2>RECYCLING SCHEME</h2>
                    <p>{recycleText}</p>
                    <a href="https://wa.me/+447737832909?text=Thanks for doing this. Tap send to start arranging a collection"><div className="buttonShop">Recycle</div></a>
                </div>
                <Why/>
                <Comments/>
                <WhyVanilla/>
        	</div>

       	);
    }
}

class Main extends React.Component {


    render() {
        return (
        	<div className="HomePage1">
        		<div className="HomePage1Text">
        			<h2>SHOP FOR BEAUTY</h2>
        			<p>{text[0]}</p>
                    <a href="/shop"><div className="buttonShop">Shop</div></a>
        		</div>
               <div className="Image">
                    <img src={HomePage1} />
                </div>
        	</div>

       	);
    }
}

class Why extends React.Component {


    render() {
        return (
            <div className="HomePage2">
                <div className="Image">
                    <img src={HomePage2} />
                </div>
                <div className="HomePage2Text">
                    <h2>YOUR LOCAL BEAUTY E-STORE</h2>
                    <p>{text[1]}</p>
                    <a href="/shop"><div className="buttonShop">Shop</div></a>
                </div>

            </div>

        );
    }
}

class Comments extends React.Component {


    render() {
        return (
            <div className="Review">
                <h2>WHAT OUR USERS SAY ABOUT THEIR EXPERIENCE</h2>
                <p>“I wanted to try a product straight away and your service made it possible. Loved it!”<br/>Maya - SW3, London</p>
                <p>“First time using it after a friend’s recommendation. I wasn't expecting such a lovely experience!”<br/>Sarah - SW10, London</p>
                <p>“I loved it! Especially the fact that the delivery was totally pollution-free and no additional packaging were used.”<br/>Emma - SW5, London</p>
                <a href="/shop"><div className="buttonShop">Try it yourself</div></a>
            </div>

        );
    }
}

class WhyVanilla extends React.Component {


    render() {
        return (
            <div className="SignUp">
                <h3>Why Vanilla?</h3>
                <p>All the products you need (want). Delivery by bikes where and when you want. Pollution and Packaging free delivery. Recycling made easy.</p>
                <a href="https://wa.me/+447737832909?text=So grateful to count you amongst us. Send us your name and email address to be added into our list of users"><div className="buttonShop">Sign Up</div></a>
            </div>

        );
    }
}



export default withRouter(Home);
