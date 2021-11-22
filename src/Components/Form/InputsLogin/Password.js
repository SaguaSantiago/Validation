import { TextField } from "@material-ui/core";



export default function PasswordInput ( props ) {

    return ( 
        <TextField

        {...props}
     type= "password"
     placeholder="Password" 
     name="password" 
     label="Password"
     autoComplete= "off"
      />
        
    )
}