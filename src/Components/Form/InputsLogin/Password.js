import { TextField } from "@material-ui/core";



export default function PasswordInput ( props ) {

    return ( 
        <TextField

        {...props}
     fullWidth
     variant= "outlined"
     type= "password"
     placeholder="Password" 
     name="password" 
     label="Password"
     autoComplete= "off"
      />
        
    )
}