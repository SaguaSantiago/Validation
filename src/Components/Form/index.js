import React from "react"
import { Button, Grid } from "@material-ui/core"
import { Form, Formik } from "formik"
import { validationLogin } from "../../Validation/IndexValidation"
import { useHistory } from "react-router-dom"
import { usuaries } from "../../Usuaries/usuaries"
import FieldNormal from "../CustomComponents/Fields/Normal"
import { Styles } from "../../Styles/Styles"
import { INPUTS } from "../../Objects/Objects"

const useStyle = Styles.LoginForm

export default function LoginForm(props) {
  const history = useHistory()
  const classes = useStyle()

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
            localStorage.setItem("Logged", "true")
            history.push("/dashboard")
          }
        }}
      >
        {({ values }) => (
          <Form className={classes.flexItem} autoComplete="off">
            <Grid
              container
              spacing={2}
              alignContent="center"
              alignItems="center"
              justifyContent="center"
            >
              {INPUTS.map(({ id, name, label, xs, sm }) => (
                <Grid item sm={sm} xs={xs}>
                  <FieldNormal key={id} name={name} label={label} />
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
