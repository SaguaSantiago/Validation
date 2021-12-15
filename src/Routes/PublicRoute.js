import { Redirect, Route } from "react-router"

export default function PublicRoute({ component: Component, ...rest }) {
  let token = true

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Redirect to="/private" /> : <Component {...props} />
      }
    />
  )
}
