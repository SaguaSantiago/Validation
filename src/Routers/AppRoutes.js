import { makeStyles } from "@material-ui/core"
import { useState } from "react"
import { Route, Switch } from "react-router"
import { BrowserRouter as Router, NavLink } from "react-router-dom"
import Layout from "../Components/AppNav/AppNav"
import Error404 from "../Pages/Error404"
import HomePage from "../Pages/HomePage"
import LoginPage from "../Pages/LoginPage"
import PerfilPage from "../Pages/PerfilPage"
import PrivateRoute from "../Routes/PrivateRoutes"
import { Styles } from "../Styles/Styles"

const useStyles = makeStyles( Styles.layout)

export default function AppRoutes() {
  const classes = useStyles()

  const [Auth, setAuth] = useState(false)

  const isLogin = () => {
    if (!Auth) setAuth(true)
    console.log(Auth)
  }
  console.log(localStorage.getItem("isLogin"))
  return (
    <Router>
      <Layout>
        <NavLink className={classes.navLink} to="/">
          {" "}
          Home{" "}
        </NavLink>
        <NavLink className={classes.navLink} to="/Login">
          {" "}
          Login{" "}
        </NavLink>

        {Auth ? (
          <NavLink to="/Perfil" className={classes.navLink}>
            Perfil{" "}
          </NavLink>
        ) : null}
      </Layout>
      <div className={classes.offSet}></div>
      <Switch>
        <Route path="/Login" render={() => <LoginPage isLogin={isLogin} />} />
        <Route path="/" render={() => <HomePage />} />
        <Route path="*" render={() => <Error404 />} />
        <PrivateRoute
          exact
          auth={Auth}
          path="/perfil"
          component={<PerfilPage />}
        />
      </Switch>
    </Router>
  )
}
