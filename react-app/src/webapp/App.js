import React, { Component } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hello: 'React WebApp'
    }
  }

  render () {
    return (
      <BrowserRouter>
        <div>
          <h3>Title: {this.props.title}</h3>
          <p>Greeting: {this.state.hello}</p>
          <Link to='/'>Home</Link>
          <br/>
          <Link to='/here'>Here</Link>
          <br/>
          <Link to='/there'>There</Link>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
