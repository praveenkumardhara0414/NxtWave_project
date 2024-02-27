import {Component} from 'react'
import './index.css'
import Cookies from 'js-cookie'

class Result extends Component {
  render() {
    const Cookie = Cookies.get('search_input')
    const {time, score} = this.props
    return (
      <div className="login-container-2">
        <h1 className="heading">React Tiles</h1>
        <div className="score-time-container">
          <h1>Score: {score}</h1>
          <h1>Time: {time}</h1>
        </div>
        <div className="game-container-1">
          <h1 className="name">Welcome {Cookie}</h1>
          <div>
            <h1 className="heading-1">Game Finished!</h1>
            <div>
              <h1 className="heading-3">Score: {score}</h1>
              <h1 className="heading-2">Time Taken: {time}</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Result
