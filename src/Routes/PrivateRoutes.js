import { Redirect, Route } from "react-router-dom"

export default function PrivateRoutes({ component: Component, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("isLogin")) {
          return <Component />
        } else {
          return <Redirect to="/" />
        }
      }}
    />
  )
}
