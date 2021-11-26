import { TextField } from "@material-ui/core"
import { makeStyles, Typography } from "@material-ui/core"
import { useField } from "formik"
export default function FieldNormal({ ...props }) {
  const [field, meta] = useField(props)
  const useStyles = makeStyles({
    errorContainer: {
      height: "20px",
    },
  })
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
