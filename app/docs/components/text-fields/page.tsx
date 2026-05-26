'use client';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const textFieldCode = `<!-- Standard text field (Filled style) -->
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="field1" placeholder="First name">
  <label for="field1">First name</label>
</div>`;

const outlinedFieldCode = `<!-- Outlined text field -->
<div class="mb-3">
  <label for="out1" class="form-label small fw-bold text-muted">Label</label>
  <input type="text" class="form-control border rounded-2" id="out1" placeholder="Enter value">
</div>`;

export default function TextFields() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <div className="mb-5 pb-3">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#1a73e8 !important' }}>Text Fields</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted opacity-75 mb-0" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                 Text fields let users enter and edit text. Rence Material utilizes modern Material 3 states and floating labels.
              </p>
              <Scribble text="User Input!" arrow="left" />
            </div>
          </div>

          <div id="filled" className="mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="h4 fw-light mb-0 text-dark">Filled style</h2>
              <Scribble text="Standard Floating" arrow="left" className="d-none d-md-flex" />
            </div>
            
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 d-flex flex-column gap-3 border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                 <div className="mx-auto w-100" style={{ maxWidth: '400px' }}>
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control bg-white border-0 shadow-sm" id="demo-field1" placeholder="First name" defaultValue="John Doe" />
                      <label htmlFor="demo-field1">Full Name</label>
                    </div>
                    <div className="form-floating">
                      <input type="email" className="form-control bg-white border-0 shadow-sm" id="demo-field2" placeholder="name@example.com" />
                      <label htmlFor="demo-field2">Email Address</label>
                    </div>
                 </div>
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">Use <code>.form-floating</code> for the modern Material filled look. Requires a placeholder to function.</p>
                <Scribble text="Interactive labels!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={textFieldCode} language="HTML" />
          </div>

          <div id="outlined" className="mb-5">
            <h2 className="h4 fw-light mb-4 text-dark">Outlined variant</h2>
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 d-flex flex-column gap-3 border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                 <div className="mx-auto w-100" style={{ maxWidth: '400px' }}>
                    <div className="mb-0">
                      <label htmlFor="out-demo" className="form-label small fw-bold text-muted ms-1">Username</label>
                      <input type="text" className="form-control border shadow-sm bg-white rounded-3 px-3 py-2" id="out-demo" placeholder="@username" />
                    </div>
                 </div>
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">Standard <code>.form-control</code> with a label above provides a persistent, clear input field.</p>
                <Scribble text="Clean Borders!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={outlinedFieldCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Navigation</div>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#filled">FILLED STYLE</a></li>
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#outlined">OUTLINED</a></li>
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
