import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import NavBar from './pages/navBar'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#a6ca93'
    },
  },
})

function App() {

  return (
    <ThemeProvider theme={theme}>
    <main style={{ display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
      <BrowserRouter basename="/shelly">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <NavBar></NavBar>
      </BrowserRouter>
    </main>
    </ThemeProvider>
  )
}

export default App
