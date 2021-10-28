import React from "react"
import Banner from "../components/banner";
import About from "../components/about"
import Stack from "../components/stack"
import "../utils/scss/style.scss"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Footer from "../components/footer";
import ButtonTop from "../components/partials/scrolltop.button"
import Helmet from "react-helmet"
import favicon from "../utils/imagens/favicon.ico"



export default () => {
    return (
        <div className="layout-wrapper">
          <Helmet>
            <title>Alexandre Reis</title>
            <meta name="description" content="Alexandre Reis Personal Website" />
            <link rel="icon" href={favicon} />
            <script type="application/ld+json">
              {`
              {
                "@context": "https://schema.org/",
                "@type": "Person",
                "name": "Alexandre Reis",
                "url": "https://alexandreis.me/",
                "image": "",
                "sameAs": "http://alexandreis.me/",
                "jobTitle": "Backend Engineer",
                "worksFor": {
                "@type": "Organization",
                "name": "7EGEND"
              }
              `}
            </script>
          </Helmet>
            <Banner />
            <div className="main-content">
                <About />
                <Stack />
                <Projects/>
                <Contact/>
            </div>
            <Footer/>
            <ButtonTop/>
        </div>
    )
}
