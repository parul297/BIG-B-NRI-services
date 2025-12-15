import React from "react";
import { Link } from 'react-router-dom';
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import EmailForm from '../Components/Home/EmailForm';

export default function ContactUs() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   service: '',
  //   message: ''
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission
  //   console.log('Form submitted:', formData);
  // };

  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: "Call Us",
      details: [
        { label: "General Inquiries", value: "+91 9989103388" },
        { label: "Emergency Support", value: "+91 9989103388" }
      ],
      action: "Call Now"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: "Email Us",
      details: [
        { label: "General", value: "connect@bigbnriservices.com " },
        { label: "Support", value: "connect@bigbnriservices.com " }
      ],
      action: "Send Email"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: "Visit Us",
      details: [
        { label: "Head Office", value: "Flat No. 107, 4-1-355 Multi Naik Plaza, Abids" },
        { label: "Location", value: "Hyderabad – 500001 Telangana, India" }
      ],
      action: "Get Directions"
    }
  ];

  const services = [
    "Property Management",
    "Legal Assistance",
    "Financial Consulting",
    "Banking Solutions",
    "Medical Services",
    "Online Services"
  ];

  const faqs = [
    {
      question: "What are your working hours?",
      answer: "We operate 24/7 for emergency support. Regular business hours are 9 AM to 6 PM IST, Monday to Saturday."
    },
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We respond to all inquiries within 2-4 business hours during regular hours and within 12 hours for after-hours inquiries."
    },
    {
      question: "Do you offer services outside India?",
      answer: "Yes, we serve NRIs in over 30 countries worldwide with dedicated regional support teams."
    }
  ];

  return (
    <main className="min-h-screen" style={{background: 'linear-gradient(135deg, rgba(247, 230, 181, 0.1) 0%, rgba(255, 255, 255, 0.95) 100%)'}}>
         <Header/>
      {/* Hero Section */}
     
      <div className="relative overflow-hidden text-white"
           style={{background: 'linear-gradient(135deg, #0b2740 0%, #123a57 100%)'}}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)'
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            {/* <div className="mb-6">
              <Link to="/" className="inline-flex items-center gap-2 hover:text-[#fff7e6] transition-colors duration-300"
                    style={{color: '#e6c56a'}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Back to home
              </Link>
            </div> */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
              Get in Touch
              <div className="w-24 h-0.5 mt-6 mx-auto rounded-full"
                   style={{background: 'linear-gradient(90deg, #d4af37 0%, #ffd86b 100%)'}}></div>
            </h1>
            <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{color: '#bfa46f'}}>
              Let's start a conversation about how we can help you manage your 
              assets and legal matters with complete peace of mind.
            </p>
          </div>
        </div>
        
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-32 translate-x-32"
             style={{background: 'linear-gradient(225deg, rgba(212, 175, 55, 0.05) 0%, transparent 100%)'}}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full translate-y-48 -translate-x-48"
             style={{background: 'linear-gradient(45deg, rgba(212, 175, 55, 0.05) 0%, transparent 100%)'}}></div>
      </div>

      {/* Contact Information Cards */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-500"
                 style={{
                   background: 'white',
                   border: '1px solid rgba(212, 175, 55, 0.2)',
                   boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)'
                 }}>
              <div className="h-2" style={{background: 'linear-gradient(90deg, #d4af37 0%, #b98f2b 100%)'}}></div>
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500"
                     style={{background: 'linear-gradient(135deg, #d4af37 0%, #b98f2b 100%)'}}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-4" style={{color: '#071020'}}>{info.title}</h3>
                <div className="space-y-3 mb-6">
                  {info.details.map((detail, idx) => (
                    <div key={idx} style={{color: '#5a4a1a'}}>
                      <div className="text-sm mb-1" style={{color: '#bfa46f'}}>{detail.label}</div>
                      <div className="font-medium">{detail.value}</div>
                    </div>
                  ))}
                </div>
                <button className="w-full py-3 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300"
                        style={{background: 'linear-gradient(90deg, #d4af37 0%, #b98f2b 100%)'}}>
                  {info.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2"><EmailForm /></div>
          {/* <div className="lg:col-span-2">
            <div className="rounded-3xl p-8 md:p-12"
                 style={{
                   background: 'white',
                   border: '1px solid rgba(212, 175, 55, 0.2)',
                   boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)'
                 }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                     style={{background: 'linear-gradient(135deg, #d4af37 0%, #b98f2b 100%)'}}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold" style={{color: '#071020'}}>Send us a Message</h2>
                  <p style={{color: '#5a4a1a'}}>We'll respond within 2-4 business hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{color: '#071020'}}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300"
                      style={{
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        background: 'rgba(255, 255, 255, 0.95)'
                      }}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{color: '#071020'}}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300"
                      style={{
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        background: 'rgba(255, 255, 255, 0.95)'
                      }}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{color: '#071020'}}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300"
                      style={{
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        background: 'rgba(255, 255, 255, 0.95)'
                      }}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{color: '#071020'}}>
                      Service Interested In *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300"
                      style={{
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        background: 'rgba(255, 255, 255, 0.95)'
                      }}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{color: '#071020'}}>
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border rounded-lg outline-none transition-all duration-300"
                    style={{
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      background: 'rgba(255, 255, 255, 0.95)'
                    }}
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="w-4 h-4 border-gray-300 rounded"
                    style={{color: '#d4af37'}}
                  />
                  <label htmlFor="consent" className="ml-2 text-sm" style={{color: '#5a4a1a'}}>
                    I agree to receive communications from BIG B NRI Services regarding my inquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-white font-semibold rounded-lg transition-all duration-500 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(90deg, #d4af37 0%, #b98f2b 100%)',
                    boxShadow: '0 10px 25px rgba(212, 175, 55, 0.3)'
                  }}
                >
                  Send Message
                  <svg className="inline-block ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </button>
              </form>
            </div>
          </div> */}

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Office Hours */}
            <div className="rounded-2xl p-8"
                 style={{
                   background: 'white',
                   border: '1px solid rgba(212, 175, 55, 0.2)',
                   boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)'
                 }}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3" style={{color: '#071020'}}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                     style={{background: 'linear-gradient(135deg, #071020 0%, #123a57 100%)'}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                Office Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3" style={{borderBottom: '1px solid rgba(212, 175, 55, 0.1)'}}>
                  <span style={{color: '#5a4a1a'}}>Monday - Friday</span>
                  <span className="font-semibold" style={{color: '#071020'}}>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3" style={{borderBottom: '1px solid rgba(212, 175, 55, 0.1)'}}>
                  <span style={{color: '#5a4a1a'}}>Saturday</span>
                  <span className="font-semibold" style={{color: '#071020'}}>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span style={{color: '#5a4a1a'}}>Sunday</span>
                  <span className="font-semibold" style={{color: '#d4af37'}}>Emergency Only</span>
                </div>
              </div>
              <div className="mt-6 p-4 rounded-lg border"
                   style={{
                     background: 'linear-gradient(135deg, rgba(247, 230, 181, 0.5) 0%, rgba(246, 223, 154, 0.3) 100%)',
                     border: '1px solid rgba(212, 175, 55, 0.3)'
                   }}>
                <p className="text-sm" style={{color: '#071020'}}>
                  <span className="font-semibold">Note:</span> Emergency support available 24/7 via phone.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="rounded-2xl p-8"
                 style={{
                   background: 'white',
                   border: '1px solid rgba(212, 175, 55, 0.2)',
                   boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)'
                 }}>
              <h3 className="text-xl font-bold mb-6" style={{color: '#071020'}}>Quick Answers</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="pb-4 last:border-0 last:pb-0"
                       style={{borderBottom: '1px solid rgba(212, 175, 55, 0.1)'}}>
                    <h4 className="font-semibold mb-2" style={{color: '#071020'}}>{faq.question}</h4>
                    <p className="text-sm" style={{color: '#5a4a1a'}}>{faq.answer}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 font-medium rounded-lg transition-colors duration-300"
                      style={{
                        border: '1px solid #d4af37',
                        color: '#d4af37',
                        background: 'transparent'
                      }}>
                View All FAQs
              </button>
            </div>

            {/* Social Media */}
            {/* <div className="rounded-2xl p-8 text-white"
                 style={{background: 'linear-gradient(135deg, #071020 0%, #123a57 100%)'}}>
              <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
              <p className="mb-6" style={{color: '#bfa46f'}}>Follow us for updates and insights</p>
              <div className="flex gap-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                    style={{background: 'rgba(255, 255, 255, 0.1)'}}
                  >
                    {platform.charAt(0).toUpperCase()}
                  </a>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="rounded-3xl overflow-hidden"
             style={{
               background: 'white',
               border: '1px solid rgba(212, 175, 55, 0.2)',
               boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)'
             }}>
          <div className="h-64 md:h-96 relative"
               style={{background: 'linear-gradient(135deg, #071020 0%, #123a57 100%)'}}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                     style={{background: 'rgba(255, 255, 255, 0.2)'}}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Our Location</h3>
                <p style={{color: '#bfa46f'}}>Interactive map placeholder</p>
                <p className="text-sm mt-2" style={{color: '#bfa46f'}}>Replace with Google Maps integration</p>
              </div>
            </div>
          </div>
          <div className="p-8" style={{borderTop: '1px solid rgba(212, 175, 55, 0.1)'}}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-sm mb-1" style={{color: '#bfa46f'}}>Office Address</div>
                <div className="font-semibold" style={{color: '#071020'}}>Flat No. 107, 4-1-355 Multi Naik Plaza, Abids</div>
                <div style={{color: '#5a4a1a'}}>Hyderabad – 500001 Telangana, India</div>
              </div>
              <div className="text-center">
                <div className="text-sm mb-1" style={{color: '#bfa46f'}}>Parking Available</div>
                <div className="font-semibold" style={{color: '#071020'}}>Underground Parking</div>
                <div style={{color: '#5a4a1a'}}>Levels B1-B3</div>
              </div>
              <div className="text-center">
                <div className="text-sm mb-1" style={{color: '#bfa46f'}}>Nearest Transport</div>
                <div className="font-semibold" style={{color: '#071020'}}>5 min walk</div>
                <div style={{color: '#5a4a1a'}}>From Financial City Metro Station</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}