'use client';

import { useState, useEffect } from 'react';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const snackbarCode = `<!-- Basic snackbar -->
<div class="toast show align-items-center border-0 text-white bg-dark" role="alert">
  <div class="d-flex">
    <div class="toast-body">File archived successfully.</div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
  </div>
</div>`;

export default function Snackbars() {
  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    if (showSnackbar) {
      const timer = setTimeout(() => setShowSnackbar(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSnackbar]);

  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <div className="mb-5 pb-3">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#152d61 !important' }}>Snackbars</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted opacity-75 mb-0" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                 Snackbars provide brief messages about app processes at the bottom of the screen.
              </p>
              <Scribble text="Quick Feedback!" arrow="left" />
            </div>
          </div>

          <div id="interactive" className="mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="h4 fw-light mb-0 text-dark">Live demonstration</h2>
              <Scribble text="Click to trigger!" arrow="left" className="d-none d-md-flex" />
            </div>
            
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 d-flex justify-content-center border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                <button 
                  className="btn btn-primary px-4 rounded-pill shadow-sm py-2"
                  onClick={() => setShowSnackbar(true)}
                >
                  Show Live Snackbar
                </button>

                {showSnackbar && (
                  <div className="snackbar-container" style={{ position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)', zIndex: 9999 }}>
                    <div className="toast show align-items-center border-0 text-white shadow-lg animate__animated animate__fadeInUp" style={{ background: '#1e293b', width: '320px', borderRadius: '12px' }} role="alert">
                      <div className="d-flex">
                        <div className="toast-body small">Message sent successfully!</div>
                        <button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={() => setShowSnackbar(false)}></button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">Click the button above to trigger a <strong>live snackbar</strong>. Material 3 snackbars should auto-dismiss after 4-10 seconds.</p>
                <Scribble text="Real-time feedback!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={snackbarCode} language="HTML" />
          </div>

          <div id="basic" className="mb-5">
            <h2 className="h4 fw-light mb-4 text-dark">Static Structure</h2>
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 d-flex justify-content-center border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                <div className="toast show align-items-center border-0 text-white shadow-lg" style={{ background: '#1e293b', width: '100%', maxWidth: '420px', borderRadius: '12px' }} role="alert">
                  <div className="d-flex">
                    <div className="toast-body small">Connection timed out. Showing limited content.</div>
                    <button type="button" className="btn btn-sm btn-link text-primary text-uppercase fw-bold text-decoration-none ms-3 flex-shrink-0" style={{ letterSpacing: '0.05em' }}>Retry</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #152d61', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Navigation</div>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#interactive">LIVE DEMO</a></li>
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#basic">STATIC STRUCTURE</a></li>
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
