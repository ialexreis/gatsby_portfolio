import React from "react"
import styled from "styled-components"
import ProjectItem from "../components/partials/project.item"
import hyundaiBanner from "../utils/img/hyundai-logo.png"
import { StaticQuery, graphql } from "gatsby"
import Footer from "../components/footer"
import BackButton from "../components/partials/back.button"
import ButtonTop from "../components/partials/scrolltop.button"

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
      <BackButton/>
      <HeroBanner id="hero" className="hero is-large ">
        <div className="hero-body">
          <div className="container">
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
              title={item.node.childMarkdownRemark.frontmatter.title}
              description={item.node.childMarkdownRemark.html}
              image={hyundaiBanner}
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
                  image
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