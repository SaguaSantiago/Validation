import { makeStyles } from "@material-ui/core"
import { NavLink } from "react-router-dom"
import Layout from "../Components/AppNav/AppNav"
import { Styles } from "../Styles/Styles"

const useSyles = makeStyles(Styles.layout)

export default function IndexLayout(props) {
  const classes = useSyles()
  const { token } = props
  return (
    <>
      <Layout>
        <NavLink className={classes.navLink} to="/">
          Home
        </NavLink>

        {token ? (
          <NavLink
            activeClassName={classes.active}
            to="/perfil"
            className={classes.navLink}
          >
            Perfil
          </NavLink>
        ) : null}

        {token ? null : (
          <NavLink
            activeClassName={classes.active}
            className={classes.navLink}
            to="/login"
          >
            Login
          </NavLink>
        )}
      </Layout>
      <div className={classes.offSet}></div>
    </>
  )
}
