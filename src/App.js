import './App.css';
import Auth from './components/Auth'
// Here we want to user our user information to display something
// different if we're logged in vs if we're not. We import connect
// so that we'll be able to access our redux store.
import {connect} from 'react-redux'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      {/* If we have a user on our props from redux (meaning we're logged in)
      Then we want to display the user's email. If user on our props is null
      then that means we're logged out and want to display a div that says "Please
      Log In". 
      Go look in ./components/Auth.js to see how we handle logging in
      and logging out. */}
      {props.user ? (
        <div>{props.user.email}</div>
      ):(
        <div>Please Log In</div>
      )}
      <Auth />
    </div>
  );
}

// Here we define how we want to access our redux state in this component.
// In my case I only want to access the authReducer so I specify that in my
// map state to props function. NOTE: If I do not use combineReducers in the store
// then I would not want to specify store.authReducer here. This is the difference
// between using combineReducers and not using it.
// Go up and look at our conditional rendering to see how we're actually using this
// redux state in the app.
const mapStateToProps = (store) => store.authReducer

export default connect(mapStateToProps)(App)
