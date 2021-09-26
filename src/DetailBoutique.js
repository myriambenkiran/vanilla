import React, { Component } from 'react';
import boutiques from './json/boutiques.json';
import { withRouter } from 'react-router';
import './style/DetailProductPage.css';
import './style/Home.css';
import { connect } from 'react-redux';
import { compose } from "redux";



class DetailBoutique extends React.Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {

        const boutiqueId = this.props.match.params.boutiqueId;
        const boutique = boutiques.filter(p => p.id === boutiqueId)[0];


        return (
            <div className="DetailProductPage">
                <img src={require(`${boutique.src}`).default} />
                <div className="DetailText">
                    <h3>{boutique.name}</h3>

                    <p>{boutique.info}</p>
                    <p><strong>Address:</strong> {boutique.address}</p>
                    <p><strong>Brands available:</strong> {boutique.brands}</p>
                </div>
            </div>
        );
    }
}




export default withRouter(DetailBoutique);
