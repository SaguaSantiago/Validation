import { Typography } from "@material-ui/core";




export default function ErrorsInput ( props ) {

    return(

        <div>

            <Typography variant = "body2" color="error" > {props.errors} </Typography>

        </div>
    )
}