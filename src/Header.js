import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import {withRouter} from 'react-router';


class Header extends React.Component {


    render() {
        return (
        	<div className="Header">
        		<div className="Top_Banner">
        			<p>No minimum order size | Just £5 delivery fee | Send a text to order: (+44) 773 783 29 09 </p>
        		</div>
        		<h1>Vanilla</h1>
        		<div className="Menu">
                    	<NavLink exact activeClassName="current "to="/"> Home </NavLink>
                    	<NavLink exact activeClassName="current "to="/about"> Get to know us </NavLink>
                    	<NavLink exact activeClassName="current "to="/contact"> Help </NavLink>
        		</div>
        	</div>

       	);
    }
}


export default withRouter(Header);