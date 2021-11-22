import { TextField } from "@material-ui/core";


export default function EmailInput (props) {

 return(
<div>
<TextField

     {...props}
     placeholder="Email" 
     name="email" 
     label="Email"
     // value = {props.value}
     // onChange={props.onChange}
     // onBlur= {props.onBlur}
     autoComplete= "off"
      />


 </div>

 )
}