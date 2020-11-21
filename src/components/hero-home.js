import React from "react"
import { Link } from "gatsby"
import "./hero-home.css"

const HeroHome = () => (
    <div className="uk-section uk-padding-remove-top">
        {/* main message */}
        <div className="uk-grid-medium uk-flex uk-flex-auto" data-uk-grid>
            <div className="main-header">
                <div className="uk-container">
                    <h2 className="uk-heading-medium"><small>Oi! Eu me chamo</small>Alexander Cesar.</h2>
                    <h3 className="uk-heading-medium">Eu faço design para a web.</h3>
                    <h4 className="uk-heading-medium">Usar o design para melhorar produtos, conectar pessoas e fazer o bem.</h4>
                    <Link to="/" className="uk-button-secondary uk-button-large">Entre em contato <span className="emoji" role="img" aria-labelledby="Mão acenando">👋🏾</span></Link>
                </div>
            </div>
        </div>
    </div>
)

export default HeroHome