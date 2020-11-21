import React from "react"
import { Link } from "gatsby"
import "./navbar.css"

const Navbar = () => (
    <>
        <nav class="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
            <div class="uk-navbar-left">
                <Link to="/" className="brand">
                    <h1>A.</h1>
                </Link>
            </div>
            <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <li><Link to="/#sobre" data-uk-scroll><em>01.</em> Sobre</Link></li>
                    <li><Link to="/#experiencia" data-uk-scroll><em>02.</em> Experiência</Link></li>
                    <li><Link to="/#portfolio" data-uk-scroll><em>03.</em> Portfólio</Link></li>
                    <li><Link to="/#servicos" data-uk-scroll><em>04.</em> Serviços</Link></li>
                    <li><Link to="/#contato" data-uk-scroll><em>05.</em> Contato</Link></li>
                    <li><Link to="/#curriculum"><span className="curriculum">Curriculum</span></Link></li>
                </ul>
            </div>
        </nav>
    </>
)

export default Navbar