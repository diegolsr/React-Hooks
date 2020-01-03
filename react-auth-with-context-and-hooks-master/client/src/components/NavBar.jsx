import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

function Menu({ start, end }) {
	return (
		<div className="navbar-menu">
			<div className="navbar-start">{start}</div>
			<div className="navbar-end">{end}</div>
		</div>
	);
}

function Brand({ linkUrl, imgUrl, alt = null }) {
	return (
		<div className="navbar-brand">
			<NavItem>
				<NavLink to={linkUrl}>
					<img src={imgUrl} alt={alt ? alt : 'brand logo'} />
				</NavLink>
			</NavItem>
		</div>
	);
}

function NavItem({ children }) {
	return <div className="navbar-item">{children}</div>;
}

export default function NavBar({ user }) {
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<Brand
				linkUrl="/"
				imgUrl="https://bulma.io/images/bulma-logo.png"
			/>
			<Menu
				start={
					<NavItem>
						{user ? (
							<span>You're logged in</span>
						) : (
							<span>You're not logged in</span>
						)}
					</NavItem>
				}
				end={
					<NavItem>
						{user ? (
							<NavLink to="/logout">Logout</NavLink>
						) : (
							<Fragment>
								<NavLink to="/login">Login</NavLink>
								<NavLink to="/signup">Signup</NavLink>
							</Fragment>
						)}
					</NavItem>
				}
			/>
		</nav>
	);
}
