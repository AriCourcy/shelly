import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Settings from './pages/Settings'
import NavBar from './pages/Navbar'
import CustomTheme from './theme/CustomTheme'

function App() {

  return (
    <CustomTheme>
      <main style={{ display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
        <BrowserRouter basename="/shelly">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <NavBar></NavBar>
        </BrowserRouter>
      </main>
    </CustomTheme>
  )
}

export default App
