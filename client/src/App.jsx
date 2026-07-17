import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import companyLogo from './assets/images/70876953_108760627238592_8569903641920536576_n-removebg-preview.png'
import teamWorkImage from './assets/images/126b6202-23a3-42ea-9bec-a069bb3c3d9a.jpg'
import './App.css'

const highlights = [
  {
    icon: 'send',
    title: 'Future Concept.',
    text:
      'Brands are now looking forward to boosting their presence online because of the presence of the target audience. Brands require the support of digital agencies and social media presence to promote and spread awareness about their products.',
  },
  {
    icon: 'public',
    title: 'The Big Ideas.',
    text:
      'Artificial intelligence is a key development in the 21st century. It is a major player in digital marketing, where data drives the action. There is much to do before we can analyze and find the patterns.',
  },
  {
    icon: 'lightbulb',
    title: 'Creative Solutions.',
    text:
      'Productive can help you improve your profitability and monitor your operations. Productive offers world-class support and product demonstrations to ensure everything is managed within the budget you set.',
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
            <a href="#blog">BLOG</a>
            <a href="#contact">CONTACT</a>
          </div>

          <button className="start-button" type="button">
            Get Started
          </button>
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
              <button className="primary-action" type="button">
                Explore Our Portfolio
              </button>
              <button className="secondary-action" type="button">
                Client Portal
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
            <article
              className="bento-card service-card"
              key={service.title}
            >
              <span className="material-symbols-outlined service-icon" aria-hidden="true">
                {service.icon}
              </span>
              <h4>{service.title}</h4>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="works-section" id="blog">
        <div className="section-header section-header-center" data-reveal>
          <div className="section-title-row section-title-row-center">
            <div className="section-line" />
            <h2>Works</h2>
            <div className="section-line" />
          </div>
          <p>Projects We Have Done</p>
        </div>

        <div className="works-grid">
          <article className="bento-card work-card" data-reveal>
            <img
              alt="A clean, professional showcase of digital marketing case studies for brands like Unilever and Red Bull."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9sq64ccfR9KwhFVsB5EHcNbdH3gC5Faz8vFKoQi5FXl_cLEkjhjXhc8vE0T48xtd8aE8yRM8av5HosjamPk6BaDBmUy6GLis7kQofh9P2u9KGBvnCJ2Sf9hNGQQAMHe8WfqE5D1nnucWbG-zLpYleQIxYIfOSQu3Fa0oRLsQpBG_Mkx3WlbckWo3oISKZN5f3kWts2518i-ogHg23XRb-Pa-l0rwH1W4Kpb6zFgEb46ILWiUBaGHLtVqRDantpdULZNfkCUcaDDY"
            />
            <div className="work-overlay">
              <p>Corporate Success</p>
              <h4>Global Brand Case Studies</h4>
            </div>
          </article>

          <article className="bento-card work-card" data-reveal>
            <img
              alt="A professional presentation layout showing digital transformation projects for government and NGO sectors."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6SfN557YyZGotdbR6Aka-q5qP2bcZcK2_FZRIGh6iMW6RSEAsTMEnHNveRm6Sk39JlyyE1A2bIbak7XRUBCCfvS2KNGl7ZMsbH4HTaqC9EzeHDc4E0GjwWvjFHH570cAwYZMEeBiRPLoN0Ko-zFO0OVcFiyOu7c-77VxN_x_9A4qoCnadb8PuwRdHwQjQXCP6noCn3OkyJBR69akGGXoofisZXsIU3PlS7dWMYqP-lNDE8dE7kAMCwEuqlWVG6wrimDWycOZNP2Y"
            />
            <div className="work-overlay">
              <p>Strategic Partnerships</p>
              <h4>International Development Projects</h4>
            </div>
          </article>
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
            <div className="partner-card bento-card">
              <img
                alt="A collage of high-profile client logos including Uber Eats, Unilever, Red Bull, and Sri Lankan Airlines."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEHIz6qr4L1E2RiUGAetyzdUS0x3FOBgSeob-7_D3fgiglMdUu1JOX7LuqSS28xZicHvRQ4j6vOb8wS4yLujL5Ck-9Ash_QnoWTzkJYaFlx7cos2QHYO0vyeiIhPEiqI4LRVClNQxuywyXhLcM0Gr2Tu0FeuCPjhCk_zdiRAqf7w7nt_intBr5rUnZdRYKZ3olRcU7jxPhGcslr-hVDAdGypbcYkRDWTmcwR9g3Dt53uDOWFlcwvODR52wbaeAvSKlftpXTtqcHnM"
              />
              <div className="partner-text">Our Trusted Partners</div>
            </div>

            <div className="right-stack">
              <article className="photo-card bento-card">
                <img
                  alt="A modern office setting showing a young creative professional with a beard and glasses intensely focused on a laptop screen."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbxOPV-5LKgVrw00tPOHoK-z_w1Mrj0ODMpE8-1U_JBY7VR483xJI7rU1g_2PVHk8o2OtX2SE1h-OOnvDB7nK-YwKxJKPVsBKuYrQw2G89U2gospnxJ7ol-Lxfrm5smXgarrMA2u1AZ88G8Cb5I1rtFQ-wPuFsLSyWbkyOV78UImeh6_bBac8EbbmwHYyi_mFnmPKupKAVUc08tA3YKQsn2U0rXtcbDv1Tg2OF-zyyOtLk_EPPKAaXN6B1Jtt9wx3JbtCIB118Wj8"
                />
                <div className="photo-caption">
                  <span>Philosophy</span>
                  <p>Trust pays off</p>
                </div>
              </article>

              <article className="photo-card bento-card">
                <img
                  alt="A minimalist, high-end office workspace featuring several clean white desks with sleek monitors in a bright, sunlit room."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTNloUkhR45G6UIYBYULUTaIijTNr273iMsU3wYheGIISd4SECCB6_Y7OWspqy-Q8GgDgaHQGuFK8csx1m8G62rNFqrnjRgQ36eael5GbhwG-syZYMPLDl_0ZhtGHkOfz6k5fXOKQNdQER_huVTHgjgZBTigoqstIA5OngUG18WCEm_Vu8K0IdHRG2sSzdYZQSZaCt3wwsCdCxFzyddvWHa2DGpJDv1wSC28GTPBpy8dZIaXxv4-sg2rKM9TtqMUj20MxJGssnlXk"
                />
                <div className="photo-caption">
                  <span>Office</span>
                  <p>Somewhere on earth</p>
                </div>
              </article>
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
              <li>11850, Kadawatha, Sri lanka</li>
              <li>(94) 77 473 4086</li>
              <li>7msales@digital7m.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © Digital 7M | 2010 – 2025. All rights reserved.</p>
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