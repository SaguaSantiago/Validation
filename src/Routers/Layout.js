import { makeStyles } from "@material-ui/core"
import { NavLink } from "react-router-dom"
import Layout from "../Components/AppNav/AppNav"
import { Styles } from "../Styles/Styles"

const useSyles = makeStyles(Styles.layout)

export default function IndexLayout({ token }) {
  const classes = useSyles()
  return (
    <>
      <Layout>
        {/* <a onClick={localStorage.removeItem("isLogin")} /> */}

        <NavLink className={classes.navLink} to="/">
          Home
        </NavLink>
        <NavLink
          activeClassName={classes.active}
          className={classes.navLink}
          to="/login"
        >
          Login
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
      </Layout>
      <div className={classes.offSet}></div>
    </>
  )
}
