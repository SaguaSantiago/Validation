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

const registerPageStyles = makeStyles({
  buttonGroup: {
    display: "flex",
  },
  backButton: {
    flex: "1",
    marginLeft: "20%",
  },
  nextButton: {
    marginRight: "20%",
  },
  content: {
    marginBottom: "40px",
  },
  paper: {
    maxWidth: "70%",
    minHeight: "500px",
    margin: "auto",
    padding: "10px",
  },
  select: {
    minWidth: "50%",
  },
})

const steps = makeStyles({
  select: {
    minWidth: "30%",
  },
  Typography: {
    padding: "50px",
  },
  button: {
    margin: "auto",
  },
})

export const Styles = {
  layout,
  inputErrors,
  CustomInputs,
  LoginForm,
  registerPageStyles,
  steps
}
