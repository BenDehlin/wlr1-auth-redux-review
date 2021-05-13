import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
// Import Provider and store and then down below wrap our App component
// in the Provider with store as a prop. This provides our redux store
// to our whole application when we use connect.
import { Provider } from "react-redux"
import store from "./redux/store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
reportWebVitals()
// Go look in ./App.js to see how we use our user state.