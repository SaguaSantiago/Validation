import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core"

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
})

export default function AppNAV({ children }) {
  const classes = useStyles()

  return (
    <AppBar>
      <Toolbar>
        <div className={classes.title}>
          <div className={classes.titleText}>
            <Typography variant="overline" color="inherit">
              {" "}
              Sagua Proyect{" "}
            </Typography>
          </div>
        </div>

        <div>{children}</div>
      </Toolbar>
    </AppBar>
  )
}
