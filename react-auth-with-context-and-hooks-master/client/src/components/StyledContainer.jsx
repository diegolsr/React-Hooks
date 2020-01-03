import React from 'react';

export default function StyledContainer({ title, children }) {
	return (
		<div className="container">
			<header className="section">
				<h2 className="title has-text-centered">{title}</h2>
			</header>
			<section className="section">{children}</section>
			<footer>
				<div className="content has-text-centered">
					Footer placeholder
				</div>
			</footer>
		</div>
	);
}
