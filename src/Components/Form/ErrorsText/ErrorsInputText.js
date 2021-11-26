import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
  errorContainer: {
    height: "20px",
  },
})

export default function ErrorsInput(props) {
  const classes = useStyles()

  return (
    <div className={classes.errorContainer}>
      <Typography variant="body2" color="error">
        {props.errors}
      </Typography>
    </div>
  )
}
