import React, { useEffect, useState } from 'react';
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
import { setClientToken } from './spotify';
import Account from './pages/Account/Account';
import SideBar from './components/SideBar/SideBar';



function App() {

  const [token, setToken] = useState()

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    const hash = window.location.hash
    window.location.hash = ""
    if(!token && hash) {
      const _token = hash.split("&")[0].split("=")[1]
      window.localStorage.setItem("token", _token)
      setToken(_token)
      setClientToken(_token)
    } else {
      setToken(token)
      setClientToken(token)
    }
  }, [])

  return !token ? (
    <Login />
  ) : (
    <div className="App">
    <UserContextProvider>
      <ThemeProvider>
        <Router>
           <NavBar />
           <SideBar />
           <Routes>
              <Route path="/" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/registerform" element={<RegisterForm />} />
              <Route path="/account" element={<Account />} />
           </Routes>
           <Footer />
        </Router>
      </ThemeProvider>
    </UserContextProvider>
    </div>
  )
}

export default App;
