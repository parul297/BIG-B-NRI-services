import React from "react";
import { Link } from 'react-router-dom';
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";

export default function AboutUs() {

  const teamMembers = [
    {
      name: "Rajesh Sharma",
      position: "Founder & CEO",
      experience: "25+ Years",
      expertise: "Property & Legal Services",
      image: "team-member-1"
    },
    {
      name: "Priya Patel",
      position: "Legal Director",
      experience: "18+ Years",
      expertise: "NRI Legal Matters",
      image: "team-member-2"
    },
    {
      name: "Arjun Mehta",
      position: "Financial Advisor",
      experience: "20+ Years",
      expertise: "Investment & Banking",
      image: "team-member-3"
    },
    {
      name: "Sunita Reddy",
      position: "Operations Head",
      experience: "15+ Years",
      expertise: "Service Management",
      image: "team-member-4"
    }
  ];

  const milestones = [
    { year: "2008", title: "Company Founded", description: "Started with focus on NRI property management", icon: "🚀" },
    { year: "2012", title: "Service Expansion", description: "Added legal and financial consultation services", icon: "📈" },
    { year: "2015", title: "Global Recognition", description: "Started serving clients in 25+ countries", icon: "🌎" },
    { year: "2020", title: "Digital Platform", description: "Launched comprehensive online services platform", icon: "💻" },
    { year: "2023", title: "Industry Awards", description: "Received Excellence in NRI Services Award", icon: "🏆" }
  ];

  const values = [
    {
      title: "Integrity First",
      description: "We maintain the highest ethical standards in all our dealings",
      icon: "🛡️"
    },
    {
      title: "Client-Centric",
      description: "Your success is our ultimate measure of achievement",
      icon: "❤️"
    },
    {
      title: "Excellence Always",
      description: "Committed to delivering exceptional quality in every service",
      icon: "⭐"
    },
    {
      title: "Innovation Driven",
      description: "Continuously evolving to meet changing NRI needs",
      icon: "💡"
    }
  ];

  return (
    <main className="min-h-screen" style={{background: 'linear-gradient(135deg, rgba(247, 230, 181, 0.1) 0%, rgba(255, 255, 255, 0.95) 100%)'}}>
      {/* Hero Section - Modern Split Design */}
      <Header/>
      <div className="relative overflow-hidden" style={{background: 'linear-gradient(135deg, #071020 0%, #123a57 100%)'}}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 right-10 w-72 h-72" style={{background: 'rgba(212, 175, 55, 0.2)', borderRadius: '50%', filter: 'blur(3rem)'}}></div>
        <div className="absolute bottom-20 left-10 w-96 h-96" style={{background: 'rgba(191, 164, 111, 0.1)', borderRadius: '50%', filter: 'blur(3rem)'}}></div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-white space-y-8">
              {/* <div>
                <Link to="/" className="inline-flex items-center gap-2 text-[#e6c56a] hover:text-[#fff7e6] transition-colors duration-300 mb-8 group">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-1 transition-transform">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                  <span className="font-medium">Back to home</span>
                </Link>
              </div> */}
              
              <div>
                <div className="inline-block px-4 py-2" style={{background: 'rgba(212, 175, 55, 0.2)', backdropFilter: 'blur(8px)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '9999px', marginBottom: '1.5rem'}}>
                  <span className="text-[#e6c56a] text-sm font-semibold">Established 2008</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                  <span className="block text-white">Bridging</span>
                  <span className="block gold-gradient-text">Distances,</span>
                  <span className="block text-white">Building Trust</span>
                </h1>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-1 w-20" style={{background: 'linear-gradient(90deg, #d4af37 0%, #ffd86b 100%)', borderRadius: '9999px'}}></div>
                  <div className="h-1 w-12" style={{background: 'linear-gradient(90deg, #ffd86b 0%, #d4af37 100%)', borderRadius: '9999px'}}></div>
                  <div className="h-1 w-8" style={{background: '#d4af37', borderRadius: '9999px'}}></div>
                </div>
                
                <p className="text-xl" style={{color: '#bfa46f'}}>
                  For over <span className="text-[#d4af37] font-bold">15 years</span>, we've been the cornerstone of trust for NRIs across 
                  <span className="text-[#d4af37] font-bold"> 30+ countries</span>, delivering excellence in property management, 
                  legal services, and financial solutions.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="backdrop-blur-sm rounded-2xl px-6 py-4" style={{background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)'}}>
                  <div className="text-3xl font-bold text-[#d4af37]">5000+</div>
                  <div style={{color: '#bfa46f'}} className="text-sm">Satisfied Clients</div>
                </div>
                <div className="backdrop-blur-sm rounded-2xl px-6 py-4" style={{background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)'}}>
                  <div className="text-3xl font-bold text-[#d4af37]">98.5%</div>
                  <div style={{color: '#bfa46f'}} className="text-sm">Success Rate</div>
                </div>
                <div className="backdrop-blur-sm rounded-2xl px-6 py-4" style={{background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)'}}>
                  <div className="text-3xl font-bold text-[#d4af37]">24/7</div>
                  <div style={{color: '#bfa46f'}} className="text-sm">Support</div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Visual Element */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main Card */}
                <div className="backdrop-blur-xl rounded-3xl p-8 shadow-2xl border transform rotate-3 hover:rotate-0 transition-transform duration-500"
                     style={{
                       background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.9) 0%, rgba(185, 143, 43, 0.9) 100%)',
                       border: '1px solid rgba(212, 175, 55, 0.5)',
                       boxShadow: '0 25px 50px rgba(212, 175, 55, 0.25)'
                     }}>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16" style={{background: 'rgba(255, 255, 255, 0.2)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                          <polyline points="9 22 9 12 15 12 15 22"/>
                        </svg>
                      </div>
                      <div className="text-white">
                        <div className="text-2xl font-bold">Our Promise</div>
                        <div style={{color: '#fff7e6'}} className="text-sm">To Every NRI Family</div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 text-white">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6" style={{background: 'rgba(255, 255, 255, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.125rem'}}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        </div>
                        <p style={{color: '#fff7e6'}}>Complete transparency in every transaction</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6" style={{background: 'rgba(255, 255, 255, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.125rem'}}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        </div>
                        <p style={{color: '#fff7e6'}}>Dedicated support whenever you need us</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6" style={{background: 'rgba(255, 255, 255, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.125rem'}}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        </div>
                        <p style={{color: '#fff7e6'}}>Peace of mind for you and your family</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 rounded-2xl p-4 shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-500"
                     style={{
                       background: 'linear-gradient(135deg, #ffd86b 0%, #d4af37 100%)',
                       boxShadow: '0 25px 50px rgba(212, 175, 55, 0.4)'
                     }}>
                  <div className="text-center text-white">
                    <div className="text-3xl font-black">15+</div>
                    <div className="text-xs font-bold uppercase tracking-wider">Years</div>
                  </div>
                </div>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute inset-0 rounded-3xl transform scale-105" style={{background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, transparent 100%)', filter: 'blur(2rem)'}}></div>
            </div>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgba(255, 255, 255, 0.95)"/>
          </svg>
        </div>
      </div>

      {/* Our Story - Split Layout */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Founder's Message */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl p-8 md:p-12 shadow-xl border relative"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(247, 230, 181, 0.5) 100%)',
                   border: '1px solid rgba(212, 175, 55, 0.3)',
                   boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)'
                 }}>
              <div className="absolute -top-4 left-8 px-6 py-2 rounded-full text-sm font-bold"
                   style={{background: 'linear-gradient(90deg, #d4af37 0%, #b98f2b 100%)', color: 'white'}}>
                Founder's Vision
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{color: '#071020'}}>
                Building Bridges Between NRIs and India
              </h2>
              <div className="space-y-6 leading-relaxed text-lg" style={{color: '#071020'}}>
                <p>
                  Founded in 2008, <span className="font-semibold" style={{color: '#b08a2f'}}>BIG B NRI Services</span> began with a simple yet powerful mission: 
                  to help Non-Resident Indians manage their assets and legal matters back home with 
                  complete peace of mind.
                </p>
                <p>
                  What started as a small property management service has grown into a comprehensive 
                  solutions provider serving NRIs across <span className="font-semibold">30+ countries</span>.
                </p>
                <p>
                  Our founder, <span className="font-semibold" style={{color: '#b08a2f'}}>British Obama</span>, identified the unique challenges faced by NRIs while 
                  trying to manage Indian assets from abroad. The complex legal requirements, 
                  geographical barriers, and lack of transparent services created significant 
                  obstacles for the NRI community.
                </p>
                <blockquote className="border-l-4 pl-6 italic my-8" style={{borderColor: '#d4af37', color: '#5a4a1a'}}>
                  "Success for us is measured by the trust our clients place in us and the 
                  peace of mind we provide to NRIs living thousands of miles away from their homeland."
                </blockquote>
                <p>
                  Today, we combine <span className="font-semibold">traditional Indian values</span> with <span className="font-semibold">modern technology</span> to 
                  deliver seamless services that bridge the distance between you and your homeland. 
                  Our team understands both the emotional connection NRIs have with India and the 
                  practical challenges of managing assets remotely.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Mission & Vision */}
          <div className="space-y-8">
            {/* Mission Card */}
            <div className="rounded-3xl p-8 text-white shadow-xl"
                 style={{background: 'linear-gradient(135deg, #b98f2b 0%, #d4af37 100%)'}}>
              <div className="w-16 h-16" style={{background: 'rgba(255, 255, 255, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem'}}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p style={{color: '#fff7e6'}}>
                To empower NRIs with reliable, transparent, and comprehensive solutions for 
                managing their Indian assets and legal matters from anywhere in the world.
              </p>
            </div>

            {/* Vision Card */}
            <div className="rounded-3xl p-8 text-white shadow-xl"
                 style={{background: 'linear-gradient(135deg, #ffd86b 0%, #d4af37 100%)'}}>
              <div className="w-16 h-16" style={{background: 'rgba(255, 255, 255, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem'}}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p style={{color: '#fff7e6'}}>
                To be the most trusted and preferred partner for NRIs worldwide, setting 
                new standards in service excellence and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#071020'}}>
            Our Guiding Principles
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{color: '#5a4a1a'}}>
            The core values that shape our culture and define our approach to serving you
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                   style={{background: 'linear-gradient(135deg, #d4af37 0%, #ffd86b 100%)'}}></div>
              <div className="relative rounded-3xl p-8 shadow-2xl border group-hover:shadow-3xl transition-all duration-500"
                   style={{
                     background: 'white',
                     border: '1px solid rgba(212, 175, 55, 0.3)',
                     boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)'
                   }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform duration-500"
                     style={{background: 'linear-gradient(135deg, #d4af37 0%, #ffd86b 100%)'}}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center" style={{color: '#071020'}}>{value.title}</h3>
                <p className="text-center" style={{color: '#5a4a1a'}}>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

  {/* Our Journey - Timeline */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#071020'}}>
            Our Journey
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{color: '#5a4a1a'}}>
            Milestones that mark our growth and commitment to the NRI community
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop - Horizontal arrows between milestones */}
          <div className="hidden lg:flex items-center justify-between">
            {milestones.map((milestone, index) => (
              <React.Fragment key={index}>
                <div className="relative flex-1">
                  <div className={`${index % 2 === 0 ? 'pt-12' : 'pb-12'}`}>
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full border-4 border-white shadow-xl z-10 mb-4"
                           style={{background: 'linear-gradient(135deg, #d4af37 0%, #b98f2b 100%)'}}></div>
                      
                      <div className="rounded-2xl p-6 shadow-xl border hover:shadow-2xl transition-all duration-500 group w-full"
                           style={{
                             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(247, 230, 181, 0.5) 100%)',
                             border: '1px solid rgba(212, 175, 55, 0.3)',
                             boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)'
                           }}>
                        <div className="text-4xl mb-4">{milestone.icon}</div>
                        <div className="inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 text-white"
                             style={{background: 'linear-gradient(90deg, #d4af37 0%, #b98f2b 100%)'}}>
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold mb-2" style={{color: '#071020'}}>{milestone.title}</h3>
                        <p className="text-sm" style={{color: '#5a4a1a'}}>{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow between milestones */}
                {index < milestones.length - 1 && (
                  <div className="flex items-center justify-center mx-2" style={{width: '60px'}}>
                    <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                      <path d="M0 12H58M58 12L48 2M58 12L48 22" 
                            stroke="url(#gradient)" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="60" y2="0">
                          <stop offset="0%" stopColor="#d4af37"/>
                          <stop offset="100%" stopColor="#b98f2b"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile - Vertical arrows between milestones */}
          <div className="lg:hidden space-y-4">
            {milestones.map((milestone, index) => (
              <React.Fragment key={index}>
                <div className="relative flex items-start">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-6 h-6 rounded-full border-4 border-white shadow-xl z-10"
                         style={{background: 'linear-gradient(135deg, #d4af37 0%, #b98f2b 100%)'}}></div>
                  </div>
                  
                  <div className="flex-1 rounded-2xl p-6 shadow-xl border hover:shadow-2xl transition-all duration-500"
                       style={{
                         background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(247, 230, 181, 0.5) 100%)',
                         border: '1px solid rgba(212, 175, 55, 0.3)',
                         boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)'
                       }}>
                    <div className="text-4xl mb-4">{milestone.icon}</div>
                    <div className="inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 text-white"
                         style={{background: 'linear-gradient(90deg, #d4af37 0%, #b98f2b 100%)'}}>
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{color: '#071020'}}>{milestone.title}</h3>
                    <p className="text-sm" style={{color: '#5a4a1a'}}>{milestone.description}</p>
                  </div>
                </div>
                
                {/* Vertical arrow between milestones on mobile */}
                {index < milestones.length - 1 && (
                  <div className="flex justify-start ml-3">
                    <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
                      <path d="M12 0V38M12 38L2 28M12 38L22 28" 
                            stroke="url(#gradient-v)" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-v" x1="0" y1="0" x2="0" y2="40">
                          <stop offset="0%" stopColor="#d4af37"/>
                          <stop offset="100%" stopColor="#b98f2b"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      {/* Our Team */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#071020'}}>
            Leadership Team
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{color: '#5a4a1a'}}>
            Experienced professionals dedicated to serving the NRI community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <div className="aspect-square flex items-center justify-center"
                     style={{background: 'linear-gradient(135deg, #b98f2b 0%, #d4af37 50%, #b08a2f 100%)'}}>
                  <div className="text-center text-white">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4"
                         style={{background: 'rgba(255, 255, 255, 0.2)'}}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <circle cx="12" cy="8" r="5"/>
                        <path d="M3 21c0-4.97 4.03-9 9-9s9 4.03 9 9"/>
                      </svg>
                    </div>
                    <p style={{color: '#fff7e6', fontSize: '0.875rem'}}>Add Team Photo</p>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, transparent 100%)'}}></div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1" style={{color: '#071020'}}>{member.name}</h3>
                <p className="font-semibold mb-3" style={{color: '#b08a2f'}}>{member.position}</p>
                <div className="flex justify-center gap-4 text-sm">
                  <span className="px-3 py-1 rounded-full" style={{background: 'rgba(212, 175, 55, 0.1)', color: '#5a4a1a'}}>{member.experience}</span>
                  <span className="px-3 py-1 rounded-full" style={{background: 'rgba(212, 175, 55, 0.1)', color: '#5a4a1a'}}>{member.expertise}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="container mx-auto px-4 pb-20">
        <div className="rounded-3xl p-12 text-center relative overflow-hidden"
             style={{
               background: 'linear-gradient(90deg, #d4af37 0%, #b98f2b 50%, #d4af37 100%)',
               boxShadow: '0 40px 110px rgba(212, 175, 55, 0.25)'
             }}>
          <div className="absolute inset-0" style={{background: 'rgba(0, 0, 0, 0.1)'}}></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Join Our Growing Family of Satisfied NRIs
            </h2>
            <p className="text-xl mb-10" style={{color: '#fff7e6'}}>
              Experience the peace of mind that comes with having a trusted partner 
              managing your Indian assets and legal matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-5 font-bold rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-105"
                      style={{
                        background: 'white',
                        color: '#b08a2f',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
                      }}>
                Start Your Journey With Us
              </button>
              <button className="px-10 py-5 font-bold rounded-2xl transition-all duration-500 transform hover:scale-105"
                      style={{
                        background: 'transparent',
                        border: '2px solid white',
                        color: 'white'
                      }}>
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>

      <style>{`
        .gold-gradient-text {
          background: linear-gradient(135deg, #d4af37 0%, #ffd86b 25%, #f4d03f 50%, #ffd86b 75%, #d4af37 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: gradient-shift 3s ease-in-out infinite;
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </main>
  );
}