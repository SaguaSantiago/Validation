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
  const [activeStep, setStep] = useState(1)
  return (
    <Stepper alternativeLabel>
      {Steps.map(({ component, label, index }) => (
        <Step active={activeStep === index ? true : null} key={index}>
          <StepLabel> {label} </StepLabel>

          <div>{component}</div>
        </Step>
      ))}
    </Stepper>
  )
}
