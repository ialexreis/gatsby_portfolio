import React from "react"
import Banner from "../components/banner";
import About from "../components/about"
import Stack from "../components/stack"
import "../utils/scss/style.scss"

export default () => {
    return ( 
        <div className="layout-wrapper">
            <Banner />
            <div className="main-content">
                <About />
                <Stack />
            </div>
        </div>
    ) 
}
