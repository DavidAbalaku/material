'use client';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const shadowLevels = [0,1,2,4,6,8,12,16,24];

export default function Elevation() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <div className="mb-5 pb-3">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#1a73e8 !important' }}>Elevation</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted opacity-75 mb-0" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                 Material Design uses elevation to communicate hierarchy. Higher elevation levels represent elements that are closer to the user.
              </p>
              <Scribble text="Depth & Shadow!" arrow="left" />
            </div>
          </div>

          <div id="shadows" className="mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="h4 fw-light mb-0 text-dark">Shadow Levels</h2>
              <Scribble text="z-axis hierarchy" arrow="left" className="d-none d-md-flex" />
            </div>
            
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                <div className="row g-4">
                  {shadowLevels.map(dp => (
                    <div key={dp} className="col-12 col-sm-6 col-md-4">
                      <div
                        className="bg-white rounded-4 p-4 d-flex align-items-center justify-content-between transition-all"
                        style={{
                          boxShadow: dp === 0 ? 'none' :
                            dp <= 2  ? `0 ${dp}px ${dp*2+2}px rgba(0,0,0,0.08)` :
                            dp <= 8  ? `0 ${dp}px ${dp*3}px rgba(0,0,0,0.12)` :
                                       `0 ${dp}px ${dp*4}px rgba(0,0,0,0.16)`,
                          border: dp === 0 ? '1px solid #e2e8f0' : 'none',
                        }}
                      >
                        <div>
                          <div className="small text-muted fw-bold mb-1" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>ELEVATION</div>
                          <span className="fw-bold h5 mb-0" style={{ color: '#1e293b' }}>{dp}dp</span>
                        </div>
                        <span className="badge rounded-pill bg-light text-secondary border px-2 py-1" style={{ fontSize: '0.7rem' }}>{dp === 0 ? 'Flat' : `Level ${dp/4 || dp}`}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">Each elevation level corresponds to a specific shadow intensity defined in the Material 3 spec.</p>
                <Scribble text="M3 Elevation Scales!" arrow="left" />
              </div>
            </div>
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Navigation</div>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#shadows">SHADOW LEVELS</a></li>
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
