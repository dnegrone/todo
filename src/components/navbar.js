import React from "react"
import { Link } from "gatsby"
import "./navbar.css"

const Navbar = () => (
    <>
        <nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
            <div className="uk-navbar-left">
                <Link to="/" className="brand">
                    <h1>A.</h1>
                </Link>
            </div>
            <div className="uk-navbar-right">
                <button className="uk-button uk-button-link uk-margin-small-right" type="button" data-uk-toggle="target: #offcanvas-usage"><span data-uk-navbar-toggle-icon></span></button>
            </div>
        </nav>

        <div id="offcanvas-usage" data-uk-offcanvas="overlay: true; flip: true">
            <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                <button className="uk-offcanvas-close" type="button" data-uk-close></button>


                <ul className="uk-nav uk-nav-default uk-nav-center uk-margin-auto-vertical">
                    <li><Link to="/" data-uk-scroll>Home</Link></li>
                    <li><Link to="/#sobre" data-uk-scroll>Sobre</Link></li>
                    <li><Link to="/#servicos" data-uk-scroll>Serviços</Link></li>
                    <li><Link to="/#portfolio" data-uk-scroll>Portfolio</Link></li>
                    <li><Link to="/#contato">Contato</Link></li>
                </ul>

            </div>
        </div>
    </>
)

export default Navbar