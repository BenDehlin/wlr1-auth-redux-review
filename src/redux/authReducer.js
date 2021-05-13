// INITIAL STATE
// Here we set up the initial state for our user information. In our
// case we are going to consider a "logged out" user as null, and a "logged in"
// user will be if we set a user object here then they are "logged in". There
// are several other ways we could handle logged in vs logged out, this is just
// what we've chosen for this example.
const initialState = {
  user: null
}
// action types
// We have 2 actions we care about for updating our user status. First if we call
// the saveUser action we will pass in a user object that we will then save into
// our state here. Once we do that the user will be considered "logged in" on the
// frontend. The second will be if we call logoutUser we will set the user state to
// be null and then the user will be considered "logged out"
const SAVE_USER = "SAVE_USER"
const LOGOUT_USER = "LOGOUT_USER"
// action builders
export function saveUser(user){
  return {
    type: SAVE_USER,
    payload: user
  }
}

export function logoutUser(){
  return {
    type: LOGOUT_USER,
    payload: null
  }
}

// reducer
export default function authReducer(state = initialState, action){
  switch(action.type){
    // in the SAVE_USER case we will take the user object that was passed
    // to the saveUser action builder and save that to our state.
    case SAVE_USER:
      return {...state, user: action.payload}
      // in the LOGOUT_USER case we will take the payload and save that to
      // the user state. If you look up at the logoutUser action builder you can
      // see our payload is set to null for that case.
    case LOGOUT_USER:
      return {...state, user: action.payload}
    default:
      return {...state}
  }
}

// Go to ./store.js to see how we set up our store.