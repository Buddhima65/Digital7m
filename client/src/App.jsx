import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import companyLogo from './assets/images/logo-01.png'
import teamWorkImage from './assets/images/126b6202-23a3-42ea-9bec-a069bb3c3d9a.jpg'
import './App.css'

// Client Logos
import unileverLogo from './assets/images/clients/unilever.png'
import airtelLogo from './assets/images/clients/airtel.png'
import sltLogo from './assets/images/clients/slt.png'
import dialogLogo from './assets/images/clients/dialog.png'
import abansLogo from './assets/images/clients/abans.png'
import darazLogo from './assets/images/clients/daraz.png'
import tvLogo from './assets/images/clients/tvs.png'
import canonLogo from './assets/images/clients/canon.png'

const highlights = [
  {
    icon: 'send',
    title: 'Future Concept.',
    text: 'Brands are now looking forward to boosting their presence online because of the presence of the target audience. Brands require the support of digital agencies and social media presence to promote and spread awareness about their products.',
  },
  {
    icon: 'public',
    title: 'The Big Ideas.',
    text: 'Artificial intelligence is a key development in the 21st century. It is a major player in digital marketing, where data drives the action. There is much to do before we can analyze and find the patterns.',
  },
  {
    icon: 'lightbulb',
    title: 'Creative Solutions.',
    text: 'Productive can help you improve your profitability and monitor your operations. Productive offers world-class support and product demonstrations to ensure everything is managed within the budget you set.',
  },
]

const services = [
  {
    icon: 'web',
    title: 'UI Designs',
    text: 'This board is a showcase of some of the best examples of UI Design for Mobile Apps and the Web.',
  },
  {
    icon: 'insights',
    title: 'Digital Strategy',
    text: 'A digital strategy is a plan for maximizing the business benefits of data assets and technology-focused initiatives.',
  },
  {
    icon: 'edit_note',
    title: 'Content Writing',
    text: 'The goal of content writing is to solve problems for a specific audience by adding value to their experience.',
  },
  {
    icon: 'query_stats',
    title: 'Marketing Strategy',
    text: 'Long-term plan for achieving a company\'s goals by understanding the needs of customers and creating competitive advantage.',
  },
  {
    icon: 'code',
    title: 'Web Development',
    text: 'The tasks associated with creating, building, and maintaining websites and web applications that run online on a browser.',
  },
  {
    icon: 'hub',
    title: 'Social Media',
    text: 'Collective term for websites and applications that focus on communication, community-based input, and interaction.',
  },
]

// ====== CLIENT LOGOS ARRAY ======
const clientLogos = [
  { name: 'Unilever', logo: unileverLogo },
  { name: 'Airtel', logo: airtelLogo },
  { name: 'SLT', logo: sltLogo },
  { name: 'Dialog', logo: dialogLogo },
  { name: 'Abans', logo: abansLogo },
  { name: 'Daraz', logo: darazLogo },
  { name: 'TVS', logo: tvLogo },
  { name: 'Canon', logo: canonLogo },
]

// ====== CASE STUDIES ARRAY ======
const caseStudies = [
  {
    id: 1,
    client: 'USAID',
    title: 'Inter-Ethnic Harmony Campaign',
    challenge: 'Preventing inter-ethnic conflict during the COVID-19 epidemic in Sri Lanka.',
    strategy: 'Created viral memes and videos to promote inter-ethnic harmony through the theme of popular social media pages.',
    result: 'Successfully prevented unrest. People understood the importance of working intelligently, and no incidents were reported.',
    color: '#0056A4' // USAID Blue
  },
  {
    id: 2,
    client: 'SLT Mobitel',
    title: 'Speedup Sawari 2015-2018',
    challenge: 'Create awareness regarding the cycle campaign predominantly among youth aged 16-25.',
    strategy: 'Ran a simultaneous social media campaign to promote the cycle contest across 20 major Facebook pages.',
    result: 'The initial acquisition target was 2 million. At the conclusion of the campaign, the total turnout exceeded 3 million.',
    color: '#009639' // SLT Green
  },
  {
    id: 3,
    client: 'Red Bull',
    title: 'Viral Brand Engagement',
    challenge: 'Maintain high brand engagement and awareness in a highly competitive beverage market.',
    strategy: 'Leveraged popular social media meme pages to create sponsored content and viral videos.',
    result: 'Massive organic reach and engagement, keeping Red Bull at the top of mind for the youth demographic.',
    color: '#CC1E4A' // Red Bull Red
  }
]

