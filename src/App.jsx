import './App.css'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop.jsx' // Add this import
import HomePage from './Components/HomePage.jsx'
import PropertyManagement from './Pages/PropertyManagement.jsx'
import OnlineServices from './Pages/OnlineServices.jsx'
import Finance from './Pages/Finance.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import CivilWorks from './Pages/CivilWorks.jsx'
import ContactUs from './Pages/ContactUs.jsx'
import VitalRecords from './Pages/VitalRecords.jsx'
import CompleteDocument from './Pages/CompleteDocument.jsx'
import TaxesLegal from './Pages/TaxesLegal.jsx'
import BusinessConsulting from './Pages/BusinessConsulting.jsx'
import Banking from './Pages/Banking.jsx'
import Health from './Pages/Health.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop /> {/* Add this line */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property-management" element={<PropertyManagement />} />
        <Route path="/online-services" element={<OnlineServices />} />
        <Route path="/financial-legal" element={<Finance />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/civil-works" element={<CivilWorks />} />
        <Route path="/vital-records" element={<VitalRecords />} />
        <Route path="/complete-document" element={<CompleteDocument />} />
        <Route path="/taxes-legal" element={<TaxesLegal />} />
        <Route path="/business-consulting" element={<BusinessConsulting />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/health" element={<Health />} />
        <Route path="*" element={<div className="p-12 text-center">Page not found</div>} />
      </Routes>
    </div>
  )
}

export default App