import { Redirect, Route } from "react-router-dom"

export default function PrivateRoute({ component: Component, ...rest }) {
  const token = localStorage.getItem("Logged")
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}
