import React from 'react';
import { NavLink, useLocation } from 'react-router-dom'

const Navigation = ({ dimensions }) => {

	const location = useLocation();

	return (
		<nav>
			<div className="container">
				<div className="nav-columns">
					<div className="nav-column">
						<div className="nav-label">Menu</div>
						<ul className="nav-links">
							<li>
								<NavLink to="about" className={ location.pathname === 'about' ? 'active' : null } exact>About</NavLink>
							</li>
							<li>
								<NavLink to="skills" className={ location.pathname === 'skills' ? 'active' : null } exact>Skills</NavLink>
							</li>
							<li>
								<NavLink to="work" className={ location.pathname === 'work' ? 'active' : null } exact>Work</NavLink>
							</li>
						</ul>
					</div>
					<div className="nav-column">
						<div className="nav-label">Contact</div>
						<ul className="nav-info">
							<li className="nav-info-label">Email</li>
							<li><a href="mailto:kasun4it@gmail.com" title="Click to mail">kasun4it@gmail.com</a></li>
							<li className="nav-info-label">Phone</li>
							<li><a href="tel:+94766434646" title="Click to call">+94 766 434 646</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navigation
