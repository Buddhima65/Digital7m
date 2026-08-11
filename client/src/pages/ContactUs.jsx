import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './ContactUs.css'
import companyLogo from '../assets/images/logo-01.png'

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

  // ====== UPDATED: Formspree Submission ======
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')
    setSubmitStatus(null)

    try {
      // 🔴 REPLACE WITH YOUR FORMSPREE FORM ID
      const response = await fetch('https://formspree.io/f/meajarkw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Contact Form: ${formData.subject}`,
          _replyto: formData.email,
        }),
      })

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
        const data = await response.json()
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
      details: ['Mon - Fri: 9:00 AM - 5:00 PM']
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
              src={companyLogo}
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

            <div className="contact-social">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/Digital7M" aria-label="Facebook" className="social-icon facebook">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

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

      <section className="contact-map" data-reveal>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.144800788198!2d79.93641497477094!3d6.9922207930088405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f9e5627fc7b1%3A0x64b871d3178b54a3!2sDigital%20Seven%20M!5e0!3m2!1sen!2sus!4v1784473315960!5m2!1sen!2sus"
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