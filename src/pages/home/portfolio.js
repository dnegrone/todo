import React from "react"
import "./portfolio.css"

import CapaPetrobras from "../../images/capa_petrobras_2.png"
import CapaArenaOn from "../../images/capa_arenaon.png"
import CapaKawasaki from "../../images/capa_kawasaki.png"

const HomePortfolio = () => (
    <>
        <div className="uk-section portfolio">
            <header>
                <h2 className="uk-heading-medium" data-uk-scrollspy="cls: uk-animation-slide-top-small; repeat: true; delay: 250">Portfolio</h2>
                <h3 className="uk-h3" data-uk-scrollspy="cls: uk-animation-slide-bottom-small; repeat: true; delay: 250">Conheça um pouco sobre os meus trabalhos.</h3>
            </header>
            
            <div className="uk-container uk-width-3-4" data-uk-slideshow="animation: pull">

                <div className="uk-position-relative uk-visible-toggle uk-light">
                    <ul className="uk-slideshow-items">
                        <li>
                            <div class="uk-position-cover uk-inline-clip uk-transition-toggle">
                                <img src={CapaPetrobras} alt="Localizador de Pessoas @ Petrobras" data-uk-cover />
                                <div class="uk-transition-slide-left uk-position-left">
                                    <h4 class="uk-h4 uk-margin-remove">Localizador de Pessoas</h4>
                                    <h5 class="uk-h4 uk-margin-remove">Petrobras</h5>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="uk-position-cover uk-inline-clip uk-transition-toggle">
                                <img src={CapaArenaOn} alt="ArenaOn - Plataforma para Campeonatos de eSports @ eSports" data-uk-cover />
                                <div class="uk-transition-slide-left uk-position-left">
                                    <h4 class="uk-h4 uk-margin-remove">ArenaOn</h4>
                                    <h5 class="uk-h4 uk-margin-remove">eSports</h5>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="uk-position-cover uk-inline-clip uk-transition-toggle">
                                <img src={CapaKawasaki} alt="Concession?ria Motoflecha Kawasaki @ Kawasaki" data-uk-cover />
                                <div class="uk-transition-slide-left uk-position-left">
                                    <h4 class="uk-h4 uk-margin-remove">Motoflecha Kawasaki</h4>
                                    <h5 class="uk-h4 uk-margin-remove">Kawasaki</h5>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <button type="button" class="uk-position-center-left uk-position-small uk-hidden-hover" data-uk-slidenav-previous data-uk-slideshow-item="previous" />
                    <button type="button" class="uk-position-center-right uk-position-small uk-hidden-hover" data-uk-slidenav-next data-uk-slideshow-item="next" />
                </div>

                    <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

                </div>
            </div>

    </>
)

export default HomePortfolio