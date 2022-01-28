import React from "react"
import Banner from "../components/banner";
import About from "../components/about"
import Stack from "../components/stack"
import Contact from "../components/contact"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout location={"Home"} title={"Home"}>
        <Banner />
        <About />
        <Stack />
        <Contact/>
    </Layout>
  )
}
