'use client';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const checkboxCode = `<!-- Checkbox -->
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="check1" checked>
  <label class="form-check-label" for="check1">Checked</label>
</div>`;

const radioCode = `<!-- Radio buttons -->
<div class="form-check">
  <input class="form-check-input" type="radio" name="demo" id="radio1" checked>
  <label class="form-check-label" for="radio1">Option A</label>
</div>`;

const switchCode = `<!-- Toggle switch -->
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="switch1" checked>
  <label class="form-check-label" for="switch1">On</label>
</div>`;

export default function SelectionControls() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <div className="mb-5 pb-3">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#1a73e8 !important' }}>Selection Controls</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted opacity-75 mb-0" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                 Selection controls allow users to make choices such as selecting options, or switching settings on or off.
              </p>
              <Scribble text="User Preferences!" arrow="left" />
            </div>
          </div>

          {/* ── CHECKBOXES ── */}
          <div id="checkboxes" className="mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="h4 fw-light mb-0 text-dark">Checkboxes</h2>
              <Scribble text="Multi-selection" arrow="left" className="d-none d-md-flex" />
            </div>
            
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 d-flex flex-column gap-3 border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                <div className="form-check">
                  <input className="form-check-input border-secondary shadow-none" type="checkbox" id="demo-check1" defaultChecked />
                  <label className="form-check-label ms-2" htmlFor="demo-check1">Checked</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input border-secondary shadow-none" type="checkbox" id="demo-check2" />
                  <label className="form-check-label ms-2" htmlFor="demo-check2">Unchecked</label>
                </div>
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">Rence Material automatically tints checkboxes with the primary brand color when active.</p>
                <Scribble text="Native Overrides!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={checkboxCode} language="HTML" />
          </div>

          {/* ── SWITCHES ── */}
          <div id="switches" className="mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="h4 fw-light mb-0 text-dark">Switches</h2>
              <Scribble text="Binary Toggles" arrow="left" className="d-none d-md-flex" />
            </div>
            
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 d-flex flex-column gap-3 border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                <div className="form-check form-switch p-0 d-flex align-items-center gap-3">
                  <input className="form-check-input border-secondary shadow-none ms-0" type="checkbox" id="demo-switch1" defaultChecked />
                  <label className="form-check-label" htmlFor="demo-switch1">Enable Notifications</label>
                </div>
                <div className="form-check form-switch p-0 d-flex align-items-center gap-3">
                  <input className="form-check-input border-secondary shadow-none ms-0" type="checkbox" id="demo-switch2" />
                  <label className="form-check-label" htmlFor="demo-switch2">Dark Mode</label>
                </div>
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">Use <code>.form-switch</code> on <code>.form-check</code> for modern Material 3 toggles.</p>
                <Scribble text="Fluid animations!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={switchCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Navigation</div>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#checkboxes">CHECKBOXES</a></li>
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#switches">SWITCHES</a></li>
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
