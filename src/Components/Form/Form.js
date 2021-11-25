import React, { useState } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { Formik } from 'formik';
import { validationLogin } from "../../Validation/IndexValidation"
import EmailInput from './InputsLogin/Email';
import PasswordInput from './InputsLogin/Password';
import { useNavigate } from "react-router-dom"
import { usuaries } from '../../Usuaries/usuaries';
import ErrorsInput from './ErrorsText/ErrorsInputText';

const useStyles = makeStyles({
    flexItem: {
        marginBottom: "40px",
        marginTop: "40px",
        width: "60%"
    },
    input : {
        marginBottom : "20px",
        width: "100%"
    },
    button : {
        marginBottom : "20px"
    }
})


export default function LoginForm ( props ) {

    const history = useNavigate()
    const classes = useStyles()
    const [ErrorEmail,setErrorEmail] = useState(false)
    const [ErrorPass, setErrorPass] = useState(false)

    return(
        <>
        <Formik

        initialValues={{
            email: "",
            password: ""
        }}

        validationSchema = { validationLogin }

        onSubmit={(valores) =>{
            
            if (valores.email === usuaries[0].gmail && valores.password === usuaries[0].password ) {

                props.isLogin()

                history("/")
            }
        }}
        >

                {({handleSubmit, values, handleChange, handleBlur, errors, touched,})=> (


                
                <form className={classes.flexItem} onSubmit={handleSubmit}>

                    <div className= {classes.input}>
                    <EmailInput
                        value={values.email}
                        onChange={handleChange}
                        onBlur= {handleBlur}
                        errors= {errors.email}
                        error= {ErrorEmail}
                        />

                            {touched.email && errors.email ? setErrorEmail(true) : setErrorEmail(false)}

                            {touched.email && errors.email ? <ErrorsInput errors = {errors.email} /> : null} 
                        
                    </div>

                    <div className= {classes.input}>
                
                        <PasswordInput
                        value={values.password}
                        onChange={handleChange}
                        onBlur= {handleBlur}
                        errors= {errors.password}
                        error = {ErrorPass}
                        
                        />
                            {touched.password && errors.password ? setErrorPass(true) : setErrorPass(false)}

                            {touched.password && errors.password ? <ErrorsInput errors = {errors.password} /> : null} 

                    </div>

                    <div className= {classes.button}>
                        <Button 
                        variant="contained"
                        size= "large" 
                        color="secondary" 
                        type="submit" 
                        name="submit"
                        > 
                        Submit 

                        </Button>
                    </div>
                
                </form>
                )}

 </Formik>
        </>
    )
}