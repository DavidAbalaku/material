'use client';
import Link from 'next/link';
import Logo from './components/Logo';
import Scribble from './components/Scribble';

export default function Home() {
  const features = [
    {
      svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>,
      color: '#152d61',
      bg: '#DBDEE6',
      title: 'Rence Material Identity',
      desc: <>A tonal color system built on the official Rence <span style={{ color: '#152d61', fontWeight: 700 }}>#152d61</span>, with M3-compliant containers, surfaces, and state layers.</>,
    },
    {
      svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7" rx="3.5"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>,
      color: '#e8710a',
      bg: '#fce8b2',
      title: 'Material 3 Components',
      desc: 'Every Bootstrap component reskinned to Material 3 standards — buttons, cards, chips, dialogs, and more.',
    },
    {
      svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><line x1="14" y1="4" x2="10" y2="20"></line></svg>,
      color: '#1e8e3e',
      bg: '#e6f4ea',
      title: 'Bootstrap 5 Core',
      desc: 'Write familiar Bootstrap markup. Zero JavaScript changes. Drop in the CSS and your app is Materialized.',
    },
    {
      svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line><rect x="15" y="11" width="7" height="10" rx="1.5" fill="#f3e8fd"></rect></svg>,
      color: '#a142f4',
      bg: '#f3e8fd',
      title: 'Fully Responsive',
      desc: 'Mobile-first layouts that adapt gracefully. The same Material experience on every screen size.',
    },
  ];

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", color: '#202124', background: '#fff' }}>

      {/* ── NAVBAR ── */}
      <nav className="navbar-custom">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Logo size={28} />
          <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em', color: '#202124' }}>
            Rence <span style={{ color: '#152d61' }}>Material</span>
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link href="/docs/introduction" style={{
            background: '#152d61', color: '#fff', padding: '6px 24px',
            borderRadius: '4px', fontSize: '0.8125rem', fontWeight: 600,
            textDecoration: 'none', letterSpacing: '0.04em', display: 'inline-flex', alignItems: 'center'
          }}>
            DOCS
          </Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero-section">
        {/* Left: Text */}
        <div className="hero-content">
          {/* Pill badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span className="hero-badge-text">
              BASED ON GOOGLE MATERIAL DESIGN · BOOTSTRAP 5
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: '-0.04em',
            color: '#202124',
            margin: '0 0 1rem 0',
          }}>
            Build with<br />
            <span style={{ color: '#152d61', fontWeight: 400 }}>Material</span><br />
            <span style={{ fontWeight: 300 }}>Design.</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.6,
            color: '#5f6368', maxWidth: '480px', margin: '0 auto 1.5rem auto', fontWeight: 400,
          }}>
            A fully responsive, Google Material 3 skin for Bootstrap 5.
            Drop in one CSS file — every component transforms instantly.
          </p>

          <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', width: '100%' }}>
            <Link href="/become-a-rencematerial-sponsor" className="mobile-hide" style={{ 
              color: '#ad2b53', 
              fontSize: '0.9rem', 
              fontWeight: 600, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              textDecoration: 'none',
              borderBottom: '1px dashed #ad2b53',
              paddingBottom: '2px'
            }}>
              <span className="material-icons" style={{ fontSize: '20px' }}>volunteer_activism</span> Become a Rence Material Sponsor
            </Link>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '2.5rem', alignItems: 'flex-start' }}>
            <div className="d-flex flex-column align-items-start">
              <Link href="/docs/introduction" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#152d61', color: '#fff',
                padding: '0 24px', borderRadius: '4px',
                fontWeight: 600, fontSize: '0.8125rem', letterSpacing: '0.04em',
                textDecoration: 'none', boxShadow: '0 2px 8px rgba(21, 45, 97, 0.3)',
                transition: 'all 0.2s', minHeight: '40px'
              }}>
                <span className="material-icons" style={{ fontSize: '18px' }}>menu_book</span>
                GET STARTED
              </Link>
              <div className="mobile-hide">
                <Scribble text="Start here!" arrow="up" className="mt-3 ms-2" />
              </div>
            </div>
            <a href="#" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'transparent', color: '#152d61',
              padding: '0 24px', borderRadius: '4px',
              fontWeight: 600, fontSize: '0.8125rem', letterSpacing: '0.04em',
              textDecoration: 'none', border: '1px solid #dadce0', minHeight: '40px'
            }}>
              <span className="material-icons" style={{ fontSize: '18px' }}>download</span>
              DOWNLOAD
            </a>
          </div>

          {/* Stats row */}
          <div className="stats-row" style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { val: 'v1.5', label: 'Stable release' },
              { val: 'BS5', label: 'Bootstrap core' },
              { val: 'M3', label: 'Material 3' },
            ].map(s => (
              <div key={s.val}>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#202124', lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: '0.75rem', color: '#9aa0a6', fontWeight: 500, marginTop: '4px', letterSpacing: '0.04em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: UI Component Showcase (No AI Art) */}
        <div className="hero-showcase">
          {/* Background tint */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, #f8f9fa 0%, #DBDEE6 100%)',
          }}></div>

          <div style={{ position: 'relative', width: '480px', height: '480px' }}>
            {/* Background Container Sheet */}
            <div style={{
              position: 'absolute', width: '420px', height: '360px',
              borderRadius: '24px', background: '#DBDEE6',
              top: '60px', left: '30px',
              transform: 'rotate(-4deg)',
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.5)',
            }}></div>

            {/* Floating Top Card (Material Data Card) */}
            <div style={{
              position: 'absolute', width: '320px', background: '#fff',
              borderRadius: '16px', padding: '24px',
              top: '40px', right: '40px',
              boxShadow: '0 12px 32px rgba(0,0,0,0.08), 0 4px 8px rgba(0,0,0,0.04)',
              transform: 'rotate(2deg)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#152d61', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <span className="material-icons" style={{ fontSize: '20px' }}>person</span>
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#202124' }}>Material User Profile</div>
                  <div style={{ fontSize: '0.75rem', color: '#5f6368' }}>Bootstrap 5 Card layout</div>
                </div>
              </div>

              <div style={{ background: '#f8f9fa', height: '8px', borderRadius: '4px', width: '100%', marginBottom: '12px' }}></div>
              <div style={{ background: '#f8f9fa', height: '8px', borderRadius: '4px', width: '70%', marginBottom: '24px' }}></div>

              <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                <div style={{ padding: '8px 16px', color: '#152d61', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.04em' }}>CANCEL</div>
                <div style={{ padding: '8px 24px', background: '#DBDEE6', color: '#152d61', borderRadius: '40px', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.04em' }}>SAVE</div>
              </div>
            </div>

            {/* Floating Notification/Snackbar */}
            <div style={{
              position: 'absolute', width: '300px', background: '#202124',
              borderRadius: '8px', padding: '14px 20px',
              bottom: '80px', left: '20px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              transform: 'rotate(-1deg)',
            }}>
              <span style={{ color: '#f8f9fa', fontSize: '0.85rem' }}>Preferences updated</span>
              <span style={{ color: '#8ab4f8', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.04em' }}>UNDO</span>
            </div>

            {/* Floating Floating Action Button (FAB) */}
            <div style={{
              position: 'absolute', width: '64px', height: '64px',
              borderRadius: '20px', background: '#152d61',
              bottom: '140px', right: '50px',
              boxShadow: '0 8px 16px rgba(26,115,232,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff'
            }}>
              <span className="material-icons" style={{ fontSize: '28px' }}>add</span>
            </div>

            {/* Floating Input Field Mockup */}
            <div style={{
              position: 'absolute', width: '260px', background: '#fff',
              border: '1px solid #dadce0', borderRadius: '4px', padding: '16px 16px 8px 16px',
              top: '220px', left: '-10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              borderBottom: '2px solid #152d61'
            }}>
              <div style={{ fontSize: '0.7rem', color: '#152d61', fontWeight: 500, position: 'absolute', top: '-8px', left: '12px', background: '#fff', padding: '0 4px' }}>Email address</div>
              <div style={{ fontSize: '0.9rem', color: '#202124' }}>rence@bliteoc.com</div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ background: '#f8f9fa', padding: 'clamp(3rem, 5vw, 5rem) clamp(1.5rem, 5vw, 4rem)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{
              fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em',
              color: '#152d61', textTransform: 'uppercase', marginBottom: '12px',
            }}>WHY RENCE MATERIAL</div>
            <div className="mb-4 text-center">
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300, letterSpacing: '-0.03em', color: '#202124', margin: 0 }}>
                Everything you need to build<br />with Material Design.
              </h2>
              <div className="mobile-hide">
                <Scribble text="Modern & Clean" arrow="up" className="mt-4" />
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {features.map((f, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: '16px',
                padding: '32px 28px', border: '1px solid #e8eaed',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: '14px',
                  background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  <div style={{ color: f.color, display: 'flex', width: '24px', height: '24px' }}>
                    {f.svg}
                  </div>
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#202124', margin: '0 0 10px 0', letterSpacing: '-0.01em' }}>{f.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#5f6368', margin: 0, lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GETTING STARTED TEASER ── */}
      <section id="getting-started" style={{ background: '#fff', padding: 'clamp(3rem, 5vw, 5rem) clamp(1.5rem, 5vw, 4rem)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <div style={{
              fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em',
              color: '#152d61', textTransform: 'uppercase', marginBottom: '12px',
            }}>QUICK START</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.03em', color: '#202124', margin: '0 0 1rem 0' }}>
              One file.<br />Endless possibilities.
            </h2>
            <p style={{ fontSize: '1rem', color: '#5f6368', lineHeight: 1.7, margin: '0 0 2rem 0' }}>
              Replace your Bootstrap CSS with Rence Material CSS. That&apos;s it.
              Your existing markup instantly gains a polished Material 3 look.
            </p>
            <Link href="/docs/introduction" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#152d61', color: '#fff',
              padding: '8px 24px', borderRadius: '4px',
              fontWeight: 600, fontSize: '0.8125rem', letterSpacing: '0.04em',
              textDecoration: 'none',
            }}>
              READ THE DOCS
              <span className="material-icons" style={{ fontSize: '16px' }}>arrow_forward</span>
            </Link>
          </div>

          {/* Code preview */}
          <div style={{ flex: 1, minWidth: '280px' }}>
            <div style={{
              background: '#202124', borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            }}>
              <div style={{
                background: '#303134', padding: '12px 20px',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                {['#ea4335', '#fbbc04', '#34a853'].map((c, i) => (
                  <div key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: c }}></div>
                ))}
                <span style={{ fontSize: '0.75rem', color: '#9aa0a6', marginLeft: '8px', fontFamily: 'monospace' }}>index.html</span>
              </div>
              <pre style={{
                margin: 0, padding: '24px', fontSize: '0.8rem',
                lineHeight: 1.8, fontFamily: "'Roboto Mono', monospace",
                overflowX: 'auto', color: '#e8eaed',
              }}>{`<link rel="stylesheet" href=
  "https://cdn.jsdelivr.net/gh/davidabalaku/material@main/dist/css/rence-material.min.css">

<!-- That's it! All your Bootstrap
     markup is now Material 3 -->

<button class="btn btn-primary">
  Filled Button
</button>

<div class="card">
  <div class="card-body">
    Material card ✓
  </div>
</div>`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer-custom">
        <div className="footer-links">
          <div className="footer-links-row">
            <Link href="/become-a-rencematerial-sponsor" style={{ fontSize: 'inherit', color: '#152d61', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
              <span className="material-icons" style={{ fontSize: '14px' }}>volunteer_activism</span> Sponsor
            </Link>
            <a href="https://github.com/davidabalaku/material" style={{ fontSize: 'inherit', color: '#9aa0a6', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span className="material-icons" style={{ fontSize: '14px' }}>code</span> Fork Me On GitHub
            </a>
          </div>
          <div className="footer-links-row justify-content-center">
            <span style={{ fontSize: 'inherit', color: '#9aa0a6', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span className="material-icons" style={{ fontSize: '14px', color: '#ea4335' }}>favorite</span> Made by Rence
            </span>
          </div>
        </div>

        <div className="footer-brand">
          <Logo size={24} />
          <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#5f6368' }}>
            Rence Material <span style={{ color: '#9aa0a6', fontWeight: 400 }}>v1.5.0</span>
          </span>
        </div>
      </footer>

      <style jsx>{`
        .hero-section {
          display: flex;
          align-items: center;
          min-height: 100vh;
          padding-top: 64px;
          background: #fff;
          overflow: hidden;
          position: relative;
        }

        .hero-content {
          flex: 1;
          padding: clamp(2rem, 5vw, 5rem);
          max-width: 700px;
          position: relative;
          z-index: 2;
        }

        .hero-showcase {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          min-height: 500px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #DBDEE6;
          border-radius: 50px;
          padding: 6px 16px;
          margin-bottom: 2rem;
          line-height: 1.2;
        }

        .hero-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #152d61;
          flex-shrink: 0;
        }

        .hero-badge-text {
          font-size: 0.75rem;
          font-weight: 600;
          color: #152d61;
          letter-spacing: 0.05em;
          line-height: inherit;
        }

        .footer-custom {
          background: #f8f9fa;
          border-top: 1px solid #e8eaed;
          padding: 2.5rem clamp(1.5rem, 5vw, 4rem);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .footer-brand {
          order: 1;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-links {
          order: 2;
          display: flex;
          gap: 2rem;
          align-items: center;
          font-size: 0.8rem;
        }

        .footer-links-row {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        @media (max-width: 767.98px) {
          .hero-badge {
            padding: 4px 12px;
            margin-bottom: 1.5rem;
          }
          .hero-badge-text {
            font-size: 0.65rem;
          }
          .footer-custom {
            flex-direction: column;
            text-align: center;
            padding: 2rem 1rem;
            gap: 1.25rem;
          }
          .footer-brand { order: 2; }
          .footer-links { 
            order: 1;
            flex-direction: column;
            gap: 0.5rem;
            font-size: 0.7rem;
            width: 100%;
          }
          .footer-links-row {
            width: 100%;
            justify-content: center;
            gap: 1rem;
          }
        }

        @media (max-width: 991.98px) {
          .hero-section {
            flex-direction: column;
            text-align: center;
            padding-bottom: 4rem;
          }
          .hero-content {
            padding: 5rem 1.5rem 3rem 1.5rem;
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-content h1, .hero-content p {
            text-align: center;
          }
          .stats-row {
            justify-content: center !important;
          }
          .navbar-custom {
            padding: 0 1rem !important;
            gap: 10px;
          }
          .hero-showcase {
            display: none; 
          }
          .mobile-hide {
            display: none !important;
          }
        }

        .navbar-custom {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #f1f3f4;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 clamp(1.5rem, 5vw, 4rem);
          height: 64px;
        }
      `}</style>
    </div>
  );
}


