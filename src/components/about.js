import React from "react"
import rehypeReact from "rehype-react"
import { StaticQuery, graphql } from "gatsby"
import myself from "../utils/imagens/pixelMe.png"

const renderCustom = new rehypeReact({
  createElement: React.createElement,
  components: {},
}).Compiler

const html = data => {
  const imageBackground = { backgroundImage: `url(${myself})` }

  return (
    <div className="section-light about-me" id="about">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column">
            <div className="image-shadow js-tilt-container" style={imageBackground}/>
          </div>
          <div className="column is-half-desktop is-full-tablet is-full-mobile has-vertically-aligned-content has-text-right" data-aos="fade-right">
            {renderCustom(data.markdownRemark.htmlAst)}
          </div>
        </div>
      </div>
    </div>
  )
}

const About = () => (
  <StaticQuery
    query={graphql`
      {
       markdownRemark(fileAbsolutePath: {regex: "/about-me.md/"}, frontmatter: {}) {
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
