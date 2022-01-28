import "../utils/scss/style.scss"
import * as React from "react"
import { Link } from "gatsby"
import NavbarMobile from "./navbar.mobile"
import Navbar from "./navbar"
import Helmet from "react-helmet"
import favicon from "../utils/imagens/favicon.ico"
import Footer from "./footer"
import ButtonTop from "./partials/scrolltop.button"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  return (
    <div className="layout-wrapper header-wrapper">
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
      <section className="hero is-fullheight" id="hero">
        <NavbarMobile />
        <Navbar />
        <div className="main-content">
          <main>{children}</main>
        </div>
        <Footer/>
        <ButtonTop/>
      </section>
    </div>
  )
}

export default Layout
