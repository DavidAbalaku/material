'use client';

import { useState } from 'react';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const alertWithTitleCode = `<div class="modal fade" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-sm">
    <div class="modal-content shadow">
      <div class="modal-header border-0 pb-0">
        <h5 class="modal-title">Get this party started?</h5>
      </div>
      <div class="modal-body text-muted">
        <p class="mb-0">Turn up the jams and have a good time.</p>
      </div>
      <div class="modal-footer border-0 pt-0 justify-content-end">
        <button class="btn btn-flat-primary" type="button" data-bs-dismiss="modal">Decline</button>
        <button class="btn btn-flat-primary text-primary" type="button">Accept</button>
      </div>
    </div>
  </div>
</div>`;

const triggerCode = `<!-- Button that launches a dialog -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myDialog">
  Open Dialog
</button>

<div class="modal fade" id="myDialog" tabindex="-1">
  ...
</div>`;

export default function Dialogs() {
  const [activeDialog, setActiveDialog] = useState<string | null>(null);

  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <div className="mb-5 pb-3">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#1a73e8 !important' }}>Dialogs</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted opacity-75 mb-0" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                 Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
              </p>
              <Scribble text="Critical Moments!" arrow="left" />
            </div>
          </div>

          <div id="alerts" className="mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="h4 fw-light mb-0 text-dark">Interactive Alerts</h2>
              <Scribble text="Try launching one!" arrow="left" className="d-none d-md-flex" />
            </div>
            
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 d-flex flex-column align-items-center justify-content-center border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                <button 
                  className="btn btn-primary px-4 rounded-pill shadow-sm py-2 d-flex align-items-center gap-2"
                  onClick={() => setActiveDialog('demo')}
                >
                  <i className="material-icons">launch</i>
                  Launch Live Dialog
                </button>

                {activeDialog === 'demo' && (
                  <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
                    <div className="modal-content shadow-lg border-0 rounded-4 overflow-hidden bg-white animate__animated animate__zoomIn" style={{ maxWidth: '320px' }}>
                      <div className="modal-header border-0 pb-0 pt-4 px-4">
                        <h5 className="modal-title fw-bold" style={{ color: '#0f172a' }}>Use location service?</h5>
                      </div>
                      <div className="modal-body text-secondary px-4 py-3 small">
                        Let Google help apps determine location. This means sending anonymous location data to Google.
                      </div>
                      <div className="modal-footer border-0 pt-0 pb-3 px-3 justify-content-end gap-1">
                        <button className="btn text-secondary fw-bold text-uppercase px-3" onClick={() => setActiveDialog(null)}>DISAGREE</button>
                        <button className="btn text-primary fw-bold text-uppercase px-3" onClick={() => setActiveDialog(null)}>AGREE</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">Dialogs use the standard <strong>Bootstrap 5 Modal</strong> API with enhanced Material 3 elevations and typography.</p>
                <Scribble text="M3 Elevation!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={alertWithTitleCode} language="HTML" />
          </div>

          <div id="usage" className="mb-5">
            <h2 className="h4 fw-light mb-4 text-dark">Trigger Usage</h2>
            <p className="text-muted small mb-4">Easily trigger any dialog using standard data attributes.</p>
            <CodeBlock code={triggerCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Navigation</div>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#alerts">INTERACTIVE ALERTS</a></li>
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#usage">TRIGGER USAGE</a></li>
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