function App() {
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
    <div className="landing-page">
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

      <header className="hero-section gradient-mesh" id="home">
        <div className="hero-inner">
          <div className="hero-copy" data-reveal>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              <span>CREATIVE MIND, CREATIVE WORKS.</span>
            </div>
            <h1>
              We Are <span>Digital</span>
              <br />
              Agency
            </h1>
            <p>
              Sovereign precision in engineering meets bold creative vision. We transform
              complex data into elite digital experiences.
            </p>
            <div className="hero-actions">
              <button 
                className="primary-action" 
                type="button"
                onClick={() => window.location.href = '/portfolio'}
              >
                Explore Our Team
              </button>
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <img
              alt="A high-end surrealistic visual featuring a vibrant cyan-colored flamingo and a desaturated gray flamingo standing together against a deep charcoal-black void."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHTRIe7HqQnsbmxISyqrlb5kOs1CV-gIOe81uNr2hzM_9FXvqJkKsqenxC51BGYUdCNGtoKZ_IX_9YzZEE8Yw5uznCgS7yOZK_HL3xQqUlZHrKTEM5nZL_HzDzBHibbrBG2IP0rham53ZVCs5hujsBk5M4G0dfZgENE_XxUwprvHJ7A_s2994J21bUtp-a0KW23PNCph3wKn9YJ8oOM6ug0ltpCWw5Clc10aF6jI3BfGYFQFHmUt4r8N_MSpfYjk7mRqA3wJfHXHg"
            />
          </div>
        </div>
        <div className="hero-fade" />
      </header>

      <section className="section-grid" aria-label="Highlights">
        {highlights.map((item) => (
          <article className="bento-card highlight-card" data-reveal key={item.title}>
            <span className="material-symbols-outlined highlight-icon" aria-hidden="true">
              {item.icon}
            </span>
            <h3>{item.title}</h3>
            <div className="card-divider" />
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="services-section" id="services">
        <div className="section-header" data-reveal>
          <div className="section-title-row">
            <div className="section-line" />
            <h2>Services</h2>
          </div>
          <p>Our Services For Clients</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="bento-card service-card" key={service.title}>
              <span className="material-symbols-outlined service-icon" aria-hidden="true">
                {service.icon}
              </span>
              <h4>{service.title}</h4>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ====== NEW CASE STUDIES SECTION ====== */}
      <section className="works-section" id="blog">
        <div className="section-header section-header-center" data-reveal>
          <div className="section-title-row section-title-row-center">
            <div className="section-line" />
            <h2>Case Studies</h2>
            <div className="section-line" />
          </div>
          <p>Proven Results For Global & Local Brands</p>
        </div>

        <div className="case-studies-grid">
          {caseStudies.map((study) => (
            <article className="case-study-card bento-card" data-reveal key={study.id}>
              
              <div className="cs-header" style={{ borderColor: study.color }}>
                <span className="cs-client" style={{ color: study.color }}>{study.client}</span>
              </div>

              <h3 className="cs-title">{study.title}</h3>

              <div className="cs-detail">
                <strong>The Challenge:</strong>
                <p>{study.challenge}</p>
              </div>

              <div className="cs-detail">
                <strong>Our Strategy:</strong>
                <p>{study.strategy}</p>
              </div>

              <div className="cs-result">
                <strong>The Result:</strong>
                <p>{study.result}</p>
              </div>

            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-grid">
          <div className="about-left" data-reveal>
            <div className="section-header">
              <div className="section-title-row">
                <div className="section-line" />
                <h2>About</h2>
              </div>
              <p>We are best digital agency since 2008</p>
            </div>

            <div className="about-story">
              <div className="story-card">
                <h5>Who We Are</h5>
                <p>
                  We are a collective of elite technical minds and creative visionaries
                  dedicated to pushing the boundaries of the digital frontier.
                </p>
              </div>

              <div className="mini-cards">
                <article className="bento-card mini-card">
                  <h5>Our Vision</h5>
                  <p>To be the sovereign authority in digital transformation and creative excellence globally.</p>
                </article>
                <article className="bento-card mini-card">
                  <h5>Our Mission</h5>
                  <p>Delivering precision-engineered solutions that empower brands to dominate their digital ecosystems.</p>
                </article>
              </div>
            </div>
          </div>

          <div className="about-right" data-reveal>
            {/* ====== CLIENT LOGOS SECTION ====== */}
            <div className="partner-card bento-card partners-wrapper">
              <h5 className="partners-title">Trusted By Industry Leaders</h5>
              <div className="client-logos-grid">
                {clientLogos.map((client, index) => (
                  <div className="client-logo-item" key={index}>
                    <img src={client.logo} alt={`${client.name} Logo`} />
                  </div>
                ))}
              </div>
            </div>

            <div className="right-stack">
              {/* Empty stack for now */}
            </div>
          </div>
        </div>

        <article className="team-banner bento-card" data-reveal>
          <img
            alt="A wide cinematic shot of a collaborative team working in a modern agency loft."
            src={teamWorkImage}
          />
          <div className="team-caption">
            <h3>Team Work</h3>
            <p>Committed and creative</p>
          </div>
        </article>
      </section>

      <footer className="footer-section" id="contact">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-block footer-brand-block">
              <img
                alt="Digital 7M Logo"
                className="logo-circle"
                src={companyLogo}
              />
              <span className="brand-name">Digital 7M</span>
            </div>
            <p>
              Digital 7M is a full-service digital agency based in Sri Lanka that provides a wide range of digital services to clients worldwide.
            </p>
          </div>

          <div>
            <h5>Services</h5>
            <ul>
              <li>UI Design</li>
              <li>Digital Strategy</li>
              <li>Social Media</li>
              <li>Content Writing</li>
            </ul>
          </div>

          <div>
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li>Projects</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h5>Contact</h5>
            <ul>
              <li>15/10/5 Dalupitiya RD,Mahara,Kadawatha</li>
              <li>(94) 77 473 4086</li>
              <li>7msales@digital7m.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © Digital 7M | 2010 – 2026. All rights reserved.</p>
          <div className="footer-icons">
            <a href="#home" aria-label="Website">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a href="#home" aria-label="Facebook">
              <span className="material-symbols-outlined">face</span>
            </a>
            <a href="#home" aria-label="Hub">
              <span className="material-symbols-outlined">hub</span>
            </a>
            <a href="#home" aria-label="Play">
              <span className="material-symbols-outlined">play_circle</span>
            </a>
          </div>
        </div>
      </footer>

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

export default App