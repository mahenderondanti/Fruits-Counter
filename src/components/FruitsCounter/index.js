// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoes: 0,
    bananas: 0,
  }

  onEatBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  onEatMango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state

    return (
      <div className="fruits-counter-container">
        <div className="fruits-counter">
          <h1 className="count-text">
            Bob ate <span className="count">{mangoes}</span> mangoes
            <span className="count"> {bananas}</span> bananas
          </h1>
          <div className="counters-control-container">
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-image"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onEatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-image"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onEatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
