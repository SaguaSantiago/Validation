import { ThemeProvider } from "@material-ui/core/styles"
import Layout from "./Routers/Layout"
import { theme } from "./ConfigTheme"
import Error404 from "./Pages/Error404"
import PublicHome from "./Pages/HomePage"
import PrivateHome from "./Pages/PrivateHome"
import LoginPage from "./Pages/LoginPage"
import PerfilPage from "./Pages/PerfilPage"
import PrivateRoute from "./Routes/PrivateRoute"
import PublicRoute from "./Routes/PublicRoute"
import { Switch, Route } from "react-router"
import { BrowserRouter as Router } from "react-router-dom"

function App(props) {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout token={props.token} />

        <Switch>
          <PublicRoute exact path="/" component={PublicHome} />
          <PrivateRoute exact path="/dashboard" component={PrivateHome} />
          <PrivateRoute exact path="/perfil" component={PerfilPage} />

          <PublicRoute exact path="/login" component={LoginPage} />

          <Route path="*" render={() => <Error404 />} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
