import { useState } from 'react'
import Header from '../Components/Layout/Header'
import Footer from '../Components/Layout/Footer'
import ContactForm from '../Components/Home/EmailForm'

import construction from "../assets/construction.jpeg"
import renovation from "../assets/renovation.jpeg"
import upgradation from "../assets/upgradation.jpeg"
import farmHouse from "../assets/farmHouse.jpeg"
import civilWorks from "../assets/carouselCivilWork.jpeg"

export default function CivilWorks() {
  const [showEmailForm, setShowEmailForm] = useState(false)

  const services = [
    { title: 'Construction', image: construction },
    { title: 'Renovation', image: renovation },
    { title: 'Upgradation', image: upgradation },
    { title: 'Farmhouses', image: farmHouse }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <ContactForm
        isOpen={showEmailForm}
        onClose={() => setShowEmailForm(false)}
        showAsModal
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative text-white overflow-hidden">
        <img
          src={civilWorks}
          alt="Civil Works"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#071020]/90 to-[#0b2740]/90" />

        <div className="relative container mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Civil Works & Construction Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-[#e6c56a]">
            Delivered by <span className="font-bold">AM Renovators</span> —
            our dedicated construction & renovation brand
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="https://am-renovators.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl text-lg font-bold text-white transition transform hover:scale-105"
              style={{
                background: 'linear-gradient(135deg,#d4af37,#b98f2b)'
              }}
            >
              Visit AM Renovators
            </a>

            <button
              onClick={() => setShowEmailForm(true)}
              className="px-8 py-4 rounded-xl text-lg font-bold border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white transition"
            >
              Request Consultation
            </button>
          </div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="container mx-auto px-6 py-20 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#071020]">
          About AM Renovators
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          AM Renovators is the construction and renovation arm of
          <strong> BIG B NRI Services</strong>, created to deliver
          high-quality, transparent, and professionally managed civil
          solutions. From end-to-end construction to premium renovations
          and farmhouse development, our team ensures quality execution
          with complete peace of mind.
        </p>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="container mx-auto px-6 pb-20">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#071020]">
          Our Core Services
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <a
              key={index}
              href="https://am-renovators.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end justify-center p-4">
                <h4 className="text-white text-xl font-bold">
                  {service.title}
                </h4>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-[#071020] text-white py-20">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h3 className="text-3xl font-bold mb-6">
            Looking for Trusted Construction Services?
          </h3>
          <p className="text-lg mb-10 text-[#e6c56a]">
            Explore our complete portfolio, service details, and project
            approach on the official AM Renovators website.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://am-renovators.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-xl text-lg font-bold text-[#071020]"
              style={{
                background: 'linear-gradient(135deg,#d4af37,#ffd86b)'
              }}
            >
              Go to AM Renovators
            </a>

            <a
              href="https://wa.me/919989103388"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-xl text-lg font-bold border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#071020] transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
