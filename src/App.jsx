import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/global"
import theme from "./theme/theme"
import Login from "./components/Login/Login";


function App() {
  return (
    <div className="App">
     <GlobalStyle />
     
     <ThemeProvider theme={theme}>
        <Login />
     </ThemeProvider>
   
    </div>
  );
}

export default App;
