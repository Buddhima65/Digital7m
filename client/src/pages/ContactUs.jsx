import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './ContactUs.css'
import companyLogo from '../assets/images/70876953_108760627238592_8569903641920536576_n-removebg-preview.png'

function ContactUs() {
  const location = useLocation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')
    setSubmitStatus(null)

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
        setTimeout(() => setSubmitStatus(null), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['Dalupitiya Rd, Kadawatha 11850, Sri Lanka']
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+94 77 473 4086', '+94 11 2 902 765']
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: ['7msales@digital7m.com', 'Mihindumf@gmail.com']
    },
    {
      icon: '🕐',
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 5:00 PM',]
    }
  ]

  return (
    <div className="contact-page">
      <nav className="glass-header nav-bar">
        <div className="nav-inner">
          <div className="brand-block">
            <img
              alt="Digital 7M Logo"
              className="logo-circle"
              src="/src/assets/images/70876953_108760627238592_8569903641920536576_n-removebg-preview.png"
            />
            <span className="brand-name">Digital 7M</span>
          </div>

          <div className="desktop-links">
            <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>HOME</Link>
            <Link to="/about-us" className={location.pathname === '/about-us' ? 'active-link' : ''}>ABOUT US</Link>
            <Link to="/services" className={location.pathname === '/services' ? 'active-link' : ''}>SERVICE</Link>
            
            <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>CONTACT</Link>
          </div>

          
        </div>
      </nav>

      <section className="contact-hero" data-reveal>
        <div className="contact-hero-inner">
          <p className="contact-kicker">
            <span className="eyebrow-dot" />
            Get In Touch
          </p>
          <h1>
            Let's <span>Connect</span> & Create
          </h1>
          <p>
            Have a project in mind? We'd love to hear about it. Reach out to us 
            and let's start a conversation about how we can help your brand grow.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-grid">
          {/* Contact Info Cards */}
          <div className="contact-info" data-reveal>
            <div className="contact-info-header">
              <h2>Contact Information</h2>
              <p>We'd love to hear from you. Here's how you can reach us.</p>
            </div>

            <div className="info-cards">
              {contactInfo.map((item) => (
                <div className="info-card bento-card" key={item.title}>
                  <div className="info-icon">
                    <span className="contact-icon-emoji">{item.icon}</span>
                  </div>
                  <div className="info-content">
                    <h4>{item.title}</h4>
                    {item.details.map((detail, index) => (
                      <p key={index}>{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="contact-social">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" aria-label="Facebook" className="social-icon facebook">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="social-icon twitter">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="social-icon instagram">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" aria-label="YouTube" className="social-icon youtube">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="social-icon linkedin">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper" data-reveal>
            <div className="contact-form-card bento-card">
              <h3>Send Us A Message</h3>
              <p>Fill in the form below and we'll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+94 77 123 4567"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows="5"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="spinner">Sending...</span>
                  ) : (
                    'Send Message →'
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    <span className="material-symbols-outlined">check_circle</span>
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="error-message">
                    <span className="material-symbols-outlined">error</span>
                    {errorMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map" data-reveal>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.144800788198!2d79.93641497477094!3d6.9922207930088405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f9e5627fc7b1%3A0x64b871d3178b54a3!2sDigital%20Seven%20M!5e0!3m2!1sen!2sus!4v1784473315960!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Digital 7M Location - Kadawatha, Sri Lanka"
          />
        </div>
      </section>

      <button
        className="to-top"
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <span className="material-symbols-outlined">arrow_upward</span>
      </button>
    </div>
  )
}

export default ContactUs