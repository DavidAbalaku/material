'use client';
import CodeBlock from '@/app/components/CodeBlock';

const basicDropdownCode = `<!-- Single button dropdown -->
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>`;

const splitDropdownCode = `<!-- Split button dropdown -->
<div class="btn-group">
  <button type="button" class="btn btn-primary">Action</button>
  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
  </ul>
</div>`;

const dropdownIconCode = `<!-- Dropdown item with icon -->
<ul class="dropdown-menu">
  <li>
    <a class="dropdown-item d-flex align-items-center gap-2" href="#">
      <i class="material-icons" style="font-size:18px;">edit</i> Edit
    </a>
  </li>
  <li>
    <a class="dropdown-item d-flex align-items-center gap-2" href="#">
      <i class="material-icons" style="font-size:18px;">share</i> Share
    </a>
  </li>
  <li><hr class="dropdown-divider"></li>
  <li>
    <a class="dropdown-item d-flex align-items-center gap-2 text-danger" href="#">
      <i class="material-icons" style="font-size:18px;">delete</i> Delete
    </a>
  </li>
</ul>`;

export default function Dropdowns() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <h1 className="mb-3 fw-normal" style={{ color: '#0f172a', fontSize: 'clamp(1.8rem,4vw,2.5rem)' }}>Dropdowns</h1>
          <p className="text-muted mb-5" style={{ lineHeight: 1.7, fontSize: 'clamp(0.95rem,2vw,1.1rem)' }}>
            Toggle contextual overlays for displaying lists of links and more using the Dropdown component. Dropdowns are built on Popper, included in Bootstrap's JS bundle.
          </p>

          <div id="single-button" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Single button</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Add <code>data-bs-toggle="dropdown"</code> to a button and wrap it in a <code>.dropdown</code> container. Add <code>.dropdown-menu</code> list below.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0 d-flex gap-3">
              <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              <div className="dropdown">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Outlined</button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Option 1</a></li>
                  <li><a className="dropdown-item" href="#">Option 2</a></li>
                </ul>
              </div>
            </div>
            <CodeBlock code={basicDropdownCode} language="HTML" />
          </div>

          <div id="split-button" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Split button</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of <code>.dropdown-toggle-split</code>.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0">
              <div className="btn-group">
                <button type="button" className="btn btn-primary">Action</button>
                <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="visually-hidden">Toggle</span>
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                </ul>
              </div>
            </div>
            <CodeBlock code={splitDropdownCode} language="HTML" />
          </div>

          <div id="with-icons" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>With Material Icons</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Combine Material Icons with dropdown items for a richer Material Design look.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0">
              <div className="dropdown">
                <button className="btn btn-outline-secondary dropdown-toggle d-flex align-items-center gap-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="material-icons" style={{ fontSize: '18px' }}>more_vert</i> Options
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item d-flex align-items-center gap-2" href="#"><i className="material-icons" style={{ fontSize: '18px' }}>edit</i> Edit</a></li>
                  <li><a className="dropdown-item d-flex align-items-center gap-2" href="#"><i className="material-icons" style={{ fontSize: '18px' }}>share</i> Share</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item d-flex align-items-center gap-2 text-danger" href="#"><i className="material-icons" style={{ fontSize: '18px' }}>delete</i> Delete</a></li>
                </ul>
              </div>
            </div>
            <CodeBlock code={dropdownIconCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Contents</div>
            <ul className="nav flex-column">
              {[['#single-button','Single button'],['#split-button','Split button'],['#with-icons','With icons']].map(([href,label])=>(
                <li key={href} className="nav-item"><a className="nav-link px-0 py-1" href={href} style={{ color: '#475569', fontSize: '0.88rem' }}>{label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
