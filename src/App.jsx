import React from 'react'
import Login from './pages/login.jsx'
import Register from './Register/ProviderForm.jsx'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/nav.jsx'
import Workers from './pages/workers.jsx'
import Home from './pages/home.jsx'
import Footer from './components/footer.jsx'
import Profile from './components/Profile.jsx'
import About from './pages/about.jsx'
import EstimateDetails from './Estimate/estimatedets.jsx'
import Estimatefront from './Estimate/Estimatefront.jsx'
import Contact from './pages/contact.jsx'
// import ProfileDetails from './components/Profile-Card.jsx'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={< Contact/>} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path='/estimates' element={<Estimatefront />} />
        <Route path="/estimate/:id" element={<EstimateDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
