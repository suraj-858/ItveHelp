
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './Pages/About'
import ContactPage from './Pages/Contact'
import Event from './Pages/Event'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='h-screen w-[100%]'>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/event' element={<Event />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
