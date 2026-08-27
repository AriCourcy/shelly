import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Settings from './pages/settings'
import NavBar from './pages/navBar'
import CustomTheme from './theme/customTheme'

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
