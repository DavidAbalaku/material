'use client';
import { useEffect } from 'react';
import CodeBlock from '@/app/components/CodeBlock';

const tooltipCode = `<!-- Tooltips require initialization via JS -->
<button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
  Tooltip on top
</button>

<script>
  // Initialize all tooltips on the page
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));
</script>`;

const popoverCode = `<!-- Popovers require JS initialization -->
<button type="button" class="btn btn-primary"
  data-bs-toggle="popover"
  data-bs-placement="right"
  data-bs-title="Popover title"
  data-bs-content="And here's some amazing content.">
  Click to toggle popover
</button>

<script>
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  popoverTriggerList.forEach(el => new bootstrap.Popover(el));
</script>`;

export default function Tooltips() {
  useEffect(() => {
    // Initialize tooltips
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then((bootstrap: any) => {
      document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
        new bootstrap.Tooltip(el);
      });
      document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => {
        new bootstrap.Popover(el);
      });
    });
  }, []);

  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em' }}>Tooltips & Popovers</h1>
          <p className="text-muted mb-5" style={{ lineHeight: 1.7, fontSize: '1.1rem' }}>
            Tooltips and Popovers are built on Popper.js (bundled with Bootstrap). Both require JavaScript initialisation. Rence Material applies the dark Material style automatically.
          </p>

          <div className="alert border-start border-4 border-warning bg-light py-2 px-3 mb-5 small text-muted rounded-2">
            <strong className="text-dark">Note:</strong> Tooltips and Popovers are opt-in — they must be explicitly initialised via JavaScript as shown below. The demo above is already initialized.
          </div>

          <div id="tooltips" className="mb-5">
            <h2 className="h4 fw-light mb-4 text-dark">Tooltips</h2>
            <p className="text-muted small mb-4">
              Add <code>data-bs-toggle="tooltip"</code> and a <code>title</code> attribute. Control placement with <code>data-bs-placement</code> (top, right, bottom, left). <strong>Hover the buttons below to see them live.</strong>
            </p>
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 d-flex flex-wrap gap-3 align-items-center justify-content-center border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                {(['top','right','bottom','left'] as const).map(pos => (
                  <button
                    key={pos}
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="tooltip"
                    data-bs-placement={pos}
                    title={`Tooltip on ${pos}`}
                  >
                    {pos.charAt(0).toUpperCase() + pos.slice(1)}
                  </button>
                ))}
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-0">Hover each button to trigger the tooltip. Requires Bootstrap JS (already loaded in Rence Material docs).</p>
              </div>
            </div>
            <CodeBlock code={tooltipCode} language="HTML + JS" />
          </div>

          <div id="popovers" className="mb-5">
            <h2 className="h4 fw-light mb-4 text-dark">Popovers</h2>
            <p className="text-muted small mb-4">
              Popovers are like tooltips but with optional titles and larger body content. <strong>Click the button below</strong> to toggle a live popover.
            </p>
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 d-flex justify-content-center border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="popover"
                  data-bs-placement="bottom"
                  data-bs-title="Popover title"
                  data-bs-content="And here's some amazing content. It's very engaging. Right?"
                >
                  Click to toggle popover
                </button>
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-0">Click the button to toggle the popover. Click anywhere else to dismiss.</p>
              </div>
            </div>
            <CodeBlock code={popoverCode} language="HTML + JS" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Contents</div>
            <ul className="nav flex-column">
              {[['#tooltips','TOOLTIPS'],['#popovers','POPOVERS']].map(([href,label])=>(
                <li key={href} className="nav-item mb-2"><a className="nav-link px-0 py-0 text-secondary hover-primary" href={href} style={{ fontSize: '0.88rem' }}>{label}</a></li>
              ))}
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
