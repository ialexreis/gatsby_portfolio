import React from "react"
import rehypeReact from "rehype-react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Bio from "../components/bio"

const renderCustom = new rehypeReact({
  createElement: React.createElement,
  components: {}
}).Compiler

const html = data => {
  return (
    <Layout location={"Uses"} title={"Uses"}>
        <div className="section-light container inner" >
          <Bio />
          <main className="has-text-centered" id="uses">
            {renderCustom(data.markdownRemark.htmlAst)}
          </main>
        </div>
    </Layout>
  )
}

const Uses = () => (
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
  />
)

export default Uses
