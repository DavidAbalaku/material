'use client';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

export default function Installation() {
  const installCode = `npm install bootstrap sass`;
  const importCode = `@use "lib/material/scss/material-core";`;

  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          {/* Header Section */}
          <div className="mb-5 pb-3">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#152d61 !important' }}>Installation</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted opacity-75 mb-0" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                 Rence Material is built for modern workflows. Follow these steps to integrate the framework into your existing Sass-based project.
              </p>
              <Scribble text="Get up & running!" arrow="left" />
            </div>
          </div>

          {/* ────── STEP 1: NPM ────── */}
          <section id="npm-install" className="mb-5 position-relative">
            <div className="d-flex align-items-center gap-3 mb-4">
               <h2 className="h4 fw-light mb-0 text-dark">1. Install Dependencies</h2>
               <Scribble text="Core requirements" arrow="left" className="d-none d-md-flex" />
            </div>
            
            <p className="text-muted mb-4">First, ensure you have Bootstrap and Sass installed in your project.</p>
            <CodeBlock code={installCode} language="Bash" />
          </section>

          {/* ────── STEP 2: IMPORT ────── */}
          <section id="import-styles" className="mb-5 position-relative">
             <div className="d-flex align-items-center gap-3 mb-4">
                <h2 className="h4 fw-light mb-0 text-dark">2. Import Styles</h2>
                <Scribble text="Point to the core" arrow="left" className="d-none d-md-flex" />
             </div>
             
             <p className="text-muted mb-4">Import the core Material engine in your main SCSS file. This will automatically override Bootstrap defaults with the Rence Material identity.</p>
             <CodeBlock code={importCode} language="SCSS" />
          </section>
        </div>

        {/* TOC */}
        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #152d61', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Steps</div>
            <ul className="nav flex-column gap-2 fw-medium small">
              <li className="nav-item"><a className="nav-link p-0 text-secondary hover-primary" href="#npm-install">INSTALLATION</a></li>
              <li className="nav-item"><a className="nav-link p-0 text-secondary hover-primary" href="#import-styles">IMPORTING</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <style jsx>{`
        .hover-primary:hover { color: #152d61 !important; }
      `}</style>
    </div>
  );
}
