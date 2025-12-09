import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage.jsx'
import PropertyManagement from './Pages/PropertyManagement.jsx'
import OnlineServices from './Pages/OnlineServices.jsx'
import Finance from './Pages/Finance.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import ContactUs from './Pages/ContactUs.jsx'


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property-management" element={<PropertyManagement />} />
          <Route path="/online-services" element={<OnlineServices />} />
          <Route path="/financial-legal" element={<Finance />} />
          <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="*" element={<div className="p-12 text-center">Page not found</div>} />
      </Routes>
    </div>
  )
}

export default App
