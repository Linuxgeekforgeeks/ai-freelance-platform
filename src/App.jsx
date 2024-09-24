import React from 'react'
import LandingPage from './pages/landingpage/LandingPage'
import { Navbar } from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <LandingPage />
      <Footer/>
    </div>
  )
}

export default App