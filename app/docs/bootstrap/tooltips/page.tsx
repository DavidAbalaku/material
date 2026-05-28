'use client';
import CodeBlock from '@/app/components/CodeBlock';

const tooltipCode = `<!-- Tooltips require initialization via JS (or Bootstrap's data-api) -->
<button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
  Tooltip on top
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
  Right
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
  Bottom
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
  Left
</button>

<script>
  // Initialize all tooltips on the page
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));
</script>`;

const popoverCode = `<!-- Popovers (require JS initialization like tooltips) -->
<button type="button" class="btn btn-primary"
  data-bs-toggle="popover"
  data-bs-placement="right"
  data-bs-title="Popover title"
  data-bs-content="And here's some amazing content. It's very engaging. Right?">
  Click to toggle popover
</button>

<script>
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  popoverTriggerList.forEach(el => new bootstrap.Popover(el));
</script>`;

export default function Tooltips() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <h1 className="mb-3 fw-normal" style={{ color: '#0f172a', fontSize: 'clamp(1.8rem,4vw,2.5rem)' }}>Tooltips &amp; Popovers</h1>
          <p className="text-muted mb-5" style={{ lineHeight: 1.7, fontSize: 'clamp(0.95rem,2vw,1.1rem)' }}>
            Tooltips and Popovers are built on Popper.js (bundled with Bootstrap). Both require JavaScript initialisation. Rence Material applies the dark Material style to tooltips and card-like elevation to popovers automatically.
          </p>

          <div className="alert border-start border-4 border-warning bg-light py-2 px-3 mb-5 small text-muted rounded-2">
            <strong className="text-dark">Note:</strong> Tooltips and Popovers are opt-in — they must be explicitly initialised via JavaScript as shown in the code examples below.
          </div>

          <div id="tooltips" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Tooltips</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>
              Add <code>data-bs-toggle="tooltip"</code> and a <code>title</code> attribute to any element. Control placement with <code>data-bs-placement</code> (top, right, bottom, left).
            </p>
            <div className="bg-light p-4 rounded-top border border-bottom-0 d-flex flex-wrap gap-3 align-items-center">
              {['top','right','bottom','left'].map(pos => (
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
            <CodeBlock code={tooltipCode} language="HTML + JS" />
          </div>

          <div id="popovers" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Popovers</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>
              Popovers are like tooltips but with optional titles and larger body content. Use <code>data-bs-toggle="popover"</code> and initialise via JS. They require clicking to toggle.
            </p>
            <div className="bg-light p-4 rounded-top border border-bottom-0">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="popover"
                data-bs-placement="right"
                data-bs-title="Popover title"
                data-bs-content="And here's some amazing content. It's very engaging. Right?"
              >
                Click to toggle popover
              </button>
            </div>
            <CodeBlock code={popoverCode} language="HTML + JS" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '84px', borderLeft: '2px solid #152d61', paddingLeft: '1rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Contents</div>
            <ul className="nav flex-column">
              {[['#tooltips','Tooltips'],['#popovers','Popovers']].map(([href,label])=>(
                <li key={href} className="nav-item"><a className="nav-link px-0 py-1" href={href} style={{ color: '#475569', fontSize: '0.88rem' }}>{label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
