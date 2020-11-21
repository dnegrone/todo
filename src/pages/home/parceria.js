import React from "react"
import "./parceria.css"
import LogoEmpresas from "../../images/logos_empresas.png"

const Parceria = () => (
    <>
        <div className="uk-section uk-section-default uk-section-large parceria">
            <div className="uk-container">
                <h2 className="uk-heading-medium">Uma questão de confiança e parceria.</h2>
                <h3 className="uk-h2">Algumas empresas que confiaram em mim em mais de 20 anos de carreira.</h3>
                <img src={LogoEmpresas} alt="Nunca se veja como um empregado. Sempre se veja como um parceiro. Vá e dê o seu melhor." />
            </div>
        </div>
    </>
)

export default Parceria