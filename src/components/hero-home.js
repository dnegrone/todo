import React from "react"
import { Link } from "gatsby"
import "./hero-home.css"
import FotoAlexander from "../images/foto_sobre.jpg"

const HeroHome = () => (
    <div className="uk-section uk-padding-remove-top">
        {/* main message */}
        <div className="uk-card uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
            <div className="uk-width-small uk-align-center uk-first-column">
                <img src={FotoAlexander} alt="Foto do Alexander Cesar" className="uk-border-circle" uk-cover />
            </div>
            <div className="uk-card-body uk-padding-medium" style={{paddingTop: '20px'}}>
                <h2 className="uk-margin-remove uk-padding-remove">Alexander Cesar</h2>
                <h3 className="uk-margin-remove uk-padding-remove">Designer & Empreendedor</h3>
                <h4 className="uk-margin-remove uk-padding-remove">Rio de Janeiro / Brasil</h4>
            </div>        

        </div>
    </div>
)

export default HeroHome