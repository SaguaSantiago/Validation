import React from "react"
import { Button, Grid } from "@material-ui/core"
import { Form, Formik } from "formik"
import { validationLogin } from "../../Validation/IndexValidation"
import { useHistory } from "react-router-dom"
import { usuaries } from "../../Usuaries/usuaries"
import FieldNormal from "../CustomComponents/Fields/Normal"
import { useStyles } from "./style"

export default function LoginForm(props) {
  const history = useHistory()
  const classes = useStyles()
  const INPUTS = [
    {
      id: 1,
      name: "email",
      label: "Email",
      sm: 12,
      xs: 12,
    },
    {
      id: 2,
      name: "password",
      label: "Contrase;a",
      sm: 12,
      xs: 12,
    },
  ]

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationLogin}
        onSubmit={(valores) => {
          if (
            valores.email === usuaries[0].gmail &&
            valores.password === usuaries[0].password
          ) {
            props.isLogin()
            localStorage.setItem("isLogin", true)
            history.push("/")
          }
        }}
      >
        {({ values }) => (
          <Form className={classes.flexItem}>
            <Grid
              container
              spacing={2}
              alignContent="center"
              alignItems="center"
              justifyContent="center"
            >
              {INPUTS.map(({ name, label, xs, sm }) => (
                <Grid item sm={sm} xs={xs}>
                  <FieldNormal name={name} label={label} />
                </Grid>
              ))}
            </Grid>
            <Grid item sm={12} xs={12} className={classes.button}>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                type="submit"
                name="submit"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  )
}
