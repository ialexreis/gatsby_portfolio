import React from "react"
import Banner from "../components/banner";
import About from "../components/about"
import Stack from "../components/stack"
import "../utils/scss/style.scss"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default () => {
    return ( 
        <div className="layout-wrapper">
            <Banner />
            <div className="main-content">
                <About />
                <Stack />
                <Projects/>
                <Contact/>
            </div>
            <Footer/>
        </div>
    ) 
}
