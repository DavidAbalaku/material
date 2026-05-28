'use client';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const panelCode = `<!-- Material Expansion Panel -->
<div class="expansion-panel bg-white shadow-sm border rounded-4 mb-3 overflow-hidden">
  <div class="expansion-panel-header px-4 py-3 d-flex justify-content-between align-items-center cursor-pointer" data-bs-toggle="collapse" data-bs-target="#panel1">
    <div>
      <h6 class="mb-0 fw-bold text-dark">Personal Info</h6>
      <small class="text-muted">Manage your identity and contact data</small>
    </div>
    <i class="material-icons">expand_more</i>
  </div>
  <div id="panel1" class="collapse">
    <div class="expansion-panel-body px-4 py-4 border-top">
      Content goes here...
    </div>
  </div>
</div>`;

export default function ExpansionPanels() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <div className="mb-5 pb-3">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#152d61 !important' }}>Expansion Panels</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted opacity-75 mb-0" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                 Expansion panels allow lightweight editing and creation flows. They summary key information when collapsed and provide detailed controls when expanded.
              </p>
              <Scribble text="Collapsible hierarchy!" arrow="left" />
            </div>
          </div>

          <div id="basic" className="mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="h4 fw-light mb-0 text-dark">Standard Panel</h2>
              <Scribble text="Clean summaries" arrow="left" className="d-none d-md-flex" />
            </div>
            
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                 <div className="mx-auto" style={{ maxWidth: '600px' }}>
                    <div className="bg-white shadow-sm border rounded-4 mb-3 overflow-hidden">
                      <div className="px-4 py-3 d-flex justify-content-between align-items-center" style={{ cursor: 'pointer' }} data-bs-toggle="collapse" data-bs-target="#exp1">
                        <div>
                           <h6 className="mb-0 fw-bold text-dark">General Settings</h6>
                           <small className="text-muted small">Customize your system behavior</small>
                        </div>
                        <i className="material-icons text-muted">expand_more</i>
                      </div>
                      <div id="exp1" className="collapse show border-top">
                        <div className="px-4 py-4">
                          <div className="row g-3">
                            <div className="col-md-6"><input type="text" className="form-control bg-light border-0" placeholder="User Name" /></div>
                            <div className="col-md-6"><select className="form-select bg-light border-0"><option>Language</option></select></div>
                          </div>
                          <div className="mt-4 d-flex justify-content-end gap-2">
                            <button className="btn text-muted fw-bold small">CANCEL</button>
                            <button className="btn btn-primary px-4 rounded-pill">SAVE</button>
                          </div>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">
                  Use <code>.expansion-panel</code> with Bootstrap's <code>.collapse</code> to create accordion-like workflows.
                </p>
                <Scribble text="Animated Transitions!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={panelCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #152d61', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Navigation</div>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary" href="#basic">STANDARD PANEL</a></li>
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
