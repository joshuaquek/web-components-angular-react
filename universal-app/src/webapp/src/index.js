import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Link } from 'react-router-dom'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hello: 'React WebApp'
    }
  }

  render () {
    const { title, hello } = this.props
    return (
      <BrowserRouter>
        <div>
          <h3>Title: {title}</h3>
          <p>Greeting: {hello}</p>
          <Link to='/'>Home</Link>
          <br />
          <Link to='/here'>Here</Link>
          <br />
          <Link to='/there'>There</Link>
        </div>
      </BrowserRouter>
    )
  }
}

render(<App />, document.getElementById('main'))
