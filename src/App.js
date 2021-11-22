import { ThemeProvider }  from "@material-ui/core/styles"
import AppRoutes from './Routers/AppRoutes';
import { theme } from "./ConfigTheme";


function App() {



  return (
   
    <ThemeProvider theme={theme} >

    <div>
      <AppRoutes/>
    </div>

    </ThemeProvider>
  );
}

export default App;
