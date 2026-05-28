'use client';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const themeCode = `// 1. Set your custom theme variables
$primary: #152d61; // Rence Blue
$secondary: #5f6368; // Rence Gray
$accent: #f4b400; // Material Gold

// 2. Import Rence Material (which imports Bootstrap)
@import "rence-material/scss/material";`;

const cssVarCode = `:root {
  --rm-primary: #152d61;
  --rm-secondary: #5f6368;
  --rm-surface: #ffffff;
  --rm-on-surface: #202124;
}`;

export default function Theming() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <div className="mb-5 pb-3">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#152d61 !important' }}>Theming</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted opacity-75 mb-0" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                 Learn how to customize the theme to match your brand identity using the Sass variables or CSS custom properties.
              </p>
              <Scribble text="Your Brand, Our Tech!" arrow="left" />
            </div>
          </div>

          <div id="sass" className="mb-5 position-relative">
             <h2 className="h4 fw-light mb-4 text-dark">Sass variables</h2>
             <CodeBlock code={themeCode} language="SCSS" />
             <div className="p-4 border border-top-0 bg-light-subtle">
               <p className="text-muted small mb-0">
                 Customizing Rence Material is easy and powerful. Use the Sass variable system to override primary and secondary colors at compile time.
               </p>
             </div>
          </div>

          <div id="live-preview" className="mb-5 position-relative">
             <div className="d-flex align-items-center gap-3 mb-4">
                <h2 className="h4 fw-light mb-0 text-dark">Visualizing your theme</h2>
                <Scribble text="Core Palette" arrow="left" className="d-none d-md-flex" />
             </div>
             
             <div className="card shadow-none border rounded-4 overflow-hidden">
                <div className="p-4 bg-white d-flex gap-4 flex-wrap">
                   {[
                     { name: 'Primary', hex: '#152d61' },
                     { name: 'Secondary', hex: '#5f6368' },
                     { name: 'Accent', hex: '#f4b400' },
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

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #152d61', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Navigation</div>
            <ul className="nav flex-column gap-2 fw-medium small">
              <li className="nav-item"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#sass">SASS VARIABLES</a></li>
              <li className="nav-item"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#live-preview">VISUALIZER</a></li>
              <li className="nav-item"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#css-props">CSS VARIABLES</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <style jsx>{`
        .hover-primary:hover { color: #152d61 !important; }
        .transition-all { transition: all 0.2s ease-in-out; }
      `}</style>
    </div>
  );
}
