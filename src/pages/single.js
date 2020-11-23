import React from "react"
import { Link } from "gatsby"
import "./single.css"

import FotoAlexander from "../images/foto_sobre.jpg"
import CapaPetrobras from "../images/capa_petrobras_2.png"
import CapaArenaOn from "../images/capa_arenaon.png"
import CapaKawasaki from "../images/capa_kawasaki.png"

const SinglePage = () => (
	<>
		{/* Nav */}
		<nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
            <div className="uk-navbar-left">
                <Link to="/" className="brand">
                    <h1 className="uk-margin-small-left">A.</h1>
                </Link>
            </div>
            <div className="uk-navbar-right">
                <button className="uk-button uk-button-link uk-margin-right" type="button" data-uk-toggle="target: #offcanvas-usage"><span data-uk-icon="icon: menu; ratio: 1.5"></span></button>
            </div>
        </nav>
		{/* Menu */}
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

		{/* About */}
		<section id="sobre" className="uk-section uk-section-xsmall">
			<div className="uk-container uk-container-small">
				<div className="uk-flex uk-flex-wrap uk-flex-middle uk-flex-center" data-uk-grid>
					<div className="uk-flex-first">
						<img src={FotoAlexander} alt="Foto do Alexander Cesar" className="avatar" />
					</div>
					<div>
						<h2 className="uk-margin-remove uk-padding-remove uk-text-bold">Alexander Cesar</h2>
						<h3 className="uk-margin-remove uk-padding-remove">Designer & Empreendedor</h3>
						<h4 className="uk-margin-small-top uk-text-light"><span data-uk-icon="icon: location; ratio: 1.2"></span> Rio de Janeiro / Brasil</h4>
					</div>
				</div>
			</div>
		</section>

		{/* Services */}
		<section id="servicos" className="uk-section uk-section-large services">
			<div className="uk-container uk-container-small">
				<h2 className="uk-text-bold">Eu uso <span className="uk-text-danger">design</span> para</h2>
				<ul className="uk-list">
					<li className="uk-heading-small uk-text-bold" data-uk-scrollspy="cls: uk-animation-slide-top; delay: 500; repeat: true">Resolver Problemas</li>
					<li className="uk-heading-small uk-text-bold" data-uk-scrollspy="cls: uk-animation-slide-right; delay: 500; repeat: true">Melhorar UX de Produtos e Serviços</li>
					<li className="uk-heading-small uk-text-bold" data-uk-scrollspy="cls: uk-animation-slide-left; delay: 500; repeat: true">Conectar Pessoas</li>
					<li className="uk-heading-small uk-text-bold" data-uk-scrollspy="cls: uk-animation-slide-bottom; delay: 500; repeat: true">Fazer o Bem</li>
				</ul>
			</div>
		</section>

		{/* Featured Works*/}
		<section id="portfolio" className="uk-section uk-section-xsmall featured-works">
			<div className="uk-container uk-container-small">
				<h2 className="uk-text-bold">Trabalhos Selecionados</h2>
				<div className="uk-width-1-1" data-uk-slideshow="animation: slide">
					<div className="uk-position-relative uk-visible-toggle uk-light">
						<ul className="uk-slideshow-items" uk-height-viewport="offset-top: true; offset-bottom: 30">
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
										<h4 class="uk-h4 uk-margin-remove">Motoflecha</h4>
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
		</section>

		{/* Contact */}
		<section id="contato" className="uk-section uk-section-xsmall">
			<div className="uk-container uk-container-small">
				<h2 className="uk-text-bold">Contato</h2>
				<div className="uk-grid-small" data-uk-grid>
					<div>
						<h3 className="uk-h4">Para orçamentos e propostas de trabalho</h3>
						<ul className="uk-list uk-margin-bottom">
							<li><Link to="https://api.whatsapp.com/send?phone=5521982023401&text=Quero+conhecer+mais+sobre+o+WhatsCard" className="uk-margin-right uk-link-reset"><span className="uk-margin-small-right" data-uk-icon="icon: whatsapp; ratio: 1.5"></span>+55 (21) 98202-3401</Link></li>
							<li><Link to="mailto:alexcesar@alexcesar.com?subject=E-mail%20do%20site%20alexcesar.com&body=Gostaria%20de%saber%mais%sobre%os%seus%serviços%de%design" className="uk-margin-right uk-link-reset"><span className="uk-margin-small-right" data-uk-icon="icon: mail; ratio: 1.5"></span>alexcesar@alexcesar.com</Link></li>
						</ul>
					</div>
					<div className="uk-margin-large-left@m">
						<h3 className="uk-h4">Conheça os meus trabalhos nas redes sociais</h3>
						<div className="uk-flex uk-flex-center">
							<Link to="https://www.instagram.com/alexcesar.com.design/" target="_blank" className="uk-margin-right" data-uk-icon="icon: instagram; ratio: 1.5"></Link>
							<Link to="https://www.linkedin.com/in/alexandercesar/" className="uk-margin-right" data-uk-icon="icon: linkedin; ratio: 1.5"></Link>
							<Link to="https://be.net/alexcesar" className="uk-margin-right" data-uk-icon="icon: behance; ratio: 1.5"></Link>
							<Link to="https://dribbble.com/alexcesar" className="uk-margin-right" data-uk-icon="icon: dribbble; ratio: 1.5"></Link>
							{/* <Link to="/" className="uk-margin-right" data-uk-icon="icon: facebook; ratio: 1.5"></Link>
							<Link to="/" className="uk-margin-right" data-uk-icon="icon: youtube; ratio: 1.5"></Link> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	</>
)

export default SinglePage