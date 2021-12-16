import { Step, StepContent, StepLabel, Stepper } from "@material-ui/core"
import { useState } from "react"
import { Steps } from "./Steps/Steps"

export default function LoginStepper() {
  const [activeStep, setStep] = useState(1)
  return (
    <Stepper activeStep={activeStep} orientation="horizontal">
      {Steps.map(({ component, label }) => (
        <Step>
          <StepLabel> {label} </StepLabel>
          <StepContent> {component} </StepContent>
        </Step>
      ))}
    </Stepper>
  )
}
