import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  onSubmitSuccess = jwtTkoken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtTkoken, {
      expires: 30,
    })
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const username = 'rahul'
    const password = 'rahul@2021'
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    }
  }

  render() {
    const jwtTkoken = Cookies.get('jwt_token')

    if (jwtTkoken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <form className="form-container" onSubmit={this.submitForm}>
        <h1>Please Login</h1>

        <button type="submit" className="login-button">
          Login with Sample Creds
        </button>
      </form>
    )
  }
}

export default Login
