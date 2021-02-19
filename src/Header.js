import React from 'react';
import './style/Header.css';
import { NavLink } from 'react-router-dom';
import {withRouter} from 'react-router';


class Header extends React.Component {


    render() {
        return (
        	<div className="Header">
        		<div className="Top_Banner">
        			<p>We need your feedback. Try us today and enjoy a free delivery. You will love it!</p>
        		</div>
        		<a href="/"><h1>Vanilla</h1></a>
        		<div className="Menu">
                    	<NavLink exact activeClassName="current "to="/shop"> Shop </NavLink>
                    	<NavLink exact activeClassName="current "to="/about"> Get to know us </NavLink>
                    	<NavLink exact activeClassName="current "to="/contact"> Help </NavLink>
        		</div>
        	</div>

       	);
    }
}


export default withRouter(Header);