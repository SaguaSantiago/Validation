import { Route } from "react-router"

export default function PublicRoute({ component: Component, ...rest }) {
  return <Route {...rest} render={(props) => <Component {...props} />} />
}
