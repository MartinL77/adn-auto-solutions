import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar/NavBar'
import HomePage from './pages/homePage/HomePage'
import DealerPage from './pages/dealerPage/DealerPage'
import AboutPage from './pages/aboutPage/aboutPage'
import ContactPage from './pages/contactPage/contactPage'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dealer" element={<DealerPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>           
  )
}

export default App
