import React, { Component } from "react"
import axios from "axios"
// In our Auth page we plan to interact with our user redux state in 2
// ways. We will want to be able to save a user object to redux after
// successfully logging in or registering, and we'll want to set the user
// back to null after successfully logging out. Because of this we know that
// we're going to need to import the action builder for saveUser and the action
// builder for logoutUser and connect them to our props down at the bottom
// of the page.
import { connect } from "react-redux"
import { saveUser, logoutUser } from "../redux/authReducer"

class Auth extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  // For handleLogin I have provided 2 examples of how we could make this
  // axios call and save the resulting user object to our redux state. The
  // first way is the way we did together and the second way is the way I
  // personally would set it up. I want to include both so you can compare
  // and contrast if you are interested. I did the same with handleRegister
  // and handleLogout as well.
  // For handleLogin we do the axios call and pass back the email and password
  // from state as the body. then when the result comes back (the user object) on
  // a successful login we take that and pass it into the saveUser action builder
  // on our props. To track from here where it goes go check out the authReducer.
  // Next go down and look at handleRegister, it will be similar.
  handleLogin = async () => {
    try {
      const res = await axios.post("/auth/login", {
        email: this.state.email,
        password: this.state.password,
      })
      this.props.saveUser(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  // here is the alternative handleLogin I would have set up in my own
  // project.
  // handleLogin = () => {
  //   const {email, password} = this.state
  //   axios.post('/auth/login', {email, password})
  //   .then(({data}) => this.props.saveUser(data))
  //   .catch((err) => console.log(err))
  // }

  // For handleRegister we once again will pass back the email and password
  // from our state as a body to the server (hitting /auth/register). When the
  // server sends us back the user object we will take it and pass it to the
  // saveUser action builder on our props. Note that the way we set things up
  // we can use THE SAME action builder for login and register.
  handleRegister = async () => {
    try {
      const res = await axios.post("/auth/register", {
        email: this.state.email,
        password: this.state.password,
      })
      this.props.saveUser(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  // Here is the handleRegister I would have built in my own project.
  // handleRegister = () => {
  //   const {email, password} = this.state
  //   axios.post('/auth/register', {email, password})
  //   .then(({data}) => this.props.saveUser(data))
  //   .catch((err) => console.log(err))
  // }

  // For handleLogout it is very similar to the other two except after logging
  // out we do not get back a user object (which makes sense since we've logged
  // out, there is no longer a user saved on the server for our session.) This means
  // that instead of taking a user object and passing it into the saveUser action
  // builder we instead want to utilize the logoutUser action builder from our props
  // which if you recall will set the user object in redux to be null (meaning that
  //   the front end now considers us logged out again)
  handleLogout = async () => {
    try {
      await axios.get("/auth/logout")
      this.props.logoutUser()
    } catch (err) {
      console.log(err)
    }
  }
  // Here is the handleLogout I would have built in my own project.
  // handleLogout = () => {
  //   axios.get('/auth/logout')
  //   .then(_ => this.props.logoutUser())
  //   .catch((err) => console.log(err))
  // }

  render() {
    const { email, password } = this.state
    return (
      <div>
        {/* Down in the JSX we just have 3 buttons, logout, login, register and
        input fields for email and password. */}
        <button onClick={this.handleLogout}>Logout</button>
        <input name="email" value={email} onChange={this.handleChange} />
        <input name="password" value={password} onChange={this.handleChange} />
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleRegister}>Register</button>
      </div>
    )
  }
}

// here we connect both action builders to our props so that we'll be able
// to save user data when a user logs in or registers and we'll be able to
// set the user data back to null when they log out. Go look at the handleLogin
// function to see how we do this.
export default connect(null, { saveUser, logoutUser })(Auth)

// After you've reviewed this component, that's it! That's the whole app!