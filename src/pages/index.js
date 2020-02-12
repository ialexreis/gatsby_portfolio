import React from "react"
import "../utils/css/style.scss"
import Navbar from "../components/navbar"
import Banner from "../components/banner"
import AboutMe from "../components/aboutMe"

const IndexPage = () => {
  return (
    <div className="layout-wrapper">
        <Navbar />
        <Banner />
        <AboutMe />
    </div>
  )
}
export default IndexPage
