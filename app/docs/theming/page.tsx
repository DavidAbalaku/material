'use client';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const themeCode = `// 1. Set your custom theme variables
$primary: #004d40;
$primary-light: #00bfa5;
$accent: #ffab00;

// 2. Import Rence Material (which imports Bootstrap)
@import "rence-material/scss/material";`;

const cssVarCode = `:root {
  --rm-primary: #004d40;
  --rm-secondary: #00bfa5;
  --rm-surface: #ffffff;
  --rm-on-surface: #0f172a;
}`;

export default function Theming() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <div className="mb-4">
            <h1 className="mb-3 fw-light" style={{ color: '#1a73e8', fontSize: 'clamp(1.8rem,4vw,2.5rem)' }}>Theming</h1>
            <div className="d-flex flex-wrap align-items-center gap-3">
              <p className="text-muted mb-0">Learn how to customize the theme to match your brand identity.</p>
              <Scribble text="Customize in a few lines!" arrow="left" />
            </div>
          </div>

          {/* ── SCSS VARIABLES ── */}
          <div id="sass" className="mb-5 position-relative">
             <h2 className="h4 fw-light mb-4 text-dark">Sass variables</h2>
             
             {/* 1. DEMO/PREVIEW (Since it's code-only, we just show the code first) */}
             <CodeBlock code={themeCode} language="SCSS" />

             {/* 2. DESCRIPTION */}
             <div className="p-4 border border-top-0 bg-light-subtle">
               <p className="text-muted small mb-0">
                 Customizing Rence Material is easy and powerful. Use the Sass variable system to override primary and secondary colors at compile time.
               </p>
             </div>
          </div>

          {/* ── LIVE PREVIEW ── */}
          <div id="live-preview" className="mb-5 position-relative">
             <div className="d-flex align-items-center gap-3 mb-4">
                <h2 className="h4 fw-light mb-0 text-dark">Visualizing your theme</h2>
                <Scribble text="See them live!" arrow="left" className="d-none d-md-flex" />
             </div>
             
             <div className="card shadow-none border rounded-4 overflow-hidden">
                <div className="p-4 bg-white d-flex gap-4 flex-wrap">
                   {[
                     { name: 'Primary', hex: '#004d40' },
                     { name: 'Secondary', hex: '#00bfa5' },
                     { name: 'Accent', hex: '#ffab00' },
                   ].map(c => (
                     <div key={c.name} className="d-flex align-items-center gap-2">
                        <div style={{ width: 24, height: 24, borderRadius: '6px', background: c.hex, border: '1px solid rgba(0,0,0,0.1)' }}></div>
                        <span className="small fw-medium text-dark">{c.name}</span>
                        <code className="small text-muted" style={{ fontSize: '0.7rem' }}>{c.hex}</code>
                     </div>
                   ))}
                </div>
                <div className="p-4 bg-light-subtle border-top">
                   <p className="text-muted small mb-0">Change these variables and the entire UI will automatically re-shade everything from alerts to button state layers.</p>
                </div>
             </div>
          </div>

          {/* ── CSS PROPERTIES ── */}
          <div id="css-props" className="mb-5 position-relative">
             <div className="d-flex align-items-center gap-3 mb-4">
                <h2 className="h4 fw-light mb-0 text-dark">CSS Custom Properties</h2>
                <Scribble text="Runtime flexibility!" arrow="left" className="d-none d-lg-flex" />
             </div>
             <CodeBlock code={cssVarCode} language="CSS" />
             <div className="p-4 border border-top-0 bg-light-subtle">
               <p className="text-muted small mb-0">
                 Native CSS variables are also available for runtime customization without recompiling Sass.
               </p>
             </div>
          </div>
        </div>

        {/* TOC */}
        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Contents</div>
            <ul className="nav flex-column gap-2 fw-medium small">
              <li className="nav-item"><a className="nav-link p-0 text-secondary hover-primary" href="#sass">SASS VARIABLES</a></li>
              <li className="nav-item"><a className="nav-link p-0 text-secondary hover-primary" href="#live-preview">VISUALIZER</a></li>
              <li className="nav-item"><a className="nav-link p-0 text-secondary hover-primary" href="#css-props">CSS VARIABLES</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <style jsx>{`
        .hover-primary:hover { color: #1a73e8 !important; }
      `}</style>
    </div>
  );
}
