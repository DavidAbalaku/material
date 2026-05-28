'use client';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const linearCode = `<!-- Linear progress bar -->
<div class="progress mb-3" style="height: 4px;">
  <div class="progress-bar bg-primary" role="progressbar" style="width: 60%;"></div>
</div>

<!-- Indeterminate (animated) -->
<div class="progress mb-3" style="height: 4px;">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary w-75" role="progressbar"></div>
</div>`;

const circularCode = `<!-- Circular progress -->
<div class="spinner-border text-primary" role="status" style="width:3rem;height:3rem;border-width:3px;">
  <span class="visually-hidden">Loading...</span>
</div>`;

export default function Progress() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <div className="mb-5 pb-3">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#152d61 !important' }}>Progress</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted opacity-75 mb-0" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                 Progress indicators express an unspecified wait time or display the length of a process.
              </p>
              <Scribble text="Loading States!" arrow="left" />
            </div>
          </div>

          <div id="linear" className="mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="h4 fw-light mb-0 text-dark">Linear Progress</h2>
              <Scribble text="4dp thickness" arrow="left" className="d-none d-md-flex" />
            </div>
            
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                <div className="mx-auto w-100" style={{ maxWidth: '500px' }}>
                  <p className="text-muted small mb-2">Determinate — 60%</p>
                  <div className="progress mb-4" style={{ height: '4px', backgroundColor: '#e2e8f0' }}>
                    <div className="progress-bar" role="progressbar" style={{ width: '60%', backgroundColor: '#152d61' }}></div>
                  </div>
                  <p className="text-muted small mb-2">Indeterminate</p>
                  <div className="progress" style={{ height: '4px', backgroundColor: '#e2e8f0' }}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated w-75" role="progressbar" style={{ backgroundColor: '#152d61' }}></div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">Built on Bootstrap's <code>.progress</code>. Use 4px height for the Material 3 standard.</p>
                <Scribble text="Fluid loading!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={linearCode} language="HTML" />
          </div>

          <div id="circular" className="mb-5">
            <h2 className="h4 fw-light mb-4 text-dark">Circular Progress</h2>
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 d-flex align-items-center justify-content-center gap-4 border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                <div className="spinner-border" role="status" style={{ width: '3rem', height: '3rem', borderWidth: '3px', color: '#152d61' }}>
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border" role="status" style={{ width: '2rem', height: '2rem', borderWidth: '2.5px', color: '#152d61' }}>
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border spinner-border-sm" role="status" style={{ color: '#152d61' }}>
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">Use <code>.spinner-border</code> for circular progress. Set thinner border widths for a modern look.</p>
                <Scribble text="Google Style Spinner!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={circularCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #152d61', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Navigation</div>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#linear">LINEAR</a></li>
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#circular">CIRCULAR</a></li>
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
