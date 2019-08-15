import React, { Component } from 'react';

const Menu = () => {
	return (
		<nav id="menu">
			<div className="container">
				<div className="aux-nav fa-inverse">
					<div className="brand">
						<h1><a href="/">Alexander.</a></h1>
					</div>
					<div className="toggle-menu">
						<i className="fa fa-bars fa-2x"></i>
					</div>
				</div>
				<div className="main-nav">
					<div className="brand">
						<h1><a href="/">Alexander.</a></h1>
					</div>
					<div className="toggle-menu">
						<i className="fa fa-close fa-2x"></i>
					</div>
					<ul className="unstyled-list">
						<li><a href="/">Home</a></li>
						<li><a href="/servicos/call.html">Call Estratégica de 1h</a></li>
						<li><a href="/">Consultoria de UX/UI</a></li>
						<li><a href="https://be.net/alexcesar">Portfólio</a></li>
						<li><a href="contato/index.html">Contato</a></li>
					</ul>
					<div className="layer"></div>
				</div>
			</div>
		</nav>	
	)
}

export default Menu;
	