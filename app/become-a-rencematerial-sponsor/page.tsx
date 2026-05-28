'use client';
import Link from 'next/link';
import Logo from '../components/Logo';

export default function SponsorPage() {
  const tiers = [
    { price: '$1', label: 'a month', desc: 'Thank you for supporting Rence Material and open source!' },
    { price: '$10', label: 'a month', desc: 'Your name will be put on the Rence Material website’s backers page, and in backers.md in the repository.' },
    { price: '$30', label: 'a month', desc: 'Your name will be put at the top of the Rence Material website’s backers page, and at the top of backers.md in the repository.' },
    { price: '$100', label: 'a month', desc: 'Your name or company logo will appear on the Rence Material homepage.' },
    { price: '$200', label: 'a month', desc: 'Two of your names or company logos will appear on the Rence Material homepage.' },
    { price: '$300', label: 'a month', desc: 'Your name or company logo will appear on the Rence Material homepage and in the footer of each page.' },
    { price: '$500', label: 'a month', desc: 'Your name or company logo will appear on the Rence Material documentation sidebar.' },
  ];

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", color: '#202124', background: '#fff', minHeight: '100vh' }}>
      
      {/* ── NAVBAR ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #f1f3f4',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(1.5rem, 5vw, 4rem)', height: '64px',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <Logo size={28} />
          <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em', color: '#202124' }}>
            Rence <span style={{ color: '#152d61' }}>Material</span>
          </span>
        </Link>
        <Link href="/docs/introduction" style={{
          background: '#152d61', color: '#fff', padding: '6px 24px',
          borderRadius: '4px', fontSize: '0.8125rem', fontWeight: 600,
          textDecoration: 'none', letterSpacing: '0.04em'
        }}>
          DOCS
        </Link>
      </nav>

      {/* ── HEADER (Bulma Style) ── */}
      <header style={{ paddingTop: '140px', paddingBottom: '80px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, color: '#202124', marginBottom: '16px', letterSpacing: '-0.03em' }}>
          Become a Rence Material Sponsor
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#5f6368', fontWeight: 400 }}>
          Help the development of Open Source.
        </p>
        <div style={{ width: '80px', height: '4px', background: '#152d61', margin: '30px auto 0' }}></div>
      </header>

      {/* ── MAIN ACTIONS ── */}
      <div style={{ maxWidth: '800px', margin: '0 auto 80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', padding: '0 20px' }}>
        {/* PATREON BLOCK */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
            <span className="material-icons" style={{ color: '#ff5e5b', fontSize: '32px' }}>favorite</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: 0, letterSpacing: '0.02em' }}>PATREON</h2>
          </div>
          <a href="https://www.patreon.com/cw/davidabalaku" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block', background: '#ff5e5b', color: '#fff', padding: '14px 40px',
            borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem',
            boxShadow: '0 4px 12px rgba(255,94,91,0.2)'
          }}>
            Become a Patron
          </a>
        </div>

        {/* GITHUB BLOCK */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
            <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: 0, letterSpacing: '0.02em' }}>GitHub</h2>
          </div>
          <a href="https://github.com/sponsors/davidabalaku" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block', background: '#fff', color: '#5f6368', padding: '14px 40px',
            borderRadius: '6px', fontWeight: 500, textDecoration: 'none', fontSize: '1rem',
            border: '1px solid #dadce0'
          }}>
            Sponsor on GitHub
          </a>
        </div>
      </div>

      {/* ── TIERS LIST ── */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
        {tiers.map((t, i) => (
          <div key={i} style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            gap: '40px', 
            padding: '24px 0', 
            borderTop: '1px solid #f1f3f4',
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', minWidth: '140px' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#202124' }}>{t.price}</span>
              <span style={{ color: '#9aa0a6', fontSize: '0.9rem' }}>{t.label}</span>
            </div>
            <div style={{ fontSize: '1.05rem', color: '#5f6368', lineHeight: 1.6 }}>
              {t.desc.split(' ').map((word, wi) => {
                const cleanWord = word.replace(/[.,]/g, '');
                const isHighlight = ['homepage', 'footer', 'sidebar', 'top', 'backers.md'].includes(cleanWord);
                return (
                  <span key={wi} style={{ 
                    fontWeight: isHighlight ? 700 : 400, 
                    color: isHighlight ? '#202124' : 'inherit',
                    background: cleanWord.includes('.md') ? '#f1f3f4' : 'transparent',
                    padding: cleanWord.includes('.md') ? '2px 6px' : '0',
                    borderRadius: cleanWord.includes('.md') ? '4px' : '0',
                    fontFamily: cleanWord.includes('.md') ? 'monospace' : 'inherit'
                  }}>
                    {word}{' '}
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>

   

      {/* ── GLOBAL FOOTER ── */}
      <footer style={{
        background: '#f8f9fa', borderTop: '1px solid #e8eaed',
        padding: '2.5rem clamp(1.5rem, 5vw, 4rem)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Logo size={24} />
          <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#5f6368' }}>
            Rence Material <span style={{ color: '#9aa0a6', fontWeight: 400 }}>v1.5.0</span>
          </span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link href="/" style={{ fontSize: '0.8rem', color: '#5f6368', textDecoration: 'none' }}>Home</Link>
          <a href="https://github.com/davidabalaku/material" style={{ fontSize: '0.8rem', color: '#9aa0a6', textDecoration: 'none' }}>GitHub</a>
        </div>
      </footer>

    </div>
  );
}
