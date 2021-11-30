import { Typography } from "@material-ui/core"
import { Styles } from "../../../Styles/Styles"

export default function ErrorsInput(props) {
  const classes = Styles.inputErrors

  return (
    <div className={classes.errorContainer}>
      <Typography variant="body2" color="error">
        {props.errors}
      </Typography>
    </div>
  )
}
