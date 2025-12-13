import { useState, useEffect } from 'react';

export default function ContactForm({ 
  isOpen = true, 
  onClose = null,
  showAsModal = false
}) {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const WHATSAPP_NUMBER = '919949987650';

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showAsModal && isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [showAsModal, isOpen]);

  const services = [
    'Property Management',
    'Civil Works and Construction Services',
    'Vital Records Assistance',
    'Complete Document Attestation',
    'Taxes and Legal',
    'Business Consulting /Registrations',
    'Banking Assistance',
    'Health/Medical',
    'Online Services'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendWhatsAppNotification = () => {
    // Debug: Log form data to console
    console.log('Sending WhatsApp with data:', formData);
    
    // Create the message with actual form data
    const message = `🔔 *New Inquiry - BigB NRI Services*

👤 *Name:* ${formData.from_name}
📧 *Email:* ${formData.from_email}
📱 *Phone:* ${formData.phone}
🔧 *Service:* ${formData.service}

💬 *Message:*
${formData.message}

---
_Sent from BigB NRI Services Contact Form_`;

    console.log('WhatsApp message:', message);
    
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    console.log('WhatsApp URL:', whatsappURL);
    
    window.open(whatsappURL, '_blank');
  };

  const handleSubmit = async () => {
    if (!formData.from_name || !formData.from_email || !formData.phone || !formData.service || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all fields');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const emailjs = await import('@emailjs/browser');
      
      await emailjs.default.send(
        'service_wab39me',
        'template_5z64e15',
        formData,
        'popsfBfUb4jI5LWLv'
      );

      // Send WhatsApp notification with form data
      sendWhatsAppNotification();

      setStatus('success');
      
      setTimeout(() => {
        setFormData({
          from_name: '',
          from_email: '',
          phone: '',
          service: '',
          message: ''
        });
        setStatus('');
        if (onClose) onClose();
      }, 3000);

    } catch (error) {
      console.error('Failed to send:', error);
      setStatus('error');
      setErrorMessage(error.text || 'Failed to send message. Please try again.');
    }
  };

  if (!isOpen) return null;

  const FormContent = () => (
    <div className="modal-content" style={{
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      padding: showAsModal ? '40px' : '50px',
      border: '2px solid rgba(218, 165, 32, 0.15)',
      boxShadow: '0 20px 60px rgba(139, 111, 71, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)',
      maxHeight: showAsModal ? '85vh' : 'none',
      overflowY: showAsModal ? 'auto' : 'visible',
      overflowX: 'hidden'
    }}>
      {showAsModal && (
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #d4af37 0%, #b98f2b 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px'
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#071020',
            marginBottom: '10px'
          }}>
            Get In Touch
          </h3>
          <p style={{ color: '#8b7355', fontSize: '16px' }}>
            Tell us about your requirements and we'll get back to you within 24 hours
          </p>
        </div>
      )}

      {/* Name Field */}
      <div style={{ marginBottom: '25px' }}>
        <label style={{
          display: 'block',
          color: '#8b6f47',
          marginBottom: '12px',
          fontWeight: '600',
          fontSize: '15px',
          letterSpacing: '0.3px'
        }}>
          Full Name *
        </label>
        <input
          type="text"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          placeholder="Enter your full name"
          style={{
            width: '100%',
            padding: '16px 20px',
            borderRadius: '12px',
            border: '2px solid rgba(139, 111, 71, 0.2)',
            background: '#ffffff',
            color: '#333',
            fontSize: '16px',
            outline: 'none',
            transition: 'border-color 0.3s',
            boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.08)',
            boxSizing: 'border-box'
          }}
          onFocus={(e) => e.target.style.borderColor = 'rgba(184, 134, 11, 0.5)'}
          onBlur={(e) => e.target.style.borderColor = 'rgba(139, 111, 71, 0.2)'}
        />
      </div>

      {/* Email Field */}
      <div style={{ marginBottom: '25px' }}>
        <label style={{
          display: 'block',
          color: '#8b6f47',
          marginBottom: '12px',
          fontWeight: '600',
          fontSize: '15px',
          letterSpacing: '0.3px'
        }}>
          Email Address *
        </label>
        <input
          type="email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          style={{
            width: '100%',
            padding: '16px 20px',
            borderRadius: '12px',
            border: '2px solid rgba(139, 111, 71, 0.2)',
            background: '#ffffff',
            color: '#333',
            fontSize: '16px',
            outline: 'none',
            transition: 'border-color 0.3s',
            boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.08)',
            boxSizing: 'border-box'
          }}
          onFocus={(e) => e.target.style.borderColor = 'rgba(184, 134, 11, 0.5)'}
          onBlur={(e) => e.target.style.borderColor = 'rgba(139, 111, 71, 0.2)'}
        />
      </div>

      {/* Phone Field */}
      <div style={{ marginBottom: '25px' }}>
        <label style={{
          display: 'block',
          color: '#8b6f47',
          marginBottom: '12px',
          fontWeight: '600',
          fontSize: '15px',
          letterSpacing: '0.3px'
        }}>
          Phone Number *
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91 98765 43210"
          style={{
            width: '100%',
            padding: '16px 20px',
            borderRadius: '12px',
            border: '2px solid rgba(139, 111, 71, 0.2)',
            background: '#ffffff',
            color: '#333',
            fontSize: '16px',
            outline: 'none',
            transition: 'border-color 0.3s',
            boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.08)',
            boxSizing: 'border-box'
          }}
          onFocus={(e) => e.target.style.borderColor = 'rgba(184, 134, 11, 0.5)'}
          onBlur={(e) => e.target.style.borderColor = 'rgba(139, 111, 71, 0.2)'}
        />
      </div>

      {/* Service Field */}
      <div style={{ marginBottom: '25px' }}>
        <label style={{
          display: 'block',
          color: '#8b6f47',
          marginBottom: '12px',
          fontWeight: '600',
          fontSize: '15px',
          letterSpacing: '0.3px'
        }}>
          Service Interested In *
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '16px 20px',
            borderRadius: '12px',
            border: '2px solid rgba(139, 111, 71, 0.2)',
            background: '#ffffff',
            color: '#333',
            fontSize: '16px',
            outline: 'none',
            transition: 'border-color 0.3s',
            cursor: 'pointer',
            boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.08)',
            appearance: 'none',
            backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238b6f47' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 20px center',
            backgroundSize: '16px',
            boxSizing: 'border-box'
          }}
          onFocus={(e) => e.target.style.borderColor = 'rgba(184, 134, 11, 0.5)'}
          onBlur={(e) => e.target.style.borderColor = 'rgba(139, 111, 71, 0.2)'}
        >
          <option value="">Select a service</option>
          {services.map(service => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* Message Field */}
      <div style={{ marginBottom: '30px' }}>
        <label style={{
          display: 'block',
          color: '#8b6f47',
          marginBottom: '12px',
          fontWeight: '600',
          fontSize: '15px',
          letterSpacing: '0.3px'
        }}>
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          placeholder="Tell us about your requirements..."
          style={{
            width: '100%',
            padding: '16px 20px',
            borderRadius: '12px',
            border: '2px solid rgba(139, 111, 71, 0.2)',
            background: '#ffffff',
            color: '#333',
            fontSize: '16px',
            outline: 'none',
            transition: 'border-color 0.3s',
            resize: 'vertical',
            fontFamily: 'inherit',
            boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.08)',
            minHeight: '120px',
            boxSizing: 'border-box'
          }}
          onFocus={(e) => e.target.style.borderColor = 'rgba(184, 134, 11, 0.5)'}
          onBlur={(e) => e.target.style.borderColor = 'rgba(139, 111, 71, 0.2)'}
        />
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <div style={{
          padding: '16px 20px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)',
          border: '2px solid rgba(34, 197, 94, 0.3)',
          color: '#059669',
          marginBottom: '25px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: '#10b981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <span style={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}>✓</span>
          </div>
          <div>
            <p style={{ margin: 0, fontWeight: '600' }}>Message sent successfully!</p>
            <p style={{ margin: '4px 0 0 0', fontSize: '14px', opacity: 0.9 }}>
              Check WhatsApp to complete your inquiry.
            </p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div style={{
          padding: '16px 20px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)',
          border: '2px solid rgba(239, 68, 68, 0.3)',
          color: '#dc2626',
          marginBottom: '25px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: '#ef4444',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <span style={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}>✗</span>
          </div>
          <div>
            <p style={{ margin: 0, fontWeight: '600' }}>Error</p>
            <p style={{ margin: '4px 0 0 0', fontSize: '14px' }}>{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={status === 'sending'}
        style={{
          width: '100%',
          padding: '18px',
          borderRadius: '12px',
          border: 'none',
          background: status === 'sending' 
            ? 'rgba(184, 134, 11, 0.7)' 
            : 'linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #F4C542 100%)',
          color: '#ffffff',
          fontSize: '17px',
          fontWeight: '600',
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
          transition: 'all 0.3s',
          boxShadow: '0 4px 20px rgba(218, 165, 32, 0.3)',
          letterSpacing: '0.5px'
        }}
      >
        {status === 'sending' ? (
          <>
            <span>Sending...</span>
            <span style={{
              display: 'inline-block',
              marginLeft: '10px',
              animation: 'spin 1s linear infinite'
            }}>⏳</span>
          </>
        ) : 'Send Message'}
      </button>

      {/* Contact Info - Only show in full page mode */}
      {!showAsModal && (
        <div style={{
          marginTop: '35px',
          paddingTop: '35px',
          borderTop: '2px solid rgba(218, 165, 32, 0.15)',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#8b7355',
            fontSize: '15px',
            fontWeight: '600',
            marginBottom: '20px',
            letterSpacing: '0.3px'
          }}>
            Or reach us directly at
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap',
            marginBottom: '15px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.1) 0%, rgba(218, 165, 32, 0.05) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(184, 134, 11, 0.15)'
              }}>
                <span style={{ color: '#B8860B', fontSize: '18px' }}>✉️</span>
              </div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ margin: 0, fontSize: '13px', color: '#8b7355', fontWeight: '600' }}>Email</p>
                <p style={{ margin: '4px 0 0 0', fontSize: '15px', color: '#5d4c35', fontWeight: '500' }}>
                  connect@bigbnriservices.com 
                </p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.1) 0%, rgba(218, 165, 32, 0.05) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(184, 134, 11, 0.15)'
              }}>
                <span style={{ color: '#B8860B', fontSize: '18px' }}>📞</span>
              </div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ margin: 0, fontSize: '13px', color: '#8b7355', fontWeight: '600' }}>Phone</p>
                <p style={{ margin: '4px 0 0 0', fontSize: '15px', color: '#5d4c35', fontWeight: '500' }}>
                  +91 98765 43210
                </p>
              </div>
            </div>
          </div>
          
          <p style={{
            color: '#a08c6f',
            fontSize: '13px',
            marginTop: '25px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(218, 165, 32, 0.1)',
            fontStyle: 'italic'
          }}>
            We typically respond within 24 hours
          </p>
        </div>
      )}
    </div>
  );

  if (showAsModal) {
    return (
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          background: 'rgba(7, 16, 32, 0.85)',
          backdropFilter: 'blur(4px)',
          overflowY: 'auto'
        }}
        onClick={onClose}
      >
        <div 
          style={{
            position: 'relative',
            background: 'white',
            borderRadius: '24px',
            maxWidth: '600px',
            width: '100%',
            border: '2px solid rgba(212, 175, 55, 0.3)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
            margin: 'auto'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(212, 175, 55, 0.1)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              zIndex: 10
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b08a2f" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <FormContent />
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f1e8 0%, #fff9f0 50%, #f5f1e8 100%)',
      padding: '60px 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(218, 165, 32, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-150px',
        left: '-150px',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255, 215, 0, 0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '15px',
            letterSpacing: '1px'
          }}>
            Get In Touch
          </h1>
          <p style={{ color: '#8b7355', fontSize: '18px', opacity: 0.9 }}>
            Tell us about your requirements and we'll get back to you within 24 hours
          </p>
        </div>

        <FormContent />
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Prevent layout shifts */
        input, select, textarea {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
        
        /* Smooth scrolling for modal */
        .modal-content {
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </div>
  );
}