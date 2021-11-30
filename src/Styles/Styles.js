import { makeStyles } from "@material-ui/core"

const layout = (theme) => ({
  navLink: {
    textDecoration: "none",
    color: "#ffffff",
    fontFamily: "Tahoma, sans-serif",
    marginRight: "15px",
  },
  offSet: {
    ...theme.mixins.toolbar,
    marginBottom: "1rem",
  },
  active: {
    color: "#ccc",
  },
})

const inputErrors = makeStyles({
  errorContainer: {
    height: "20px",
  },
})

const CustomInputs = makeStyles({
  errorContainer: {
    height: "20px",
  },
})

const LoginForm = makeStyles({
  flexItem: {
    marginBottom: "40px",
    marginTop: "40px",
    width: "60%",
  },
  input: {
    marginBottom: "20px",
    width: "100%",
  },
  button: {
    marginBottom: "20px",
    alignItems: "center",
    marginTop: "20px",
  },
})

export const Styles = {
  layout,
  inputErrors,
  CustomInputs,
  LoginForm,
}
