const Step1 = () => {
  return <div>Step</div>
}

const Step2 = () => {
  return <div>Step 2</div>
}

const Step3 = () => {
  return <div>Step 3</div>
}

export const Steps = [
  {
    label: "Step 1",
    component: <Step1 />,
    index: 1,
  },
  {
    label: "Step 2",
    component: <Step2 />,
    index: 2,
  },
  {
    label: "Step 3",
    component: <Step3 />,
    index: 3,
  },
]
