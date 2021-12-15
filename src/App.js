import { ThemeProvider } from "@material-ui/core/styles"
import Layout from "./Routers/Layout"
import { theme } from "./ConfigTheme"
import Error404 from "./Pages/Error404"
import PublicHome from "./Pages/HomePage"
import PrivateHome from "./Pages/PrivateHome"
import LoginPage from "./Pages/LoginPage"
import PerfilPage from "./Pages/PerfilPage"
import PrivateRoute from "./Routes/PrivateRoute"
import PublicRoute from "./Routes/PrivateRoute"
import { Switch, Route } from "react-router"
import { BrowserRouter as Router, NavLink } from "react-router-dom"
import { Redirect } from "react-router-dom"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/"> Home </NavLink>
        <Switch>
          <PublicRoute exact path="/" component={PublicHome} />

          <PublicRoute exact path="/login" component={LoginPage} />
          {/* 
          {token ? (
            <Route exact path="/" render={() => <PrivateHome />} />
          ) : (
            <Redirect to="/login" />
          )} */}
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App

{
  /* <Switch>
   <Route exact path="/login" render={() => <LoginPage />} />
   <Route exact path="/" render={() => <HomePage />} /> 
  <PublicRoute
    // token={token}
    exact
    path="/"
    component={PublicHome}
  />
  <PublicRoute
    // token={token}
    exact
    path="/login"
    component={LoginPage}
  />

  <PrivateRoute
    exact
    path="/perfil"
    // token={token}
    component={PerfilPage}
  />

  <PrivateRoute
    // token={token}
    exact
    path="/private"
    component={PrivateHome}
  />

   <PublicRoute exact path="/" component={PublicHome} />
  <PrivateRoute exact token={token} path="/private" component={PrivateHome} /> 

   <PublicRoute
    exact
    getToken={getToken}
    path="/login"
    component={LoginPage}
  /> 

  <Route path="*" render={() => <Error404 />} />
</Switch> */
}
