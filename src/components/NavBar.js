import React from 'react'
import { Link } from "react-router-dom";


export default function NavBar() {
	return (
		<nav>
		  <ul className="nav-link">
			<li className="link">
			  <Link to="/">
				Home
			  </Link>
			</li>
			<li className="link">
			  <Link to="/weather">
				Weather
			  </Link>
			</li>
			<li className="link">
			  <Link to="/Calendar">
				Calendar
			  </Link>
			</li>
			<li className="link">
			  <Link to="/shop">
				Shopping
			  </Link>
			</li>
			<li className="link">
			  <Link to="/login">
				Login
			  </Link>
			</li>
		  </ul>
		</nav>
	)
}
