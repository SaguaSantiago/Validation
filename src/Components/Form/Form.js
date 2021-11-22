import React from 'react';
import { Button, makeStyles, Paper } from '@material-ui/core';
import { Formik } from 'formik';
import { validationLogin } from "../../Validation/IndexValidation"
import EmailInput from './InputsLogin/Email';
import PasswordInput from './InputsLogin/Password';
import { useNavigate } from "react-router-dom"
import { usuaries } from '../../Usuaries/usuaries';
import ErrorsInput from './ErrorsText/ErrorsInputText';

const useStyles = makeStyles({

    paper: {
        maxWidth : "50%"
    }
})


export default function LoginForm ( props ) {

    const history = useNavigate()
    const classes = useStyles()

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

                    <Paper className={ classes.paper } >
                
                <form onSubmit={handleSubmit}>

                    <EmailInput
                        value={values.email}
                        onChange={handleChange}
                        onBlur= {handleBlur}
                        error= {errors.email}

                        />

                            {touched.email && errors.email ? <ErrorsInput errors = {errors.email} /> : null} 
                        

                    <div>
                
                        <PasswordInput
                        value={values.password}
                        onChange={handleChange}
                        onBlur= {handleBlur}
                        error= {errors.password}
                        />

                            {touched.password && errors.password ? <ErrorsInput errors = {errors.password} /> : null} 

                    </div>

                    <div>
                        <Button variant="contained" color="secondary" type="submit" name="submit"> Submit </Button>
                    </div>
                
                </form>
                </Paper>
                )}

 </Formik>
        </>
    )
}