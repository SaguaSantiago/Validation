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

//  en vez de eso proba usar Swich

function example(index) {
  switch (index) {
    case 1:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
      return <div>hello</div>
    case "valor2":
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
      break
    case "valor 3":
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
      break
    default:
      //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
      break
  }
}
