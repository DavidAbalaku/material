'use client';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const stepperCode = `<!-- Horizontal Stepper -->
<div class="stepper-horizontal d-flex justify-content-between mb-5">
  <div class="step active d-flex flex-column align-items-center">
    <div class="step-circle bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style="width:32px;height:32px;">1</div>
    <span class="step-text small mt-2 fw-medium">Order Placed</span>
  </div>
  <div class="step-line flex-grow-1 mx-3" style="border-bottom: 2px solid #e2e8f0; margin-top: 16px;"></div>
  <!-- ... -->
</div>`;

const vertStepperCode = `<!-- Vertical Stepper -->
<div class="stepper-vertical">
  <div class="step d-flex gap-3 mb-1">
    <div class="d-flex flex-column align-items-center">
      <div class="rounded-circle bg-primary text-white p-1"><i class="material-icons" style="font-size:16px;">check</i></div>
      <div class="flex-grow-1 border-start border-2 ms-0 mt-1 mb-1"></div>
    </div>
    <div class="pb-4">
      <h6 class="mb-1 fw-bold">Inventory Check</h6>
      <p class="text-muted small">Completed</p>
    </div>
  </div>
</div>`;

export default function Steppers() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <div className="mb-5 pb-3">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#1a73e8 !important' }}>Steppers</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted opacity-75 mb-0" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                 Steppers convey progress through numbered steps. They guide users through complex workflows and multi-step processes.
              </p>
              <Scribble text="Guided Progress!" arrow="left" />
            </div>
          </div>

          <div id="horizontal" className="mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="h4 fw-light mb-0 text-dark">Horizontal Stepper</h2>
              <Scribble text="Checkout Flow" arrow="left" className="d-none d-md-flex" />
            </div>
            
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 d-flex justify-content-center border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                 <div className="d-flex justify-content-between align-items-center w-100 mx-auto" style={{ maxWidth: '400px' }}>
                   {[1,2,3].map(n => (
                     <div key={n} className="d-flex align-items-center flex-grow-1">
                       <div className="d-flex flex-column align-items-center" style={{ zIndex: 1 }}>
                         <div className={`rounded-circle d-flex align-items-center justify-content-center fw-bold ${n === 1 ? 'bg-primary text-white shadow-sm' : 'bg-white text-muted border'}`} style={{ width: '32px', height: '32px', fontSize: '13px' }}>
                           {n === 1 ? <i className="material-icons" style={{ fontSize: '18px' }}>check</i> : n}
                         </div>
                         <span className={`small mt-2 ${n === 1 ? 'fw-bold text-dark' : 'text-muted'}`} style={{ whiteSpace: 'nowrap', fontSize: '0.75rem' }}>Step Name</span>
                       </div>
                       {n < 3 && <div className="flex-grow-1 mx-2" style={{ height: '2px', background: '#cbd5e1', marginTop: '-20px' }}></div>}
                     </div>
                   ))}
                 </div>
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">Ideal for linear tasks like registration or checkout. Active steps are emphasized with the primary color.</p>
                <Scribble text="Progress Indicator!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={stepperCode} language="HTML" />
          </div>

          <div id="vertical" className="mb-5">
            <h2 className="h4 fw-light mb-4 text-dark">Vertical Stepper</h2>
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 d-flex justify-content-center border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                 <div className="mx-auto" style={{ maxWidth: '300px' }}>
                   {[
                     { label: 'Select Campaign', status: 'done', desc: 'Summer Sale selected' },
                     { label: 'Ad Group', status: 'active', desc: 'Create your audience' },
                     { label: 'Finish', status: 'pending', desc: '' }
                   ].map((s, i) => (
                     <div key={i} className="d-flex gap-3">
                       <div className="d-flex flex-column align-items-center">
                         <div className={`rounded-circle d-flex align-items-center justify-content-center ${s.status === 'done' || s.status === 'active' ? 'bg-primary text-white shadow-sm' : 'bg-white border text-muted'}`} style={{ width: '28px', height: '28px' }}>
                           {s.status === 'done' ? <i className="material-icons" style={{ fontSize: '16px' }}>check</i> : <span style={{ fontSize: '12px' }}>{i+1}</span>}
                         </div>
                         {i < 2 && <div className="flex-grow-1 border-start border-2 my-1" style={{ borderColor: '#cbd5e1 !important' }}></div>}
                       </div>
                       <div className={`${i < 2 ? 'pb-4' : ''}`}>
                         <h6 className={`mb-1 ${s.status === 'active' ? 'fw-bold text-dark' : 'fw-medium text-secondary'}`}>{s.label}</h6>
                         {s.desc && <p className="text-muted small mb-0" style={{ lineHeight: 1.4 }}>{s.desc}</p>}
                       </div>
                     </div>
                   ))}
                 </div>
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">Vertical steppers are perfect for mobile views and narrow layouts.</p>
                <Scribble text="Mobile Sequence!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={vertStepperCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Navigation</div>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#horizontal">HORIZONTAL</a></li>
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#vertical">VERTICAL</a></li>
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
