import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
// import UIkit from 'uikit';
// import Icons from 'uikit/dist/js/uikit-icons';
// import 'uikit/dist/css/uikit.min.css';

// UIkit.use(Icons);

const IndexPage = () => (
  <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Alex Cesar.com</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.2.7/dist/css/uikit.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.7/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.7/dist/js/uikit-icons.min.js"></script>
    </Helmet>
    <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'slategray'}}>
        <Link to="/" className="navbar-brand">Alexander Cesar</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/page2/" className="nav-item nav-link">About</Link>
                <Link to="/page2/" className="nav-item nav-link">Portfolio</Link>
                <Link to="/page2/" className="nav-item nav-link">Contact</Link>
            </div>
        </div>
    </nav>
        
    <div class="jumbotron">
        <h1 class="display-4">Testing GatsbyJS!</h1>
        <h2 class="h1">This is a new way to create interesting static sites with dynamic content.</h2>
        <hr class="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <button class="btn btn-primary btn-lg">Learn more</button>
    </div>

    <div data-uk-height-viewport class="uk-section uk-section-muted">
        <div class="uk-container uk-container-small">
            <p class="uk-text-large	uk-text-light uk-text-muted">UX/UI Designer & Front End Dev</p>
            <h2 class="uk-heading-small">Olá! Aqui é o Alexander!</h2>
            <h2 class="uk-heading-medium uk-text-bolder">Eu adoro resolver problemas complexos utilizando design.</h2>
            <h2 class="uk-h2 uk-text-bold">Vamos conversar. Tem um minuto?</h2>
        </div>
    </div>
    <div class="uk-section uk-section-secondary">
        <div class="uk-container uk-container-small">
        <h2 class="uk-heading-medium">Sobre mim</h2>
                <h3 class="uk-h3 uk-text-bold">Eu sou um Web Designer</h3>
                <p>Em pleno 2020, uma declaração dessas é polêmica. Explico: eu sou um designer gráfico, com mais de 20 anos de experiência no mercado de criação e no mundo corporativo, premiado aqui no Brasil e no exterior, que já ajudou empresas como Petrobras, Shell, Oi, Embratel, Atos... a economizarem e também ganharem milhões de dólares através de interfaces para aplicações web muito bem projetadas, agradáveis e que melhoram demais a experiência geral do usuário.</p>
                <p>Eu amo codificar as interfaces que eu projeto, adicionando micro interações inteligentes que fazem com que as pessoas tenham prazer de utilizar o produto que projetei.</p>
        </div>
    </div>
    <div class="uk-flex uk-flex-center uk-grid-collapse uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-2@l  uk-child-width-1-3@xl" data-uk-grid>
        <div><img src={`/static/imgs/arenaon_cover_portfolio.jpg`} alt="Arena On - Plataforma de Criação de Campeonatos para e-Sports" /></div>
        <div><img src={`/static/imgs/kawasaki_cover_portfolio.jpg`} alt="Kawasaki Motoflecha - Your Kawasaki Motorcycle Dealer" /></div>
        <div><img src={`/static/imgs/bella_cover_portfolio.jpg`} alt="Bella Saúde e Estética" /></div>
        <div><img src={`/static/imgs/sigsaude_cover_portfolio.jpg`} alt="SIGSAUDE - Design System for Brazilian Navy Health System" /></div>
        <div><img src={`/static/imgs/kawasaki_cover_portfolio.jpg`} alt="Kawasaki Motoflecha" /></div>
        <div><img src={`/static/imgs/kawasaki_cover_portfolio.jpg`} alt="Kawasaki Motoflecha" /></div>
        <div><img src={`/static/imgs/kawasaki_cover_portfolio.jpg`} alt="Kawasaki Motoflecha" /></div>
        <div><img src={`/static/imgs/kawasaki_cover_portfolio.jpg`} alt="Kawasaki Motoflecha" /></div>
    </div>
  </>
)

export default IndexPage
