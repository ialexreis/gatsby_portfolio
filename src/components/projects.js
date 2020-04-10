import React  from "react"
import ProjectItem from "./partials/project.item"
import hyundaiBanner from "../utils/img/hyundai-logo.png"
import weatherBanner from "../utils/img/weather.png"
import motorentBanner from "../utils/img/motorent.png"
import Button from "./partials/standard.button"

const Projects = () => {
  return (
    <div className="section-light about-me" id="projects">
      <div className="container">
        <div className="column is-12 about-me">
          <h1 className="title has-text-centered section-title">Projects</h1>
        </div>
        <div className="columns">
          <ProjectItem title="Hyundai Power Kit" description="Platform built on top of ZOHO Suite." image={hyundaiBanner}/>
          <ProjectItem title="MotoRent" description="Android and Web App built for a abstract rent-a-veicule company." image={motorentBanner}/>
          <ProjectItem title="Weather App" description="Node.js and Handlebars app for weather forecast." image={weatherBanner}/>
        </div>
        <div className="has-text-centered has-margin-top-4">
          <Button link="/projects" text="View More..." is_white="true"/>
        </div>
      </div>
    </div>
  )
}

export default Projects