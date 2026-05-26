'use client';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const m3Tones = [
  { label: 'Primary', hex: '#1a73e8', on: '#ffffff', container: '#e8f0fe', onContainer: '#174ea6' },
  { label: 'Secondary', hex: '#5f6368', on: '#ffffff', container: '#f1f3f4', onContainer: '#202124' },
  { label: 'Surface', hex: '#ffffff', on: '#202124', container: '#f8f9fa', onContainer: '#202124' },
];

const colorUsageCode = `<!-- Primary Tonal Pair -->
<div class="p-4 rounded-4 mb-3" style="background-color: #1a73e8; color: white;">
  Primary Color
</div>
<div class="p-4 rounded-4" style="background-color: #e8f0fe; color: #174ea6;">
  Primary Container
</div>`;

export default function Colours() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <div className="mb-5 pb-3">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#1a73e8 !important' }}>Colours</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted mb-0 opacity-75" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                 Color helps express hierarchy, establish brand presence, and provide meaning. The Rence Material tonal system ensures accessibility.
              </p>
              <Scribble text="Material 3 Tonal system" arrow="left" />
            </div>
          </div>

          {/* ── TONAL SYSTEM ── */}
          <section id="tonal-system" className="mb-5 pb-4">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="h4 fw-light mb-0 text-dark">M3 Tonal System</h2>
              <Scribble text="Google Blue Identity" arrow="left" />
            </div>
            
            <div className="card shadow-none border rounded-4 overflow-hidden mb-4">
               <div className="bg-white p-3 p-md-5 border-bottom">
                 <div className="row g-3 g-md-4">
                   {m3Tones.map(t => (
                     <div key={t.label} className="col-12 col-sm-6 col-md-4">
                        <div className="rounded-4 overflow-hidden border shadow-sm h-100">
                           <div className="p-3 p-md-4" style={{ backgroundColor: t.hex, color: t.on }}>
                              <div className="fw-bold" style={{ fontSize: '1rem' }}>{t.label}</div>
                              <div className="small opacity-75" style={{ fontSize: '0.75rem' }}>{t.hex}</div>
                           </div>
                           <div className="p-3 p-md-4" style={{ backgroundColor: t.container, color: t.onContainer }}>
                              <div className="fw-bold" style={{ fontSize: '0.9rem' }}>Container</div>
                              <div className="small opacity-75" style={{ fontSize: '0.75rem' }}>{t.container}</div>
                           </div>
                        </div>
                     </div>
                   ))}
                 </div>
               </div>
               <div className="p-4 bg-light-subtle">
                 <p className="text-secondary small mb-3">
                   Our tonal system maps to standard Material 3 roles, ensuring consistent contrast and a professional Google-inspired palette.
                 </p>
                 <Scribble text="Accessible pairings!" arrow="left" />
               </div>
            </div>

            <div className="mt-4">
              <h6 className="text-uppercase fw-bold text-muted small mb-3" style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}>Usage Example</h6>
              <CodeBlock code={colorUsageCode} />
            </div>
          </section>
        </div>

        {/* TOC */}
        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Navigation</div>
            <ul className="nav flex-column gap-2 fw-medium small">
              <li className="nav-item"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#tonal-system">TONAL SYSTEM</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <style jsx>{`
        .hover-primary:hover { color: #1a73e8 !important; }
        .transition-all { transition: all 0.2s ease-in-out; }
      `}</style>
    </div>
  );
}
