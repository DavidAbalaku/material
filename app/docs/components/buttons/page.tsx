'use client';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const m3ButtonsCode = `<!-- M3 Filled -->
<button class="btn btn-primary rounded-pill px-4" type="button">Filled</button>

<!-- M3 Tonal -->
<button class="btn btn-tonal rounded-pill px-4" type="button">Tonal</button>

<!-- M3 Outlined -->
<button class="btn btn-outline-primary rounded-pill px-4" type="button">Outlined</button>

<!-- M3 Text -->
<button class="btn btn-link text-primary fw-bold text-decoration-none" type="button">Text</button>`;

export default function Buttons() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          {/* Header Section - Modern Light Typography */}
          <div className="mb-5 pb-3">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#1a73e8 !important' }}>Buttons</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted opacity-75 mb-0" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                Buttons allow users to take actions, and make choices, with a single tap. Material 3 buttons are categorized by their emphasis and role.
              </p>
              <Scribble text="Highly interactive!" arrow="left" />
            </div>
          </div>

          {/* ────── SECTION: M3 VARIANTS ────── */}
          <section id="m3-variants" className="mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="h4 fw-light mb-0 text-dark">Material 3 Variants</h2>
              <Scribble text="M3 Common Scales" arrow="left" className="d-none d-md-flex" />
            </div>

            {/* DEMO CARD */}
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0" style={{ backgroundColor: '#ffffff' }}>
               <div className="p-5 d-flex gap-3 flex-wrap align-items-center justify-content-center border-bottom bg-white">
                 <button className="btn btn-primary px-4" type="button">Filled</button>
                 <button className="btn btn-tonal px-4" type="button">Tonal</button>
                 <button className="btn btn-outline-primary px-4" type="button">Outlined</button>
                 <button className="btn btn-link text-primary fw-bold text-decoration-none px-3" type="button">Text</button>
               </div>
               
               <div className="p-4 bg-light-subtle">
                 <p className="text-secondary small mb-3">
                   Standard Material buttons are 40px in height. They use a <strong>pill shape</strong> and a 500-weight label.
                 </p>
                 <Scribble text="40px height standard!" arrow="left" />
               </div>
            </div>

            {/* CODE BLOCK */}
            <div className="mt-4">
              <h6 className="text-uppercase fw-bold text-muted small mb-3" style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}>HTML Implementation</h6>
              <CodeBlock code={m3ButtonsCode} />
            </div>
          </section>

          {/* ────── SECTION: FABs ────── */}
          <section id="fabs" className="mb-5">
            <h2 className="h4 fw-light mb-4 text-dark">Floating Action Buttons</h2>

            <div className="card shadow-none border rounded-4 overflow-hidden">
               <div className="bg-white p-5 d-flex gap-4 flex-wrap align-items-center justify-content-center border-bottom">
                 <button className="btn btn-fab shadow-sm">
                    <i className="material-icons">add</i>
                 </button>
                 <button className="btn btn-fab btn-fab-extended shadow-sm">
                    <i className="material-icons">edit</i>
                    <span className="fw-medium">Compose</span>
                 </button>
               </div>
               <div className="p-4 bg-light-subtle">
                 <p className="text-secondary small mb-2">
                    M3 FABs use a large rounded corner (16px) instead of a circle. They are now fully responsive and scale appropriately on smaller screens.
                 </p>
                 <Scribble text="Responsive scaling!" arrow="left" />
               </div>
            </div>
          </section>
        </div>

        {/* TOC */}
        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Navigation</div>
            <ul className="nav flex-column gap-2 fw-medium small">
              <li className="nav-item"><a className="nav-link p-0 text-secondary hover-primary" href="#m3-variants">M3 VARIANTS</a></li>
              <li className="nav-item"><a className="nav-link p-0 text-secondary hover-primary" href="#fabs">FABS</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <style jsx>{`
        .hover-primary:hover { color: #1a73e8 !important; }
      `}</style>
    </div>
  );
}
