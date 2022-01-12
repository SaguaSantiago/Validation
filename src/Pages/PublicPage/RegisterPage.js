import { Button, Paper } from "@material-ui/core"
import { useState } from "react"
import RegisterStepper from "../../Components/CustomComponents/Stepper"
import StepperSteps, {
  Steps,
} from "../../Components/CustomComponents/Stepper/Steps/Steps"
import { Formik } from "formik"
import {
  validationRegisterStep1,
  validationRegisterStep2,
} from "../../Validation/IndexValidation"
import { Styles } from "../../Styles/Styles"
import { useHistory } from "react-router-dom"

const useStyles = Styles.registerPageStyles

export default function RegisterPage() {
  const [activeStep, setActiveStep] = useState(1)
  const classes = useStyles()
  const history = useHistory()

  function handleBack() {
    if (activeStep >= 2) {
      setActiveStep(activeStep - 1)
    }
  }
  function validationSchema(index) {
    switch (index) {
      case 1:
        return validationRegisterStep1
      case 2:
        return validationRegisterStep2
      default:
        break
    }
  }

  return (
    <Formik
      initialValues={{
        name: "",
        lastName: "",
        userName: "",
        password: "",
        email: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema(activeStep)}
      onSubmit={(data) => {
        console.log("enviado", data)
        if (activeStep <= 2) {
          setActiveStep(activeStep + 1)
        } else {
          history.push("/login")
        }
      }}
    >
      {({ handleSubmit }) => (
        <Paper className={classes.paper}>
          <div>
            <RegisterStepper steps={Steps} activeStep={activeStep} />
          </div>

          <form autoComplete="off">
            <div>
              <StepperSteps index={activeStep} className={classes.content} />
            </div>
            <div className={classes.buttonGroup}>
              <div className={classes.backButton}>
                <Button
                  onClick={handleBack}
                  disabled={activeStep === 1 ? true : false}
                  size="small"
                  variant="contained"
                  color="primary"
                >
                  Atras
                </Button>
              </div>

              <div className={classes.nextButton}>
                <Button
                  onClick={handleSubmit}
                  size="small"
                  variant="contained"
                  color="primary"
                >
                  Siguiente
                </Button>
              </div>
            </div>
          </form>
        </Paper>
      )}
    </Formik>
  )
}
