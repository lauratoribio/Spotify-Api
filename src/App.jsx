import "./styles/main.scss";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./pages/Home/Home";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";



function App() {


  return (
    <div className="App">
     <Router>
       <NavBar />
       <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
