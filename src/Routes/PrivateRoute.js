import { Redirect, Route } from "react-router-dom"

export default function PrivateRoute({ component: Component, token, ...rest }) {
  // const getToken = localStorage.
  return (
    <Route
      {...rest}
      render={(props) =>
        !token ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  )
}
