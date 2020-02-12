import React from "react"
import illustration from "../utils/img/hello.png"

const Banner = () => {
  return (
    <section className="hero is-overlay is-fullheight is-default is-bold bg-img">
      <div className="hero-body container">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-4 is-offset-1 landing-caption">
              <h2 className="subtitle is-3 is-bold has-text-white is-spaced">
                Hello,{" "}
                <span
                  className="dinhoHand"
                  role="img"
                  aria-label="dinho"
                  aria-labelledby="dinho"
                >
                  &#129305;
                </span>
              </h2>
              <h1 className="title is-1 has-text-white is-muted">I'm ALEX</h1>
              <hr/>
              <div className="button-wrap">
                <a href="#" class="cta">
                  <span>Resumé</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </a>
              </div>
            </div>
            <div className="column is-8 img-bg">
              <figure className="image ">
                <img src={illustration} alt="Description" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
