import "./styles/main.scss";
import NavBar from "./components/NavBar/NavBar";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { UserContextProvider } from "./components/UserProvider";
import RegisterForm from "./pages/RegisterForm/RegisterForm";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider"
// import routes from "./Config/routes";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";



function App() {


  return (
    <div className="App">
    <UserContextProvider>
      <ThemeProvider>
        <Router>
           <NavBar />
           <Routes>
              <Route path="/" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/registerform" element={<RegisterForm />} />
           </Routes>
           <Footer />
        </Router>
      </ThemeProvider>
    </UserContextProvider>
    </div>
  );
}

export default App;
