import { Step, StepLabel, Stepper } from "@material-ui/core"

// const useStyle = makeStyles({})

export default function CustomStepper({ steps, activeStep }) {
  return (
    <div>
      <Stepper alternativeLabel>
        {steps.map(({ label, index }) => (
          <Step active={activeStep === index ? true : false} key={index}>
            <StepLabel> {label} </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  )
}
