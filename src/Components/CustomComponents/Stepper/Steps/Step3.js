import { Typography } from "@material-ui/core"
import { Styles } from "../../../../Styles/Styles"

const useStyles = Styles.steps

export const Step3 = ({ ...props }) => {
  const classes = useStyles()
  return (
    <div {...props}>
      <div className={classes.Typography}>
        <Typography align="center" variant="h6">
          {" "}
          Registrado con exito pulse "Siguiente" para dirigirte a LogIn
        </Typography>
      </div>
    </div>
  )
}
