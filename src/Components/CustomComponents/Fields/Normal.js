import { TextField } from "@material-ui/core"
import { Typography } from "@material-ui/core"
import { useField } from "formik"
import { Styles } from "../../../Styles/Styles"

export default function FieldNormal({ ...props }) {
  const [field, meta] = useField(props)
  const useStyles = Styles.CustomInputs
  function ErrorsInput(props) {
    const classes = useStyles()
    return (
      <div className={classes.errorContainer}>
        <Typography variant="body2" color="error">
          {props.errors}
        </Typography>
      </div>
    )
  }

  return (
    <div>
      <TextField
        {...props}
        {...field}
        fullWidth
        error={meta.touched && meta.error}
      />
      <ErrorsInput errors={meta.touched && meta.error} />
    </div>
  )
}
