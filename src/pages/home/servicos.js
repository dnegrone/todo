import React from "react"
import "./servicos.css"
import FotoServicos from "../../images/criacao-de-sites.png"

const HomeServicos = () => (
    <>
        <div id="servicos" className="uk-section uk-section-large servicos">
            <header>
                <h2 className="uk-heading-medium" data-uk-scrollspy="cls: uk-animation-slide-top-small; repeat: true; delay: 250">Serviços</h2>
                <h3 className="uk-h3" data-uk-scrollspy="cls: uk-animation-slide-bottom-small; repeat: true; delay: 250">Veja o que eu posso fazer por você hoje.</h3>
            </header>
            <div className="uk-flex uk-flex-center uk-flex-middle" data-uk-grid>
                <div className="uk-width-1-2">
                    <img src={FotoServicos} alt="Criação de Sites" />
                </div>
                <div className="uk-width-1-2 uk-container uk-container-xsmall">
                    <ul data-uk-accordion>
                        <li>
                            <h4 class="uk-accordion-title">Criação de Sites</h4>
                            <div class="uk-accordion-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </li>
                        <li>
                            <h4 class="uk-accordion-title">Criação de Logotipos</h4>
                            <div class="uk-accordion-content">
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                            </div>
                        </li>
                        <li>
                            <h4 class="uk-accordion-title">Design para Social Media</h4>
                            <div class="uk-accordion-content">
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                        </li>
                        <li>
                            <h4 class="uk-accordion-title">Serviços de Design Gráfico</h4>
                            <div class="uk-accordion-content">
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                        </li>
                        <li>
                            <h4 class="uk-accordion-title">Design de Apps</h4>
                            <div class="uk-accordion-content">
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                        </li>
                        <li>
                            <h4 class="uk-accordion-title">Identidade Visual Corporativa</h4>
                            <div class="uk-accordion-content">
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                        </li>
                        <li>
                            <h4 class="uk-accordion-title">Edição de imagens</h4>
                            <div class="uk-accordion-content">
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                        </li>
                        <li>
                            <h4 class="uk-accordion-title">Consultoria em UX Design</h4>
                            <div class="uk-accordion-content">
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
)

export default HomeServicos