import React from "react"
import bulmaCarousel from "bulma-carousel/dist/js/bulma-carousel.min"


class Clients extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    bulmaCarousel.attach("#carousel-demo", {
      slidesToScroll: 1,
      slidesToShow: 4,
      navigation: false,
      navigationSwipe: true,
      infinite:true,
      autoplay: true,
      duration: 30,
    })
  }

  render = () => {
    return (
      <div className="section-light about-me" id="stack">
        <div className="container">
          <div className="columns">
            <div className="column is-full is-full-mobile is-full-tablet">
              <div id="carousel-demo" class="carousel">
                <div class="item-1">
                  <img
                    src="https://www.eshows.com.br/assets/logos/bar-brahma-4de035f9c60aea4a60c5b1727e8f783ac40ce394d15e4db5ba69581d8aecbdad.png"
                    alt="" />
                </div>
                <div class="item-2">
                  <img
                    src="https://www.eshows.com.br/assets/logos/bardasse-d43dffcc34a9601c7014dbadfe14801483602561f74d976d8dfc5c1672e65e81.png"
                    alt="" />
                </div>
                <div class="item-3">
                  <img
                    src="https://www.eshows.com.br/assets/logos/piratininga-eb3096a8d099590cfe0512a9b34df4c8e9c4797e1e04f283cb9891a6e8ea8e47.png"
                    alt="" />
                </div>
                <div className="item-4">
                  <img
                    src="https://www.eshows.com.br/assets/logos/bardasse-d43dffcc34a9601c7014dbadfe14801483602561f74d976d8dfc5c1672e65e81.png"
                    alt="" />
                </div>
                <div className="item-5">
                  <img
                    src="https://www.eshows.com.br/assets/logos/piratininga-eb3096a8d099590cfe0512a9b34df4c8e9c4797e1e04f283cb9891a6e8ea8e47.png"
                    alt="" />
                </div>
                <div className="item-6">
                  <img
                    src="https://www.eshows.com.br/assets/logos/bardasse-d43dffcc34a9601c7014dbadfe14801483602561f74d976d8dfc5c1672e65e81.png"
                    alt="" />
                </div>
                <div className="item-7">
                  <img
                    src="https://www.eshows.com.br/assets/logos/piratininga-eb3096a8d099590cfe0512a9b34df4c8e9c4797e1e04f283cb9891a6e8ea8e47.png"
                    alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Clients