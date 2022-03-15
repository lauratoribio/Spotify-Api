import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { useDarkTheme, useUpdateDarkTheme } from "../ThemeProvider/ThemeProvider"
import { Link } from 'react-router-dom';

// import { Link } from "react-router-dom";


export default function NavBar() {

  const darkTheme = useDarkTheme()
  const toggleTheme = useUpdateDarkTheme()

  const theme = {
    backgroundColor: darkTheme ?  "#141414" : "#b892ff",
    borderBottom: darkTheme && "solid 1px #FFFFFF"
  }

  const submenu = {
    backgroundColor: darkTheme ?  "#141414" : "#e7c6ff",
    borderBottom: darkTheme && "solid 1px #FFFFFF"
  }

  return (
   <header style={theme}>  
       <nav className="nav-bar">
           <Link to="/home"><p className="nav-bar__title">Musify</p></Link>
              <div onClick={toggleTheme}>
              {darkTheme ? (
                    <LightModeIcon fontSize='large' sx={{color:"white"}}/>
                ) : (
                    <DarkModeIcon fontSize='large' sx={{color:"white"}}/>
                )}
              </div>
             <input type="checkbox" name="" className="nav-bar__checkBtn" />
             <ol className="nav-bar__links" style={submenu}>    
                  <Link to="/account">
                     <li className="nav-bar__links__item">Account</li>
                  </Link>
                  <Link to="/register">
                    <li className="nav-bar__links__item">Log out</li>
                  </Link>    
           </ol>
       </nav>
    </header> 
  )
}
