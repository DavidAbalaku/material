'use client';
import CodeBlock from '@/app/components/CodeBlock';

const collapseCode = `<!-- Toggle a collapse via data attributes -->
<p>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Toggle
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the toggle button.
  </div>
</div>`;

const accordionCode = `<!-- Accordion -->
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Content for item 1. You can place any HTML content here.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Content for item 2.
      </div>
    </div>
  </div>
</div>`;

export default function Collapse() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <h1 className="mb-3 fw-normal" style={{ color: '#0f172a', fontSize: 'clamp(1.8rem,4vw,2.5rem)' }}>Collapse</h1>
          <p className="text-muted mb-5" style={{ lineHeight: 1.7, fontSize: 'clamp(0.95rem,2vw,1.1rem)' }}>
            Toggle the visibility of content across your project with a few classes and JavaScript plugins. The collapse component also doubles as an Accordion.
          </p>

          <div id="example" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Example</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Click the button to show or hide the content using <code>data-bs-toggle="collapse"</code> and <code>data-bs-target</code>.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0">
              <p>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#demoCollapse" aria-expanded="false">
                  Toggle content
                </button>
              </p>
              <div className="collapse" id="demoCollapse">
                <div className="card card-body">
                  Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the toggle button.
                </div>
              </div>
            </div>
            <CodeBlock code={collapseCode} language="HTML" />
          </div>

          <div id="accordion" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Accordion</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Use the <code>.accordion</code> component with <code>data-bs-parent</code> to close other items when one opens — like Material Design's Expansion Panels.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0">
              <div className="accordion" id="demoAccordion">
                {[1,2,3].map(n => (
                  <div key={n} className="accordion-item">
                    <h2 className="accordion-header">
                      <button className={`accordion-button ${n !== 1 ? 'collapsed':''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#acc${n}`} aria-expanded={n === 1 ? 'true':'false'}>
                        Accordion Item #{n}
                      </button>
                    </h2>
                    <div id={`acc${n}`} className={`accordion-collapse collapse ${n === 1 ? 'show':''}`} data-bs-parent="#demoAccordion">
                      <div className="accordion-body text-muted small">Content for accordion item #{n}. You can place any HTML content here — text, images, or other components.</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <CodeBlock code={accordionCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Contents</div>
            <ul className="nav flex-column">
              {[['#example','Example'],['#accordion','Accordion']].map(([href,label])=>(
                <li key={href} className="nav-item"><a className="nav-link px-0 py-1" href={href} style={{ color: '#475569', fontSize: '0.88rem' }}>{label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
