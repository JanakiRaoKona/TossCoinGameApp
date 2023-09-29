// Write your code here

import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0, faceHeads: true}

  onClickTossTheCoin = () => {
    const randomGenerator = Math.floor(Math.random() * 2)
    if (randomGenerator === 0) {
      this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
        faceHeads: true,
      }))
    } else {
      this.setState(prevState => ({
        tailsCount: prevState.tailsCount + 1,
        faceHeads: false,
      }))
    }
  }

  render() {
    const {headsCount, tailsCount, faceHeads} = this.state
    const imageUrl = faceHeads
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg-container">
        <div className="white-card">
          <h1 className="coin-heading">Coin Toss Game</h1>
          <p className="options-name">Heads (or) Tails</p>
          <img className="coin-image" alt="toss result" src={imageUrl} />
          <br />
          <button
            className="button"
            type="button"
            onClick={this.onClickTossTheCoin}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="counts">Total: {headsCount + tailsCount}</p>
            <p className="counts">Heads: {headsCount}</p>
            <p className="counts">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
