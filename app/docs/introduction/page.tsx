'use client';

import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const precompiledTree = `rence-material/
├── css/
│   ├── rence-material.css
│   ├── rence-material.css.map
│   ├── rence-material.min.css
│   └── rence-material.min.css.map
└── js/
    ├── rence-material.js
    ├── rence-material.js.map
    ├── rence-material.min.js
    └── rence-material.min.js.map`;

const sourceTree = `rence-material/
├── scss/
│   └── material.scss
├── js/
│   └── src/
└── dist/`;

const doctype = `<!DOCTYPE html>
<html lang="en">
  ...
</html>`;

const viewportMeta = `<meta content="initial-scale=1, shrink-to-fit=no, width=device-width" name="viewport">`;

const starterTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta content="initial-scale=1, shrink-to-fit=no, width=device-width" name="viewport">

    <!-- Fonts & Icons -->
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link rel="preconnect" href="https://cdn.jsdelivr.net/" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!-- Rence Material CSS (replaces Bootstrap CSS) -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/davidabalaku/material@main/dist/css/rence-material.min.css">

    <title>Hello, Rence Material</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Bootstrap 5 Bundle JS (includes Popper) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Rence Material JS (Ripple & Material interactions) -->
    <script src="https://cdn.jsdelivr.net/gh/davidabalaku/material@main/dist/js/rence-material.min.js"></script>
  </body>
</html>`;

export default function Introduction() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">

        {/* ── MAIN LEFT COLUMN ── */}
        <div className="col-12 col-xl-9 overflow-hidden">
          <h1 className="mb-3 fw-light" style={{ color: '#1a73e8', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Introduction</h1>
          <p className="text-muted mb-5 lead opacity-75">
            Get started with <strong>Rence Material</strong>, a cross-platform and fully responsive front-end interface based on Google Material Design, built using Bootstrap 5.
          </p>

          {/* CONTENTS */}
          <h2 id="contents" className="fw-light mb-4" style={{ color: '#1a73e8' }}>Contents</h2>

          {/* Precompiled */}
          <div id="precompiled" className="mb-5">
            <h3 className="h5 fw-medium mb-3 text-dark">Precompiled code</h3>
            <p className="text-muted small mb-4">
              The Rence Material <a href="#" className="text-decoration-none fw-bold" style={{ color: '#1a73e8' }}>precompiled code download</a> includes the following compiled CSS and JavaScript:
            </p>
            <CodeBlock code={precompiledTree} language="Structure" />
          </div>

          {/* Source code */}
          <div id="source" className="mb-5">
            <h3 className="h5 fw-medium mb-3 text-dark">Source code</h3>
            <p className="text-muted small mb-4">
              The Rence Material <a href="#" className="text-decoration-none fw-bold" style={{ color: '#1a73e8' }}>source code download</a> includes the source SCSS files and raw modules:
            </p>
            <CodeBlock code={sourceTree} language="Structure" />
          </div>

          {/* Important globals */}
          <h2 id="globals" className="fw-light mb-4 pt-2" style={{ color: '#1a73e8' }}>Important globals</h2>
          
          <div id="box-sizing" className="mb-5">
            <h3 className="h5 fw-medium mb-3 text-dark">Box-sizing</h3>
            <p className="text-muted small">
              We switch the global <code>box-sizing</code> value to <code>border-box</code>.
            </p>
          </div>

          <div id="starter-template" className="mb-5">
            <h2 className="fw-light mb-3 pt-2" style={{ color: '#1a73e8' }}>Starter template</h2>
            <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
              <p className="text-muted mb-0">Use this minimal HTML boilerplate to start your project with Rence Material.</p>
              <Scribble text="Copy & Paste to start!" arrow="left" />
            </div>
            <CodeBlock code={starterTemplate} language="HTML Template" />
          </div>
        </div>

        {/* ── TOC (STICKY) ── */}
        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Contents</div>
            <ul className="nav flex-column gap-2 fw-medium small">
               <li className="nav-item"><a className="nav-link p-0 text-secondary" href="#contents">CONTENTS</a></li>
               <li className="nav-item"><a className="nav-link p-0 text-secondary" href="#globals">GLOBALS</a></li>
               <li className="nav-item"><a className="nav-link p-0 text-secondary" href="#starter-template">STARTER TEMPLATE</a></li>
            </ul>
          </nav>
        </div>

      </div>
    </div>
  );
}
