'use client';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const m3CardsCode = `<!-- M3 Elevated Card -->
<div class="card card-elevated shadow-sm border-0 rounded-4">
  <div class="card-body">Elevated Card</div>
</div>

<!-- M3 Filled Card -->
<div class="card border-0 rounded-4" style="background-color: #f3f6f5;">
  <div class="card-body">Filled Card</div>
</div>

<!-- M3 Outlined Card -->
<div class="card border rounded-4 bg-white">
  <div class="card-body">Outlined Card</div>
</div>`;

export default function Cards() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <div className="mb-5 pb-3">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#1a73e8 !important' }}>Cards</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted opacity-75 mb-0" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                 Cards contain content and actions about a single subject. M3 introduces three types of cards: Elevated, Filled, and Outlined.
              </p>
              <Scribble text="Surface containers!" arrow="left" />
            </div>
          </div>

          {/* ── M3 VARIANTS ── */}
          <section id="m3-variants" className="mb-5 pb-4">
            <div className="d-flex align-items-center gap-3 mb-4">
               <h2 className="h4 fw-light mb-0 text-dark">Material 3 Variants</h2>
               <Scribble text="Three core surfaces" arrow="left" className="d-none d-md-flex" />
            </div>
            
            <div className="card shadow-none border rounded-4 overflow-hidden mb-4">
               <div className="bg-white p-5 d-flex gap-4 flex-wrap align-items-center justify-content-center border-bottom">
                 <div className="card card-elevated border-0 rounded-4 overflow-hidden d-flex align-items-center justify-content-center fw-bold text-dark" style={{ width: '180px', height: '100px' }}>Elevated</div>
                 <div className="card border-0 rounded-4 overflow-hidden shadow-none d-flex align-items-center justify-content-center fw-bold text-dark" style={{ width: '180px', height: '100px', backgroundColor: '#f8f9fa' }}>Filled</div>
                 <div className="card border rounded-4 overflow-hidden shadow-none bg-white d-flex align-items-center justify-content-center fw-bold text-dark" style={{ width: '180px', height: '100px' }}>Outlined</div>
               </div>

               <div className="p-4 bg-light-subtle">
                 <p className="text-muted small mb-0">
                   Use <code>.card-elevated</code> for cards that need to stand out. Use <code>.rounded-4</code> (16px) corner signatures.
                 </p>
               </div>
            </div>

            <div className="mt-3 position-relative">
              <Scribble text="Step 1: Define your surface" arrow="down" className="mb-2 ms-4" />
              <CodeBlock code={m3CardsCode} />
            </div>
          </section>

          {/* ── RICH EXAMPLE ── */}
          <section id="rich-example" className="mb-5 pb-4">
            <h2 className="h4 fw-light mb-4 text-dark">Complex Example</h2>
            <div className="card shadow-none border rounded-4 overflow-hidden">
               <div className="bg-white p-5 d-flex justify-content-center border-bottom text-center">
                  <div className="card card-elevated border-0 rounded-4 overflow-hidden shadow-sm" style={{ maxWidth: '340px' }}>
                     <div style={{ height: '160px', background: 'linear-gradient(135deg, #1a73e8, #8ab4f8)' }}></div>
                     <div className="card-body p-4 text-start">
                       <h5 className="fw-bold mb-1">Our Changing Planet</h5>
                       <p className="text-muted small mb-4">Explore the most significant shifts happening across our globe today.</p>
                       <div className="d-flex gap-2">
                          <button className="btn btn-tonal btn-sm rounded-pill px-4">READ</button>
                          <button className="btn btn-link btn-sm text-primary fw-bold text-decoration-none">SAVE</button>
                       </div>
                     </div>
                  </div>
               </div>
               <div className="p-4 bg-light-subtle">
                  <p className="text-muted small mb-3">Combine cards with M3 tonal buttons and pill shapes for a cohesive experience.</p>
                  <Scribble text="Perfect M3 alignment!" arrow="left" />
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
              <li className="nav-item"><a className="nav-link p-0 text-secondary hover-primary" href="#rich-example">COMPLEX EXAMPLE</a></li>
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
