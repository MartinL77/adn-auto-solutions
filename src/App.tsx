import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar/NavBar'
import HomePage from './pages/homePage/HomePage'
import DealerPage from './pages/dealerPage/DealerPage'
import ContactPage from './pages/contactPage/ContactPage'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dealer" element={<DealerPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>           
  )
}

export default App
