import './index.css'
import Cookies from 'js-cookie'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Result from '../Result'

const imagesList = [
  {
    id: uuidv4(),
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/ooti-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/ooti-thumbnail-img.png',
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/pineapple-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/pineapple-thumbnail-img.png',
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/strawberry-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/strawberry-thumbnail-img.png',
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/maldives-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/maldives-thumbnail-img.png',
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/emerald-lake-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/emerald-thumbnail-lake-img.png',
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/watermelon-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/watermelon-thumbnail-img.png',
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/elephant-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/elephant-thumbnail-img.png',
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/jammu-hills-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/jammu-thumbnail-hills-img.png',
    isClicked: false,
  },

  {
    id: uuidv4(),
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/ooti-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/ooti-thumbnail-img.png',
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/pineapple-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/pineapple-thumbnail-img.png',
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/strawberry-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/strawberry-thumbnail-img.png',
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/maldives-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/maldives-thumbnail-img.png',
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/emerald-lake-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/emerald-thumbnail-lake-img.png',
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/watermelon-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/watermelon-thumbnail-img.png',
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/elephant-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/elephant-thumbnail-img.png',
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/jammu-hills-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/jammu-thumbnail-hills-img.png',
    isClicked: false,
  },
]

const newImagesList = imagesList.sort(() => Math.random() - 0.5)

const Card = props => {
  const {Details, onClickImage} = props
  const {id, imageUrl, isClicked} = Details
  const newUrl = isClicked
    ? imageUrl
    : 'https://img.freepik.com/free-photo/pastel-blue-vignette-concrete-textured-background_53876-102637.jpg?size=626&ext=jpg&ga=GA1.1.644042986.1704457207&semt=ais'
  const onClickTrue = () => {
    onClickImage(id)
  }
  return (
    <li className="image-container">
      <img className="images" src={newUrl} alt="images" onClick={onClickTrue} />
    </li>
  )
}

class Game extends Component {
  state = {
    listOfImages: newImagesList,
    isScore: false,
    time: 0,
    image1: '',
    isTrue: false,
    score: 0,
  }

  componentDidMount() {
    this.timerId = setInterval(this.timer, 1000)
  }

  timer = () => {
    this.setState(prevState => ({time: prevState.time + 1}))
  }

  renderNew = id => {
    const {listOfImages, isTrue} = this.state
    console.log(isTrue)
    const imageOfId1 = listOfImages.find(eachImage => eachImage.id === id)
    this.setState(prevState => {
      if (prevState.image1 === '') {
        return {image1: imageOfId1.imageUrl}
      }
      if (prevState.image1 === imageOfId1.imageUrl) {
        return {score: prevState.score + 1, image1: ''}
      }
      if (prevState.image1 !== imageOfId1.imageUrl) {
        const newList = prevState.listOfImages.map(eachImage => {
          if (eachImage.imageUrl === prevState.image1) {
            return {...eachImage, isClicked: false}
          }
          if (eachImage.imageUrl === imageOfId1.imageUrl) {
            return {...eachImage, isClicked: false}
          }
          return eachImage
        })
        console.log(newList)
        return {score: prevState.score - 1, image1: '', listOfImages: newList}
      }
      return {image1: prevState.image1, image2: prevState.image2}
    })
  }

  onClickImage = id => {
    this.setState(prevState => ({
      listOfImages: prevState.listOfImages.map(eachImage => {
        if (eachImage.id === id) {
          return {...eachImage, isClicked: true}
        }
        return eachImage
      }),
    }))
    this.renderNew(id)
  }

  renderSeconds = () => {
    const {time} = this.state
    const seconds = Math.floor(time % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {time} = this.state
    const minutes = Math.floor(time / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderResult = () => {
    clearInterval(this.timerId)
    this.setState({isScore: true})
  }

  renderImages = () => {
    const Cookie = Cookies.get('search_input')
    const {listOfImages, score} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    const newList = listOfImages.every(
      eachImage => eachImage.isClicked === true,
    )
    if (newList === true) {
      this.renderResult()
    }
    return (
      <div className="login-container-2">
        <h1 className="heading">Mahajong Game</h1>
        <div className="score-time-container">
          <h1 className="name">Score: {score}</h1>
          <h1 className="name">Time: {time}</h1>
        </div>
        <div className="game-container">
          <h1 className="name">Welcome {Cookie}</h1>
          <ul className="ul-container">
            {listOfImages.map(eachImage => (
              <Card
                Details={eachImage}
                key={eachImage.id}
                onClickImage={this.onClickImage}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isScore, score} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    switch (isScore) {
      case false:
        return this.renderImages()
      case true:
        return <Result score={score} time={time} />
      default:
        return ''
    }
  }
}

export default Game
