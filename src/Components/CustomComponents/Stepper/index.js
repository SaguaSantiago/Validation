import {
  makeStyles,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core"
import { useState } from "react"
import { Steps } from "./Steps"

// const useStyle = makeStyles({})

export default function RegisterStepper() {
  //  los estados van con el mismo nombre, el segundo se le agrega un set antes del nombre.
  // ejemplo state, setState. Siempre usando camelCase
  const [activeStep, setStep] = useState(1)

  return (
    <Stepper alternativeLabel>
      {Steps.map(({ component, label, index }) => (
        <Step active={activeStep === index ? true : null} key={index}>
          <StepLabel> {label} </StepLabel>
        </Step>
        // <div>{component}</div>
      ))}
    </Stepper>
    //  el stepper es indiferente del contenido, solo es lo de arriba 
    // proba meter un switch ahora por fuera, tene en cuenta que el valor del step debe coincidir con el valor del switch
    //  pero de eso te vas a dar cuenta
     
  )
}
