import React from "react"
import rehypeReact from "rehype-react"
import { StaticQuery, graphql } from "gatsby"
import myself from "../utils/img/myself.png"

const renderCustom = new rehypeReact({
  createElement: React.createElement,
  components: {},
}).Compiler

const html = data => {
  const imageBackground = { backgroundImage: `url(${myself})` }

  return (
    <div className="section-light about-me" id="about">
      <div class="container">
        <div class="column is-12 about-me">
          <h1 class="title has-text-centered section-title">About Me</h1>
        </div>
        <div class="columns is-multiline">
          <div class="column is-two-fifths is-full-tablet is-full-mobile has-vertically-aligned-content has-text-centered" data-aos="fade-right">
            {renderCustom(data.markdownRemark.htmlAst)}
          </div>
          <div className="column is-7 is-hidden-touch has-vertically-aligned-content has-text-centered" data-aos="fade-right">
            <div className="image-shadow js-tilt-container" style={imageBackground}></div>
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
