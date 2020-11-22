import React from "react"
import "./servicos.css"
import FotoServicos from "../../images/criacao-de-sites.png"

const HomeServicos = () => (
    <>
        <div className="uk-section">
            {/* <header>
                <h2 className="uk-heading-medium" data-uk-scrollspy="cls: uk-animation-slide-top-small; repeat: true; delay: 250">Serviços</h2>
                <h3 className="uk-h3" data-uk-scrollspy="cls: uk-animation-slide-bottom-small; repeat: true; delay: 250">Veja o que eu posso fazer por você hoje.</h3>
            </header> */}
            <div className="uk-flex uk-flex-middle" data-uk-grid>
                <div className="uk-width-1-3 uk-hidden@s uk-hidden-touch">
                    <img src={FotoServicos} alt="Criação de Sites" className="uk-width-large" />
                </div>
                <div className="uk-container uk-container-xsmall uk-align-left">
                    <ul data-uk-accordion>
                        <li>
                            <div className="uk-accordion-title">(Re)Design de Sites</div>
                            <div class="uk-accordion-content">
                                Todos os sites são responsivos. O conteúdo pode ser estático ou utilizando CMS, como WordPress, por exemplo.
                            </div>
                        </li>
                        <li>
                            <div className="uk-accordion-title">Design de Apps</div>
                            <div class="uk-accordion-content">
                                Design e prototipação de Apps. Figma, Sketch, Adobe XD.
                            </div>
                        </li>
                        <li>
                            <div className="uk-accordion-title">Design para Social Media</div>
                            <div class="uk-accordion-content">
                                Posts e Stories para Instagram e Facebook. Além de todas as outras mídias sociais.
                            </div>
                        </li>
                        <li>
                            <div className="uk-accordion-title">Serviços de Design Gráfico</div>
                            <div class="uk-accordion-content">
                                Papelaria, cartões de visita impressos e virtuais (para WhatsApp e Telegram), Flyers, Folders, Embalagens, etc.
                            </div>
                        </li>
                        <li>
                            <div className="uk-accordion-title">Identidade Visual Corporativa</div>
                            <div class="uk-accordion-content">
                                Branding completo ou serviços individuais como Criação de Logotipo, Manual da Marca, Assinaturas, etc. 
                            </div>
                        </li>
                        <li>
                            <div className="uk-accordion-title">Edição de imagens</div>
                            <div class="uk-accordion-content">
                                Edição de imagem em nível profissional para fotógrafos ou agências de design.
                            </div>
                        </li>
                        <li>
                            <div className="uk-accordion-title">Consultoria em UX Design</div>
                            <div class="uk-accordion-content">
                                Melhoria de sistemas e aplicações/aplicativos web. Treinamento de equipe. Desenvolvimento Front End de interfaces.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="servicos"></div>
        </div>
    </>
)

export default HomeServicos