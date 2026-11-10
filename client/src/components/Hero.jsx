import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAHTRIe7HqQnsbmxISyqrlb5kOs1CV-gIOe81uNr2hzM_9FXvqJkKsqenxC51BGYUdCNGtoKZ_IX_9YzZEE8Yw5uznCgS7yOZK_HL3xQqUlZHrKTEM5nZL_HzDzBHibbrBG2IP0rham53ZVCs5hujsBk5M4G0dfZgENE_XxUwprvHJ7A_s2994J21bUtp-a0KW23PNCph3wKn9YJ8oOM6ug0ltpCWw5Clc10aF6jI3BfGYFQFHmUt4r8N_MSpfYjk7mRqA3wJfHXHg'

const ROTATING_WORDS = ['Social', 'Creative', 'Viral', 'Digital']

/* Live-looking reach counter on the floating card. */
function useLiveCounter(start, step = 7, interval = 1400) {
  const [n, setN] = useState(start)
  useEffect(() => {
    const id = setInterval(() => setN((v) => v + Math.ceil(Math.random() * step)), interval)
    return () => clearInterval(id)
  }, [step, interval])
  return n
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const visualRef = useRef(null)
  const likes = useLiveCounter(12480)

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % ROTATING_WORDS.length), 2400)
    return () => clearInterval(id)
  }, [])

  const handleMove = (e) => {
    const el = visualRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--rx', `${(-y * 8).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${(x * 10).toFixed(2)}deg`)
  }

  const handleLeave = () => {
    const el = visualRef.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <header className="hx" id="home">
      {/* Background layers */}
      <div className="hx-bg" aria-hidden="true">
        <div className="hx-grid" />
        <div className="hx-orb hx-orb-a" />
        <div className="hx-orb hx-orb-b" />
        <div className="hx-orb hx-orb-c" />
      </div>

      <div className="hx-inner">
        {/* LEFT: copy */}
        <div className="hx-copy">
          <div className="hx-pill hx-in" style={{ '--d': '0ms' }}>
            <span className="hx-live" />
            Creative mind, creative works
          </div>

          <h1 className="hx-title">
            <span className="hx-line hx-in" style={{ '--d': '120ms' }}>
              We build
            </span>
            <span className="hx-line hx-in" style={{ '--d': '240ms' }}>
              <span className="hx-rotator" aria-live="polite">
                <span key={wordIndex} className="hx-word">
                  {ROTATING_WORDS[wordIndex]}
                </span>
              </span>
            </span>
            <span className="hx-line hx-in" style={{ '--d': '360ms' }}>
              brands that travel.
            </span>
          </h1>

          <p className="hx-lead hx-in" style={{ '--d': '520ms' }}>
            Digital 7M is a Sri Lankan digital media agency. We plan, design and launch
            social-first campaigns that turn attention into real results.
          </p>

          <div className="hx-actions hx-in" style={{ '--d': '660ms' }}>
            <Link to="/portfolio" className="hx-btn hx-btn-primary">
              Explore Our Team
            </Link>
            
            <a href="#blog" className="hx-btn hx-btn-ghost">
              <span className="hx-play" aria-hidden="true">
                <span className="material-symbols-outlined">play_arrow</span>
              </span>
              See our case studies
            </a>
          </div>

          {/* The stats section has been removed from here */}

        </div>

        {/* RIGHT: live feed visual */}
        <div
          className="hx-visual hx-in"
          style={{ '--d': '300ms' }}
          ref={visualRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          <div className="hx-stage">
            <div className="hx-ring" aria-hidden="true" />

            <article className="hx-post">
              <div className="hx-post-head">
                <img className="hx-avatar" src="/favicon.ico" alt="" onError={(e) => (e.currentTarget.style.display = 'none')} />
                <div>
                  <b>Digital 7M</b>
                  <small>Sponsored campaign</small>
                </div>
                <span className="hx-dots" aria-hidden="true">•••</span>
              </div>

              <div className="hx-post-media">
                <img src={HERO_IMAGE} alt="A cyan flamingo and a gray flamingo facing each other against a dark background." />
                <div className="hx-scan" aria-hidden="true" />
              </div>

              <div className="hx-post-foot">
                <span className="hx-heart" aria-hidden="true">
                  <span className="material-symbols-outlined">favorite</span>
                </span>
                <span className="hx-likes">{likes.toLocaleString()} likes</span>
                <span className="hx-share material-symbols-outlined" aria-hidden="true">
                  share
                </span>
              </div>
            </article>

            <div className="hx-chip hx-chip-reach">
              <span className="material-symbols-outlined" aria-hidden="true">trending_up</span>
              <div>
                <b>3M+</b>
                <small>Total reach</small>
              </div>
            </div>

            <div className="hx-chip hx-chip-engage">
              <span className="hx-bars" aria-hidden="true">
                <i /><i /><i /><i /><i />
              </span>
              <div>
                <b>+128%</b>
                <small>Engagement</small>
              </div>
            </div>

            <div className="hx-bubble hx-bubble-1" aria-hidden="true">
              <span className="material-symbols-outlined">favorite</span>
            </div>
            <div className="hx-bubble hx-bubble-2" aria-hidden="true">
              <span className="material-symbols-outlined">chat_bubble</span>
            </div>
            <div className="hx-bubble hx-bubble-3" aria-hidden="true">
              <span className="material-symbols-outlined">share</span>
            </div>
          </div>
        </div>
      </div>

      {/* The Marquee section has been removed from here */}
      
    </header>
  )
}