import { Route, Redirect } from "react-router"

export default function PublicRoute({ component: Component, ...rest }) {
  const token = localStorage.getItem("Logged")
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Redirect to="/dashboard" /> : <Component {...props} />
      }
    />
  )
}
