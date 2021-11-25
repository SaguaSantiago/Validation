import { makeStyles, Paper } from "@material-ui/core"
import LoginForm from "../Components/Form/Form"

const useStyles = makeStyles({

    paper: {
        display: "flex",
        maxWidth : "50%",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto"
    },
})

export default function LoginPage ( props ) {

    const classes = useStyles()

    return ( 
        <Paper className= {classes.paper}>

        <LoginForm isLogin={ props.isLogin } />
        
        </Paper>
        )
}