import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './AboutUs.css'
import clientsBoardImage from '../assets/images/10-1-1536x1086.jpg'
import caseStudiesImage from '../assets/images/08-1-1536x1086.jpg'
import companyLogo from '../assets/images/70876953_108760627238592_8569903641920536576_n-removebg-preview.png'
// Import your video - change filename to match yours
import aboutVideo from '../assets/videos/d7m.mp4'

const stats = [
  { label: 'Years In Industry', value: '16+' },
  { label: 'Brands Supported', value: '120+' },
  { label: 'Campaigns Delivered', value: '450+' },
  { label: 'Client Retention', value: '92%' },
]

const values = [
  {
    title: 'Strategy First',
    text: 'Every project begins with audience insight, measurable goals, and a clear digital roadmap.',
  },
  {
    title: 'Creative That Performs',
    text: 'We combine design quality with conversion-focused thinking to deliver results, not just visuals.',
  },
  {
    title: 'Execution Discipline',
    text: 'From launch to optimization, we run reliable workflows that keep quality and deadlines on track.',
  },
]

const processSteps = [
  {
    title: 'Discover',
    text: 'We map your market, brand voice, and growth targets.',
  },
  {
    title: 'Design',
    text: 'We craft campaigns, content, and digital experiences aligned with your goals.',
  },
  {
    title: 'Deploy',
    text: 'We launch with precision across web, social, and paid channels.',
  },
  {
    title: 'Drive Results',
    text: 'We optimize continuously using data and performance signals.',
  },
]

function AboutUs() {
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
    <div className="about-page">
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
  <a href="/#blog">BLOG</a>
  <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>CONTACT</Link>  {/* ← CHANGE TO THIS */}
</div>

          <button className="start-button" type="button">
            Get Started
          </button>
        </div>
      </nav>

      <section className="about-hero" data-reveal>
        <div className="about-hero-inner">
          <p className="about-kicker">
            <span className="eyebrow-dot" />
            About Digital 7M
          </p>
          <h1>
            We Build <span>Digital Momentum</span>
            <br />
            For Ambitious Brands
          </h1>
          <p>
            Digital Seven M is a Sri Lanka based full-service digital agency helping brands grow with
            strategy, creativity, and measurable execution since 2010.
          </p>
        </div>
      </section>

      <section className="about-stats" aria-label="Company Stats">
        {stats.map((item) => (
          <article className="stat-card bento-card" data-reveal key={item.label}>
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className="about-story-section" aria-label="Our Story">
        <div className="about-story-grid">
          <div className="about-story-content" data-reveal>
            <div className="section-header">
              <div className="section-title-row">
                <div className="section-line" />
                <h2>Our Story</h2>
              </div>
              <p>From Creative Service To Strategic Growth Partner</p>
            </div>
            <div className="story-text">
              <p>
                We started with one simple belief: good design is not enough without clear business
                impact. Over the years, we have partnered with local and global brands to turn ideas into
                campaigns that connect, convert, and scale.
              </p>
              <p>
                Our team blends strategy, content, design, and digital performance under one roof so every
                touchpoint works together to move your brand forward.
              </p>
            </div>
          </div>
          
          <div className="about-story-visual" data-reveal>
            <video
              className="about-video"
              src={aboutVideo}
              autoPlay
              muted
              loop
              playsInline
              controls
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="about-values" aria-label="Core Values">
        <div className="section-header section-header-center" data-reveal>
          <div className="section-title-row section-title-row-center">
            <div className="section-line" />
            <h2>Core Values</h2>
            <div className="section-line" />
          </div>
          <p>What We Stand For — Every Project</p>
        </div>

        <div className="value-grid">
          {values.map((value) => (
            <article className="value-card bento-card" data-reveal key={value.title}>
              <h4>{value.title}</h4>
              <div className="card-divider" />
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-process" aria-label="Our Process">
        <div className="section-header" data-reveal>
          <div className="section-title-row">
            <div className="section-line" />
            <h2>Our Process</h2>
          </div>
          <p>How We Deliver Consistent Results</p>
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-card bento-card" data-reveal key={step.title}>
              <span className="process-number">0{index + 1}</span>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-clients" aria-label="Clients And Projects">
        <div className="section-header section-header-center" data-reveal>
          <div className="section-title-row section-title-row-center">
            <div className="section-line" />
            <h2>Our Clients</h2>
            <div className="section-line" />
          </div>
          <p>Brands And Projects We Have Supported</p>
        </div>

        <blockquote className="client-quote bento-card" data-reveal>
          <span className="quote-mark">"</span>
          <p>
            At Digital Seven M, we found the perfect partner for our digital needs. Their team is
            composed of highly skilled and experienced professionals who understand the latest trends
            and technologies in the digital world.
          </p>
          <cite>— Client Testimonial</cite>
        </blockquote>

        <div className="client-visual-grid">
          <article className="client-visual-card bento-card" data-reveal>
            <img
              src={clientsBoardImage}
              alt="Client portfolio board featuring partner brand logos handled by Digital 7M"
            />
            <div className="visual-caption">
              <h4>Our Esteemed Clients</h4>
              <p>A snapshot of the brands we have partnered with across industries.</p>
            </div>
          </article>

          <article className="client-visual-card bento-card" data-reveal>
            <img
              src={caseStudiesImage}
              alt="Case study summary featuring campaign outcomes for Unilever, SLT, and Red Bull"
            />
            <div className="visual-caption">
              <h4>Case Study Highlights</h4>
              <p>Selected project outcomes that show strategy, execution, and measurable impact.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="about-cta" data-reveal aria-label="Contact Call To Action">
        <div className="cta-inner">
          <h3>Have A Project In Mind?</h3>
          <p>Let us shape your next digital move with strategy, creativity, and precision delivery.</p>
          <div className="cta-actions">
            <a href="/#contact" className="primary-action">Book A Consultation</a>
            <a href="/#services" className="secondary-action">Explore Services</a>
          </div>
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

export default AboutUs