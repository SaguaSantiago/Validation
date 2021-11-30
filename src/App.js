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
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  const token = localStorage.getItem("isLogin")

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout />

        <Switch>
          {/* <Route exact path="/login" render={() => <LoginPage />} />
          {/* <Route exact path="/" render={() => <HomePage />} />
          <PublicRoute
            getToken={getToken}
            exact
            path="/"
            component={PublicHome}
          />

          <PrivateRoute
            exact
            path="/perfil"
            getToken={getToken}
            component={PerfilPage}
          />

          <PrivateRoute
            getToken={getToken}
            exact
            path="/private"
            component={PrivateHome}
          /> */}

          <PublicRoute exact path="/" component={PublicHome} />

          {/* <PublicRoute
            exact
            getToken={getToken}
            path="/login"
            component={LoginPage}
          /> */}

          <Route path="*" render={() => <Error404 />} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
