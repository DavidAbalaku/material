'use client';

import { useState } from 'react';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const datePickerCode = `<!-- Native HTML5 Date Picker -->
<div class="mb-4">
  <label class="form-label text-muted small fw-bold">Select Date</label>
  <input type="date" class="form-control" value="2026-05-27">
</div>`;

const customPickerCode = `<!-- Material Design 3 Spec Picker Mockup -->
<button class="btn btn-primary d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#dateModal">
  <i class="material-icons">calendar_today</i> May 27, 2026
</button>`;

export default function Pickers() {
  const [showDemoDialog, setShowDemoDialog] = useState(false);

  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <div className="mb-5 pb-3">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#152d61 !important' }}>Pickers</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted opacity-75 mb-0" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                 Pickers provide a simple way to select a single value from a pre-determined set. They typically appear in a dialog or menu.
              </p>
              <Scribble text="Schedule your life!" arrow="left" />
            </div>
          </div>

          <div id="native" className="mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="h4 fw-light mb-0 text-dark">Native Skinned</h2>
              <Scribble text="Browser Default" arrow="left" className="d-none d-md-flex" />
            </div>
            
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 d-flex justify-content-center border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                 <div className="col-md-7 mx-auto bg-white p-4 shadow-sm border rounded-4">
                   <div className="mb-4">
                     <label className="form-label text-muted small fw-bold mb-2">DATE PICKER</label>
                     <input type="date" className="form-control border-0 bg-light py-2 px-3" defaultValue="2026-05-27" style={{ borderRadius: '12px' }} />
                   </div>
                   <div className="mb-0">
                     <label className="form-label text-muted small fw-bold mb-2">TIME PICKER</label>
                     <input type="time" className="form-control border-0 bg-light py-2 px-3" defaultValue="14:30" style={{ borderRadius: '12px' }} />
                   </div>
                 </div>
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">Rence Material automatically skins native inputs to match the brand identity.</p>
                <Scribble text="Zero Config!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={datePickerCode} language="HTML" />
          </div>

          <div id="material" className="mb-5">
            <h2 className="h4 fw-light mb-4 text-dark">Material Dialog Picker</h2>
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 d-flex flex-column align-items-center gap-3 border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                 <button 
                  className="btn btn-primary px-4 py-2 shadow-sm d-flex align-items-center gap-2 rounded-pill"
                  onClick={() => setShowDemoDialog(!showDemoDialog)}
                 >
                   <i className="material-icons">event</i>
                   <span>{showDemoDialog ? 'Close Dialog' : 'Open Date Dialog'}</span>
                 </button>

                 {showDemoDialog && (
                   <div className="bg-white rounded-4 shadow border p-4 w-100" style={{ maxWidth: '300px' }}>
                     <div className="mb-3">
                       <div className="small text-muted fw-bold mb-1">SELECT DATE</div>
                       <h5 className="text-primary fw-bold mb-0">Wed, May 27, 2026</h5>
                     </div>
                     <div className="small text-muted border-top pt-3 mb-3">Calendar grid would appear here.</div>
                     <div className="d-flex justify-content-end gap-2">
                       <button className="btn btn-sm text-secondary fw-bold" onClick={() => setShowDemoDialog(false)}>CANCEL</button>
                       <button className="btn btn-sm text-primary fw-bold" onClick={() => setShowDemoDialog(false)}>OK</button>
                     </div>
                   </div>
                 )}
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">Click the button above to see the <strong>interactive demo</strong> of how a picker appears.</p>
                <Scribble text="Full Spec Mockup!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={customPickerCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #152d61', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Navigation</div>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#native">NATIVE SKINNED</a></li>
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#material">MATERIAL DIALOG</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <style jsx>{`
        .hover-primary:hover { color: #152d61 !important; }
        .transition-all { transition: all 0.2s ease-in-out; }
        .hover-bg-light:hover { background-color: #f1f5f9; }
        .grid-calendar { display: grid; grid-template-columns: repeat(7, 1fr); justify-items: center; }
      `}</style>
    </div>
  );
}
