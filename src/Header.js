import React from 'react';
import './style/Header.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';
import { connect } from 'react-redux';
import { compose } from "redux";


class Header extends React.Component {

    render() {
        return (
        	<div className="Header" id="HEADER">
        		<Link className="home" to="/"><h1>Vanilla</h1></Link>
        		<div className="Menu">
                    	<NavLink exact activeClassName="current "to="/shop/all"> e-Shop </NavLink>
                    	<NavLink exact activeClassName="current "to="/about"> About </NavLink>
                    	<NavLink exact activeClassName="current "to="/contact"> Help </NavLink>
                        <NavLink exact activeClassName="current "to="/cart"> Cart ({this.props.totalQuantity}) </NavLink>
        		</div>
        	</div>

       	);
    }
}

const mapStateToProps = (state)=>{
return {
    totalQuantity: state.totalQuantity
     }
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Header);