'use client';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const alertExampleCode = `<!-- Contextual alert variants -->
<div class="alert alert-primary shadow-sm" role="alert">A simple primary alert!</div>
<div class="alert alert-success shadow-sm" role="alert">A simple success alert!</div>
<div class="alert alert-danger shadow-sm" role="alert">A simple danger alert!</div>`;

const alertDismissCode = `<!-- Dismissible alert (requires Bootstrap JS) -->
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Heads up!</strong> Check these fields.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

const variants = [
  { cls: 'alert-primary', label: 'primary' },
  { cls: 'alert-success', label: 'success' },
  { cls: 'alert-danger', label: 'danger' },
];

export default function Alerts() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <div className="mb-5">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#152d61 !important' }}>Alerts</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted opacity-75 mb-0" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                Provide contextual feedback messages for typical user actions with flexible alert messages.
              </p>
              <Scribble text="Contextual feedback!" arrow="left" />
            </div>
          </div>

          <div id="examples" className="mb-5 position-relative">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="h4 fw-light mb-0 text-dark">Examples</h2>
              <Scribble text="M3 Soft Colors" arrow="left" className="d-none d-lg-flex" />
            </div>

            {/* 1. DEMO */}
            <div className="bg-white p-5 rounded-4 shadow-sm border border-bottom-0">
               <div className="mx-auto" style={{ maxWidth: '600px' }}>
                {variants.map(v => (
                  <div key={v.cls} className={`alert ${v.cls} mb-3 shadow-none border`} role="alert">
                    <span className="material-icons align-middle me-2" style={{ fontSize: '20px' }}>info_outline</span>
                    A simple <strong>{v.label}</strong> alert — check it out!
                  </div>
                ))}
               </div>
            </div>

            {/* 2. DESCRIPTION */}
            <div className="p-4 border border-top-0 bg-light-subtle mb-0">
              <p className="text-muted small mb-0" style={{ lineHeight: 1.6 }}>
                Alerts provide contextual feedback for user actions. Use classes like <code>.alert-primary</code> or <code>.alert-success</code> to define the tone.
              </p>
            </div>

            {/* 3. CODE */}
            <CodeBlock code={alertExampleCode} language="HTML" />
          </div>

          <div id="dismissing" className="mb-5 position-relative">
             <div className="d-flex align-items-center gap-3 mb-4">
               <h2 className="h4 fw-light mb-0 text-dark">Dismissing</h2>
               <Scribble text="Requires Bundle JS" arrow="left" className="d-none d-lg-flex" />
             </div>

            {/* 1. DEMO */}
            <div className="bg-white p-5 rounded-4 shadow-sm border border-bottom-0">
              <div className="alert alert-warning alert-dismissible fade show mb-0 mx-auto border shadow-none" role="alert" style={{ maxWidth: '600px' }}>
                <strong>Heads up!</strong> You should check in on some of those fields below.
                <button type="button" className="btn-close"></button>
              </div>
            </div>

            {/* 2. DESCRIPTION */}
            <div className="p-4 border border-top-0 bg-light-subtle mb-0">
              <p className="text-muted small mb-0" style={{ lineHeight: 1.6 }}>
                Add <code>.alert-dismissible</code> and a <code>btn-close</code> to enable dismissal. This requires the Bootstrap JavaScript library.
              </p>
            </div>

            {/* 3. CODE */}
            <CodeBlock code={alertDismissCode} language="HTML" />
          </div>
        </div>

        {/* TOC */}
        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #152d61', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Contents</div>
            <ul className="nav flex-column gap-2 fw-medium small">
              <li className="nav-item"><a className="nav-link p-0 text-secondary hover-primary" href="#examples">EXAMPLES</a></li>
              <li className="nav-item"><a className="nav-link p-0 text-secondary hover-primary" href="#dismissing">DISMISSING</a></li>
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
