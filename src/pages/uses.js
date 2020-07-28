import React from "react"
import rehypeReact from "rehype-react"
import { StaticQuery, graphql } from "gatsby"
import Footer from "../components/footer"
import BackButton from "../components/partials/back.button"
import ButtonTop from "../components/partials/scrolltop.button"
import styled from "styled-components"
import Helmet from "react-helmet"
import favicon from "../utils/imagens/favicon.ico"

const renderCustom = new rehypeReact({
  createElement: React.createElement,
  components: {},
}).Compiler

const HeroBanner = styled.section`
  background-repeat: no-repeat;
  color: white;
  min-height: 400px;
  margin-bottom: 5%;
`

const html = data => {
  return (
    <div>
      <Helmet>
        <title>Alexandre Reis</title>
        <meta name="description" content="Alexandre Reis - Uses" />
        <link rel="icon" href={favicon} />
        <script type="application/ld+json">
          {`
              {
                "@context": "https://schema.org/",
                "@type": "Person",
                "name": "Alexandre Reis",
                "url": "https://alexandreis.me/uses",
                "image": "",
                "sameAs": "http://alexandreis.me/uses",
                "jobTitle": "Backend Developer",
                "worksFor": {
                "@type": "Organization",
                "name": "LOBA"
              }
              `}
        </script>
      </Helmet>
      <BackButton/>
      <HeroBanner id="hero" className="hero is-medium ">
        <div className="hero-body">
          <div className="container" id="uses-page">
            <h1 className="title has-text-white">
              Stuff I Use
            </h1>
          </div>
        </div>
      </HeroBanner>
      <div className="section-light uses" id="uses">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-full has-vertically-aligned-content has-text-centered" data-aos="fade-right">
              {renderCustom(data.markdownRemark.htmlAst)}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ButtonTop />
    </div>
  )
}

const About = () => (
  <StaticQuery
    query={graphql`
      {
       markdownRemark(fileAbsolutePath: {regex: "/uses.md/"}, frontmatter: {}) {
          frontmatter {
            title
          }
          htmlAst
          }
        }
    `}
    render={data => html(data)}
  ></StaticQuery>
)

export default About
