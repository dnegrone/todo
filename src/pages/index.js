import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"


const IndexPage = () => (
  <>
    <Layout>
      <div class="uk-flex uk-flex-center">
        <div class="uk-card uk-card-body uk-width-3-4">
          <h2 style={{ letterSpacing: '-0.025rem'}}>Olá! Eu sou o <strong>Alexander</strong>.</h2>
          <h3 class="uk-heading-small uk-text-bolder">Estou refazendo o meu portfolio, mas você ainda poderá vê-lo no <a href="https://www.behance.net/alexcesar" target="_blank">Behance</a>, <a href="https://www.dribbble.com/alexcesar" target="_blank">Dribbble</a> e no <a href="https://www.linkedin.com/in/alexandercesar" target="_blank">LinkedIn.</a></h3>
          <div style={{ marginTop: '3rem' }}>
            <a target="_blank" href="https://www.linkedin.com/in/alexandercesar" class="uk-icon-button uk-margin-small-right uk-text-primary" uk-icon="linkedin"></a>
            <a target="_blank" href="https://www.behance.net/alexcesar" class="uk-icon-button uk-margin-small-right uk-text-secondary" uk-icon="behance"></a>
            <a target="_blank" href="https://www.dribbble.com/alexcesar" class="uk-icon-button uk-margin-small-right uk-text-muted" uk-icon="dribbble"></a>
            <a target="_blank" rel="nofollow" href="https://api.whatsapp.com/send?phone=5521982023401&text=Olá,%20Alexander!" class="uk-icon-button uk-margin-small-right uk-text-success" uk-icon="whatsapp"></a>
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default IndexPage
