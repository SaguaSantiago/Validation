import { makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import AppNAV from "../Components/AppNav/AppNav";
import Error404 from "../Pages/Error404";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import PerfilPage from "../Pages/PerfilPage"

const useStyles = makeStyles((theme) => ({
    navLink: {
        textDecoration: "none",
        color: "#ffffff",
        fontFamily: "Tahoma, sans-serif",
        marginRight: "15px",
    },
    offSet: {
        ...theme.mixins.toolbar,
        marginBottom: "1rem",
      },
    active: {
        color: "#ccc",
    }
}))

export default function AppRoutes( ) {

    const classes = useStyles() 

    const [auth,setAuth] = useState( false )

    const isLogin = ()=>{

        if (!auth) setAuth(true)
    }

    return (

        <Router>
            
            <AppNAV>
                
                <NavLink  className={classes.navLink} to="/"> Home </NavLink> 
                <NavLink  className={classes.navLink} to="/Login"> Login </NavLink> 

                { auth ?  <NavLink to= "/Perfil" className={classes.navLink}> Perfil </NavLink> : null}

            </AppNAV>

            <div className={classes.offSet}></div>
            <Routes>
                <Route path="/Login" element={<LoginPage isLogin={ isLogin } />} />
                <Route path="/" element={<HomePage/>} />
                <Route path="*" element={<Error404/>} />
                { auth ? <Route path="/Perfil" element={<PerfilPage/>}/> : null} 
            </Routes>

        </Router>
    )
}