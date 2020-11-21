import React from "react"
import "./sobre.css"
import FotoSobre from "../../images/foto_sobre.jpg"

const Sobre = () => (
    <>
        <div className="uk-section uk-section-large sobre">

            <div className="uk-flex uk-flex-middle uk-grid-collapse" data-uk-grid>
                <div className="uk-width-2-5 uk-height-large uk-background-cover" data-uk-parallax="opacity: 0,1; x: -200,0; viewport: 0.5" data-uk-height-viewport="min-height: 640"  style={{ backgroundImage: `url(${FotoSobre})` }}></div>
                <div className="uk-width-3-5 custom-background">                    
                    <h2 className="section-title"><em>01.</em>Sobre</h2>
                    <p>Oi! Eu sou o Alexander, designer e desenvolvedor front end no Rio de Janeiro, RJ, que adora construir coisas que vivem na internet. Eu projeto websites e aplicações web que provem uma experiência única e intuitiva para o usuário, com interfaces leves, fluídas e eficazes.</p>
                    <p>Depois de ter passado praticamente os últimos 4 anos trabalhando no meu próprio estúdio de design, Design Acessível, voltei a trabalhar no mundo corporativo como Desenvolvedor Front End pela Ebix Latin America, onde permaneci por 9 meses, atuando em uma variedade de projetos e após o término, decidi empreender como freelancer.</p>
                    <p>A seguir, tecnologias que eu mais tenho trabalhado recentemente:</p>
                    <div className="uk-flex uk-grid-large" data-uk-grid>
                        <div className="">
                            <ul className="uk-list">
                                <li>Javascript (ES6+)</li>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>WordPress</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                <li>HTML & (S)CSS</li>
                                <li>AngularJS</li>
                                <li>Express</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
)

export default Sobre