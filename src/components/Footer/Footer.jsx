import React from 'react'

import { useDarkTheme } from "../ThemeProvider/ThemeProvider"

export default function Footer() {

  const darkTheme = useDarkTheme()

  const theme = {
    backgroundColor: darkTheme ?  "#141414" : "#b892ff",
    borderTop: darkTheme && "solid 1px #FFFFFF"
  }

  return (
    <div className="footer" style={theme}>
        <p>© 2022 Musify AB</p>
    </div>
  )
}
