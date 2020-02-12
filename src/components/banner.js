import React from "react"
import illustration from "../utils/img/illustration.png"

const Banner = () => {
  return (
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-4 is-offset-1 landing-caption">
            <h2 className="subtitle is-3 is-bold is-spaced">Hello, :ronaldohand:</h2>
            <h1 className="title is-1 is-muted">
              I'm ALEX
            </h1>
            <div className="button-wrap">
              <button className="button bk-bg is-large has-text-white is-rounded">Resumé</button>
            </div>
          </div>
          <div className="column is-6">
              <figure className="image is-4by3">
                  <img src={illustration} alt="Description"/>
              </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
