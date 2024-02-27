import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Game from '../Game'

class Login extends Component {
  state = {searchInput: '', isClickedPlay: false}

  onSubmitButton = event => {
    event.preventDefault()
    const {searchInput} = this.state
    Cookies.set('search_input', searchInput, {expires: 30})
    this.setState({isClickedPlay: true})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderLogin = () => {
    const {searchInput} = this.state
    return (
      <div className="login-container">
        <h1 className="heading">React Tiles</h1>
        <div className="div-ele">
          <img
            src="https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/79/f6/t-l-8673-cvc-mixed-words-matching-activity-1_ver_2.jpg"
            alt="MatchingImage"
            className="matching-image"
          />
        </div>

        <div className="div-container">
          <form onSubmit={this.onSubmitButton} className="form-container">
            <h1 className="form-heading">Enter You Name</h1>
            <input
              placeholder="Enter Your Name"
              className="form-input"
              type="text"
              value={searchInput}
              onChange={this.onChangeInput}
            />
            <button className="form-button" type="submit">
              Play
            </button>
          </form>
        </div>
      </div>
    )
  }

  render() {
    const {isClickedPlay} = this.state
    switch (isClickedPlay) {
      case false:
        return this.renderLogin()
      case true:
        return <Game />
      default:
        return ''
    }
  }
}

export default Login
