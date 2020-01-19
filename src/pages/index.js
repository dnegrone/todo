import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Alex Cesar.com</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
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
  </>
)

export default IndexPage
