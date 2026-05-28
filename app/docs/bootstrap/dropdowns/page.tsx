'use client';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const basicDropdownCode = `<!-- Single button dropdown -->
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu shadow-lg border-0 rounded-4">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>`;

export default function Dropdowns() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <div className="mb-5 pb-3">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#152d61 !important' }}>Dropdowns</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted opacity-75 mb-0" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                 Toggle contextual overlays for displaying lists of links. Rence Material transforms standard menus into Material 3 surfaces.
              </p>
              <Scribble text="Contextual Lists!" arrow="left" />
            </div>
          </div>

          <div id="single-button" className="mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="h4 fw-light mb-0 text-dark">Single button</h2>
              <Scribble text="Click to reveal" arrow="left" className="d-none d-md-flex" />
            </div>
            
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 d-flex gap-3 justify-content-center border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                <div className="dropdown">
                  <button className="btn btn-primary dropdown-toggle rounded-pill px-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Primary Dropdown
                  </button>
                  <ul className="dropdown-menu shadow-lg border-0 rounded-4 mt-2">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button className="btn btn-outline-primary dropdown-toggle rounded-pill px-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Outline Menu
                  </button>
                  <ul className="dropdown-menu shadow-lg border-0 rounded-4 mt-2">
                    <li><a className="dropdown-item" href="#">Option 1</a></li>
                    <li><a className="dropdown-item" href="#">Option 2</a></li>
                  </ul>
                </div>
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">Dropdown menus feature high elevation shadows and rounded corners by default.</p>
                <Scribble text="Material Elevation!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={basicDropdownCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #152d61', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Navigation</div>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#single-button">SINGLE BUTTON</a></li>
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
