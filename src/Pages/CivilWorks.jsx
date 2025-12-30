import { useState } from 'react'
import Footer from '../Components/Layout/Footer';
import Header from '../Components/Layout/Header';
import ContactForm from '../Components/Home/EmailForm';
import construction from "../assets/construction.jpeg";
import upgradation from "../assets/upgradation.jpeg";
import renovation from "../assets/renovation.jpeg";
import farmHouse from "../assets/farmHouse.jpeg";
import civilWorks from "../assets/carouselCivilWork.jpeg";

export default function CivilWorks() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  const services = [
    {
      // title: 'Construction',
      image: construction,
      icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    },
    {
      // title: 'Renovation',
      image: renovation,
      icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    },
    {
      // title: 'Upgradation',
      image: upgradation,
      icon: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>
    },
    {
      // title: 'Farmhouses',
      image: farmHouse,
      icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></>
    }
  ];

  return (
    <main className="min-h-screen" style={{background: 'linear-gradient(135deg, rgba(247, 230, 181, 0.1) 0%, rgba(255, 255, 255, 0.95) 100%)'}}>
      <Header/>

      <ContactForm 
        isOpen={showEmailForm}
        onClose={() => setShowEmailForm(false)}
        showAsModal={true}
      />

      {/* Hero Section - Updated with lighter overlay */}
      <div className="relative overflow-hidden text-white">
        {/* Main background with imported image */}
        <div className="absolute inset-0">
          <img 
            src={civilWorks} 
            alt="Civil Works Background"
            className="w-full h-full object-cover"
          />
          {/* Lighter overlay for better image visibility */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, rgba(7, 16, 32, 0.7) 0%, rgba(11, 39, 64, 0.8) 100%)'
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Civil Works & Construction Services
              <div className="w-32 h-1 mt-6 rounded-full mx-auto" style={{background: 'linear-gradient(90deg, #d4af37 0%, #ffd86b 100%)'}}></div>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-8" style={{color: '#bfa46f'}}>
              Premium construction, renovation, and maintenance services through AM Renovators
            </p>
            <p className="text-lg" style={{color: '#e6c56a'}}>
              A Subsidiary of BIG B NRI Services
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-32 translate-x-32" 
             style={{background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)'}}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full translate-y-48 -translate-x-48"
             style={{background: 'radial-gradient(circle, rgba(11, 39, 64, 0.2) 0%, transparent 70%)'}}></div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Coming Soon Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl mb-12"
               style={{
                 border: '2px solid rgba(212, 175, 55, 0.3)',
                 boxShadow: '0 30px 60px rgba(11, 39, 64, 0.15)'
               }}>
            <div className="p-12 md:p-16 text-center">
              
              {/* Icon */}
              <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
                   style={{background: 'linear-gradient(135deg, #d4af37 0%, #b98f2b 100%)'}}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{color: '#071020'}}>
                We're Building Something Special
              </h2>
              
              <p className="text-xl mb-8 leading-relaxed" style={{color: '#5a4a1a'}}>
                Our dedicated website for AM Renovators construction services is currently under development. 
                We're creating a comprehensive platform to showcase our expertise in construction, renovation, maintenance, and farmhouse development.
              </p>

              {/* Services Preview with Images */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {services.map((service, index) => (
                  <div key={index} className="relative rounded-xl overflow-hidden shadow-lg group" style={{height: '200px'}}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-bold text-center">{service.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a 
                href="https://amrenovators.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 text-white text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #d4af37 0%, #b98f2b 100%)',
                  boxShadow: '0 15px 35px rgba(212, 175, 55, 0.4)',
                  textDecoration: 'none'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Visit AM Renovators Website
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <p className="text-sm mt-6" style={{color: '#b08a2f', fontWeight: '600'}}>
                You'll be redirected to our dedicated construction services portal
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4" style={{color: '#071020'}}>
              Need Immediate Assistance?
            </h3>
            <p className="text-lg mb-6" style={{color: '#5a4a1a'}}>
              Our team is ready to help with your construction and renovation needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowEmailForm(true)}
                className="px-8 py-4 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{
                  background: 'white',
                  border: '2px solid #d4af37',
                  color: '#b08a2f'
                }}>
                Request Information
              </button>
              <a 
                href="https://wa.me/919989103388" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #d4af37 0%, #b98f2b 100%)',
                  color: 'white',
                  textDecoration: 'none'
                }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contact on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>

      <Footer/>
    </main>
  )
}