import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
const token = localStorage.getItem("Logged")

ReactDOM.render(
  <React.StrictMode>
    <App token={token} />
  </React.StrictMode>,
  document.getElementById("root")
)
