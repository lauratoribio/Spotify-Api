import GlobalStyle from "./theme/global"
import theme from "./theme/theme"
import LoginRegister from "./components/LoginRegister/LoginRegister";


function App() {
  return (
    <div className="App">
     <GlobalStyle />
     <LoginRegister />
    </div>
  );
}

export default App;
