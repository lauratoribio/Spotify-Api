import "./styles/main.scss";
import NavBar from "./components/NavBar/NavBar";
import Login from "./pages/Login/Login";
import RegisterReducer from "./pages/RegisterReducer/RegisterReducer";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import UserProvider from "./components/UserProvider/UserProvider";
import RegisterForm from "./pages/RegisterForm/RegisterForm";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";



function App() {


  return (
    <div className="App">
    <UserProvider>
        <Router>
           <NavBar />
           <Routes>
              <Route path="/" element={<RegisterReducer />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/registerform" element={<RegisterForm />} />
           </Routes>
           <Footer />
         </Router>
    </UserProvider>
    </div>
  );
}

export default App;
