import React  from "react"
import ProjectItem from "./partials/project.item"
import Button from "./partials/standard.button"
import { graphql, StaticQuery } from "gatsby"

const html = data => {
  let items = data.allFile
  return (
    <div className="section-light about-me" id="projects">
      <div className="container">
        <div className="column is-12 about-me">
          <h1 className="title has-text-centered section-title">Projects</h1>

        </div>
        <div className="columns">
          {items.edges.map(item => (
            <ProjectItem
              info={item.node.childMarkdownRemark.frontmatter}
            />
          ))}
        </div>
        <div className="has-text-centered has-margin-top-4">
          <Button link="/projects" text="View More..." is_white="true"/>
        </div>
      </div>
    </div>
  )
}

const Projects = () => (
  <StaticQuery
    query={graphql`
      {
        allFile(filter: {sourceInstanceName: {eq: "markdown"}, extension: {eq: "md"}, relativeDirectory: {regex: "/projects/"}}, sort: {fields: dir}, limit: 3) {
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
