import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  randomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const number = this.randomNumber()

    this.setState(prevState => ({count: prevState.count + number}))
  }

  render() {
    const {count} = this.state

    const updatedText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <div className="main-container">
          <h1 className="main-heading">Count {count}</h1>
          <div className="text-container">
            <p className="heading">Count is {updatedText}</p>
            <div>
              <button className="button" onClick={this.onIncrement}>
                Increment
              </button>
            </div>
            <p className="description">
              *Increase By Random Number Between 0 to 100
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
