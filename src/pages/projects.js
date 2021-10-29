import React from "react"
import "../utils/scss/style.scss"
import styled from "styled-components"
import ProjectItem from "../components/partials/project.item"
import { StaticQuery, graphql } from "gatsby"
import Footer from "../components/footer"
import BackButton from "../components/partials/back.button"
import ButtonTop from "../components/partials/scrolltop.button"
import Helmet from "react-helmet"
import favicon from "../utils/imagens/favicon.ico"

const HeroBanner = styled.section`
  background-repeat: no-repeat;
  color: white;
  min-height: 400px;
  margin-bottom: 5%;
`

const html = data => {
  let items = data.allFile
  return (
    <div>
      <Helmet>
        <title>Alexandre Reis</title>
        <meta name="description" content="Alexandre Reis - Projects" />
        <link rel="icon" href={favicon} />
        <script type="application/ld+json">
          {`
              {
                "@context": "https://schema.org/",
                "@type": "Person",
                "name": "Alexandre Reis",
                "url": "https://alexandreis.me/projects",
                "image": "",
                "sameAs": "http://alexandreis.me/projects",
                "jobTitle": "Backend Developer",
                "worksFor": {
                "@type": "Organization",
                "name": "LOBA"
              }
              `}
        </script>
      </Helmet>
      <BackButton/>
      <HeroBanner id="hero" className="hero is-large ">
        <div className="hero-body">
          <div className="container" id="projects-page">
            <h1 className="title has-text-white">
              Projects
            </h1>
          </div>
        </div>
      </HeroBanner>
      <div className="container">
        <div className="columns is-multiline">

          {items.edges.map(item => (
            <ProjectItem
              info={item.node.childMarkdownRemark.frontmatter}
              key={item.node.childMarkdownRemark.frontmatter.title}
            />
          ))}
        </div>
      </div>
      <Footer/>
      <ButtonTop/>
    </div>
  )
}

const Projects = () => (
  <StaticQuery
    query={graphql`
      {
        allFile(filter: {sourceInstanceName: {eq: "markdown"}, extension: {eq: "md"}, relativeDirectory: {regex: "/projects/"}}, sort: {fields: dir}) {
          edges {
            node {
              id
              childMarkdownRemark {
                frontmatter {
                  title
                  live
                  source
                  stack
                  image {
                    childImageSharp {
                      fluid(maxWidth: 800, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  description
                }
                html
              }
            }
          }
        }
      }
    `}
    render={data => html(data)}
  ></StaticQuery>
)

export default Projects
