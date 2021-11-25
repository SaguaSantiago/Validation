import { TextField } from "@material-ui/core";


export default function EmailInput (props) {

 return(

<TextField

     {...props}
     fullWidth
     variant= "outlined"
     placeholder="Email" 
     name="email" 
     label="Email"
     // value = {props.value}
     // onChange={props.onChange}
     // onBlur= {props.onBlur}
     autoComplete= "off"
      />



 )
}