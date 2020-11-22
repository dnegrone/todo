import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import HomeHero from "../components/hero-home"
import HomeParceria from "./home/parceria"
import HomeSobre from "./home/sobre"
import HomeServicos from "./home/servicos"
import HomePortfolio from "./home/portfolio"
import HeroBackground from "../images/alex_patagonia.jpg"

const IndexPage = () => (
  <Layout>
    <Navbar />
    <HomeHero />
    {/* <div className="uk-background-blend-color-burn uk-background-primary uk-background-primary uk-background-cover" style={{backgroundImage: `url(${HeroBackground})`}}>
    </div> */}
    <HomeParceria />
    {/* <HomeSobre /> */}
    <HomeServicos />
    <HomePortfolio />
  </Layout>
)

export default IndexPage