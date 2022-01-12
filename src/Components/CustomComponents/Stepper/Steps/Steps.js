import { Step1 } from "./Step1"
import { Step2 } from "./Step2"
import { Step3 } from "./Step3"

export const Steps = [
  {
    label: "Paso 1",
    index: 1,
  },
  {
    label: "Paso 2",
    index: 2,
  },
  {
    label: "Paso 3",
    index: 3,
  },
]

export default function StepperSteps({ index, ...rest }) {
  switch (index) {
    case 1:
      return <Step1 {...rest} />
    case 2:
      return <Step2 {...rest} />

    case 3:
      return <Step3 {...rest} />

    default:
      break
  }
}
