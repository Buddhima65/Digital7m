import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Services.css'
import companyLogo from '../assets/images/logo-01.png'

const services = [
  {
    id: 1,
    icon: 'search',
    title: 'SEO Optimization',
    description: 'Search Engine Optimization to ensure your brand ranks at the top when your target audience searches for your services.',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building', 'Performance Tracking'],
    color: '#4edea3'
  },
  {
    id: 2,
    icon: 'ads_click',
    title: 'Search Engine Marketing',
    description: 'Pay-Per-Click (PPC) advertising and search engine marketing to get instant, highly targeted traffic to your website.',
    features: ['Google Ads Setup', 'PPC Campaigns', 'A/B Testing', 'Conversion Tracking', 'ROI Optimization'],
    color: '#00b4ff'
  },
  {
    id: 3,
    icon: 'hub',
    title: 'Social Media Marketing',
    description: 'Comprehensive social media strategies tailored for Facebook, Instagram, LinkedIn, TikTok, and YouTube.',
    features: ['Content Strategy', 'Community Management', 'Paid Social Ads', 'Profile Optimization', 'Analytics & Insights'],
    color: '#ff6b9d'
  },
  {
    id: 4,
    icon: 'movie',
    title: 'YouTube Content Marketing',
    description: 'Engaging video content creation and channel management to build a loyal audience on YouTube.',
    features: ['Channel Strategy', 'Video Scripting', 'SEO for Videos', 'Audience Engagement', 'Thumbnail Design'],
    color: '#ffb347'
  },
  {
    id: 5,
    icon: 'campaign',
    title: 'Influencer Marketing',
    description: 'Connect your brand with top-tier influencers to reach highly engaged audiences and build brand trust.',
    features: ['Influencer Vetting', 'Campaign Management', 'Product Seeding', 'Performance Tracking', 'Contract Negotiation'],
    color: '#a855f7'
  },
  {
    id: 6,
    icon: 'mail',
    title: 'Email Marketing',
    description: 'Direct and personalized email campaigns to nurture leads, retain customers, and drive sales.',
    features: ['List Building', 'Email Automation', 'Newsletter Design', 'A/B Testing', 'Deliverability Optimization'],
    color: '#f472b6'
  },
  {
    id: 7,
    icon: 'trending_up',
    title: 'Viral Marketing',
    description: 'Creative, highly shareable campaigns designed to spread rapidly across social channels.',
    features: ['Meme Marketing', 'Trend Hijacking', 'User-Generated Content', 'Viral Loop Creation', 'Community Building'],
    color: '#60a5fa'
  },
  {
    id: 8,
    icon: 'devices',
    title: 'Mobile Advertising',
    description: 'Targeted mobile phone advertising to reach users right where they spend most of their time.',
    features: ['In-App Ads', 'SMS Marketing', 'Mobile Web Ads', 'Geo-Targeting', 'Retargeting'],
    color: '#f59e0b'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Research',
    description: 'We dive deep into your business, market, and audience to identify opportunities and define clear objectives.'
  },
  {
    number: '02',
    title: 'Strategy Development',
    description: 'We craft a comprehensive strategy tailored to your goals, combining creative vision with data-driven insights.'
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'Our team brings the strategy to life through exceptional design and robust development.'
  },
  {
    number: '04',
    title: 'Launch & Optimization',
    description: 'We launch with precision and continuously optimize based on performance data and user feedback.'
  }
]

const benefits = [
  {
    icon: 'groups',
    title: 'Expert Team',
    description: 'Work with industry professionals who are passionate about delivering excellence.'
  },
  {
    icon: 'psychology',
    title: 'Creative Excellence',
    description: 'We push creative boundaries while ensuring every decision serves your business goals.'
  },
  {
    icon: 'speed',
    title: 'Fast Delivery',
    description: 'Agile methodologies ensure we deliver high-quality results within your timeline.'
  },
  {
    icon: 'monitoring',
    title: 'Data-Driven',
    description: 'Every decision is backed by data and analytics to ensure optimal performance.'
  }
]

function Services() {
  const location = useLocation()

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

  return (
    <div className="services-page">
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
  
  <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>CONTACT</Link>  {/* ← CHANGE TO THIS */}
</div>

         
        </div>
      </nav>

      <section className="services-hero" data-reveal>
        <div className="services-hero-inner">
          <p className="services-kicker">
            <span className="eyebrow-dot" />
            Our Services
          </p>
          <h1>
            Transform Your <span>Digital Presence</span>
          </h1>
          <p>
            We deliver comprehensive digital solutions that drive growth, 
            enhance brand visibility, and create meaningful connections with your audience.
          </p>
          <div className="services-hero-actions">
            <a href="#all-services" className="primary-action">Explore All Services</a>
            
          </div>
        </div>
      </section>

      <section className="services-grid-section" id="all-services">
        <div className="section-header section-header-center" data-reveal>
          <div className="section-title-row section-title-row-center">
            <div className="section-line" />
            <h2>What We Offer</h2>
            <div className="section-line" />
          </div>
          <p>Comprehensive Digital Solutions For Your Business</p>
        </div>

        <div className="services-grid-container">
          {services.map((service) => (
            <article 
              className="service-card-item bento-card" 
              data-reveal 
              key={service.id}
              style={{ 
                '--service-color': service.color,
                '--service-color-rgb': service.color
              }}
            >
              <div 
                className="service-card-icon" 
                style={{ 
                  background: `${service.color}20`,
                  borderColor: `${service.color}40`
                }}
              >
                <span 
                  className="material-symbols-outlined" 
                  style={{ 
                    color: service.color,
                    fontSize: '32px'
                  }}
                >
                  {service.icon}
                </span>
              </div>
              <h3 style={{ color: service.color }}>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <span className="feature-check" style={{ color: service.color }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className="service-learn-more" 
                type="button"
                style={{ color: service.color }}
              >
                Learn More →
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="services-process">
        <div className="section-header section-header-center" data-reveal>
          <div className="section-title-row section-title-row-center">
            <div className="section-line" />
            <h2>Our Process</h2>
            <div className="section-line" />
          </div>
          <p>How We Bring Your Vision To Life</p>
        </div>

        <div className="process-steps">
          {processSteps.map((step) => (
            <div className="process-step" data-reveal key={step.number}>
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
              {step.number !== '04' && (
                <div className="step-connector">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="services-benefits">
        <div className="section-header section-header-center" data-reveal>
          <div className="section-title-row section-title-row-center">
            <div className="section-line" />
            <h2>Why Choose Us</h2>
            <div className="section-line" />
          </div>
          <p>What Sets Digital 7M Apart</p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div className="benefit-card bento-card" data-reveal key={benefit.title}>
              <span className="material-symbols-outlined benefit-icon">
                {benefit.icon}
              </span>
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </div>
          ))}
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

export default Services