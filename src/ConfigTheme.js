import { createTheme } from "@material-ui/core"
import { red, teal } from "@material-ui/core/colors"

export const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: "#004d40",
      dark: "00352c",
    },
    error: {
      main: red[900],
    },
  },
  typography: {
    overline: {
      // fontWeight: "600",
      fontSize: "1rem",
    },
    h6: {
      fontFamily: "'Courier New', monospace",
      fontWeight: "600",
    },
  },
})
