import React from "react"
import "../utils/css/style.scss"
import Navbar from "../components/navbar"
import Banner from "../components/banner"

const IndexPage = () => {
  return (
    <section className="hero container is-fullheight is-default is-bold">
        <Navbar />
        <Banner />
    </section>
  )
}
export default IndexPage
