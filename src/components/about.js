import React from "react"
import rehypeReact from "rehype-react"
import { StaticQuery, graphql } from "gatsby"
import myself from "../utils/imagens/myself.png"

const renderCustom = new rehypeReact({
  createElement: React.createElement,
  components: {},
}).Compiler

const html = data => {
  const imageBackground = { backgroundImage: `url(${myself})`, backgroundRepeat: `no-repeat` }

  return (
    <div className="section-light about-me" id="about">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-half-desktop is-full-tablet is-full-mobile has-vertically-aligned-content">
            <img src={myself} alt="myself"/>
          </div>
          <div className="column is-half-desktop is-full-tablet is-full-mobile has-vertically-aligned-content has-text-right" data-aos="fade-right">
            {renderCustom(data.markdownRemark.htmlAst)}
            <br/>
            <div className="has-text-right">
              <a className="button is-dark is-outlined is-medium" id="download" href="/books/a-great-book.pdf" target="_blank">Resumé</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

const About = () => (
  <StaticQuery query={graphql`
    {
        markdownRemark(fileAbsolutePath: {regex: "/about-me.md/"}, frontmatter: {}) {
            frontmatter {
                title
            }
            htmlAst
        }
    }
`}
render={data => html(data)} />)

export default About
