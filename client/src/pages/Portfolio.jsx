
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Portfolio.css'
import companyLogo from '../assets/images/70876953_108760627238592_8569903641920536576_n-removebg-preview.png'
import teamData from '../data/teamData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faTwitter, faFacebookF, faGithub, faDribbble, faBehance } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

function Portfolio() {
  const location = useLocation()
  const [selectedDepartment, setSelectedDepartment] = useState('All')
  const [selectedMember, setSelectedMember] = useState(null)

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

  // Get unique departments
  const departments = ['All', ...new Set(teamData.map(member => member.department))]

  // Filter members by department
  const filteredMembers = selectedDepartment === 'All' 
    ? teamData 
    : teamData.filter(member => member.department === selectedDepartment)

  return (
    <div className="portfolio-page">
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
            <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active-link' : ''}>PORTFOLIO</Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>CONTACT</Link>
          </div>

          <button className="start-button" type="button">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="portfolio-hero" data-reveal>
        <div className="portfolio-hero-inner">
          <p className="portfolio-kicker">
            <span className="eyebrow-dot" />
            Our Team
          </p>
          <h1>
            Meet Our <span>Expert Team</span>
          </h1>
          <p>
            Our team of dedicated professionals brings a wealth of experience and passion to every project.
            Get to know the people behind Digital 7M.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="portfolio-stats" data-reveal>
      
       
      </section>

      {/* Department Filter */}
      <section className="portfolio-filter" data-reveal>
        <div className="filter-buttons">
          {departments.map(dept => (
            <button
              key={dept}
              className={`filter-btn ${selectedDepartment === dept ? 'active' : ''}`}
              onClick={() => setSelectedDepartment(dept)}
            >
              {dept}
            </button>
          ))}
        </div>
      </section>

      {/* Team Grid */}
      <section className="portfolio-grid" data-reveal>
        <div className="team-grid">
          {filteredMembers.map((member) => (
            <div 
              key={member.id} 
              className="team-card bento-card"
              onClick={() => setSelectedMember(member)}
            >
              <div className="team-card-image">
                <img 
                  src={member.image} 
                  alt={member.name}
                  onError={(e) => {
                    e.target.src = '/src/assets/images/team/buddhima.jpg'
                  }}
                />
                <div className="team-card-overlay">
                  <button className="view-profile-btn">View Profile</button>
                </div>
              </div>
              <div className="team-card-info">
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <span className="department-badge">{member.department}</span>
                <div className="team-skills">
                  {member.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedMember(null)}>×</button>
            <div className="modal-body">
              <div className="modal-image">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name}
                  onError={(e) => {
                    e.target.src = '/src/assets/images/team/images.jpg'
                  }}
                />
              </div>
              <div className="modal-info">
                <h2>{selectedMember.name}</h2>
                <p className="modal-position">{selectedMember.position}</p>
                <span className="modal-department">{selectedMember.department}</span>
                <p className="modal-bio">{selectedMember.bio}</p>
                <div className="modal-contact">
                  <p><strong>📧 Email:</strong> {selectedMember.email}</p>
                  <p><strong>📱 Phone:</strong> {selectedMember.phone}</p>
                </div>
                <div className="modal-skills">
                  {selectedMember.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
   <div className="modal-social">
  {selectedMember.social.linkedin && (
    <a href={selectedMember.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link linkedin">
      <FontAwesomeIcon icon={faLinkedinIn} />
    </a>
  )}
  {selectedMember.social.twitter && (
    <a href={selectedMember.social.twitter} target="_blank" rel="noopener noreferrer" className="social-link twitter">
      <FontAwesomeIcon icon={faTwitter} />
    </a>
  )}
  {selectedMember.social.facebook && (
    <a href={selectedMember.social.facebook} target="_blank" rel="noopener noreferrer" className="social-link facebook">
      <FontAwesomeIcon icon={faFacebookF} />
    </a>
  )}
  {selectedMember.social.github && (
    <a href={selectedMember.social.github} target="_blank" rel="noopener noreferrer" className="social-link github">
      <FontAwesomeIcon icon={faGithub} />
    </a>
  )}
  {selectedMember.social.dribbble && (
    <a href={selectedMember.social.dribbble} target="_blank" rel="noopener noreferrer" className="social-link dribbble">
      <FontAwesomeIcon icon={faDribbble} />
    </a>
  )}
  {selectedMember.social.behance && (
    <a href={selectedMember.social.behance} target="_blank" rel="noopener noreferrer" className="social-link behance">
      <FontAwesomeIcon icon={faBehance} />
    </a>
  )}
</div>
                </div>
              </div>
            </div>
          </div>
        
      )}

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

export default Portfolio