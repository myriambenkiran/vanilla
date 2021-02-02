import React from 'react';
import './style/Header.css';
import { NavLink } from 'react-router-dom';
import {withRouter} from 'react-router';


class Header extends React.Component {


    render() {
        return (
        	<div className="Header">
        		<div className="Top_Banner">
        			<p>Try us today and enjoy a free delivery. You will love it!</p>
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