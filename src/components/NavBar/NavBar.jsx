import React from 'react'
// import { Link } from "react-router-dom";


export default function NavBar() {
  return (
   <header>  
       <nav className="nav-bar">
           <p className="nav-bar__title">Musify</p>
           <input type="checkbox" name="" className="nav-bar__checkBtn" />
           <ol className="nav-bar__links">    
        
                  <li className="nav-bar__links__item">Account</li>
          
        
                  <li className="nav-bar__links__item">Log out</li>
          
           </ol>
       </nav>
    </header> 
  )
}
