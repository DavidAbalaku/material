'use client';
import CodeBlock from '@/app/components/CodeBlock';

const navsCode = `<!-- Basic navigation (tabs style) -->
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>`;

const pillsCode = `<!-- Pill navigation -->
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>`;

const fillCode = `<!-- Fill — each nav item has equal width -->
<ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Much longer nav link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>`;

const vertNavCode = `<!-- Vertical navigation -->
<ul class="nav flex-column nav-pills">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>`;

export default function Navs() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <h1 className="mb-3 fw-normal" style={{ color: '#0f172a', fontSize: 'clamp(1.8rem,4vw,2.5rem)' }}>Navs</h1>
          <p className="text-muted mb-5" style={{ lineHeight: 1.7, fontSize: 'clamp(0.95rem,2vw,1.1rem)' }}>
            Bootstrap provides several navigation components. The base <code>.nav</code> component is flexible for building tabs, pills, and vertical lists. For full tab-panel behaviour, see the <a href="/docs/components/tabs" className="text-decoration-none" style={{ color: '#152d61' }}>Tabs</a> page.
          </p>

          <div id="tabs" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Tabs</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Use <code>.nav.nav-tabs</code> for a tab-style navigation. Rence Material applies the teal underline automatically.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0">
              <ul className="nav nav-tabs">
                <li className="nav-item"><a className="nav-link active" href="#">Active</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Another Link</a></li>
                <li className="nav-item"><a className="nav-link disabled">Disabled</a></li>
              </ul>
            </div>
            <CodeBlock code={navsCode} language="HTML" />
          </div>

          <div id="pills" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Pills</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Use <code>.nav-pills</code> for a pill-style navigation. Active pills have the primary background colour applied.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0 d-flex flex-column gap-3">
              <ul className="nav nav-pills">
                <li className="nav-item"><a className="nav-link active" href="#">Active</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
              </ul>
              <ul className="nav nav-pills nav-fill">
                <li className="nav-item"><a className="nav-link active" href="#">Active</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Much longer nav link</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
              </ul>
            </div>
            <CodeBlock code={pillsCode} language="HTML" />
          </div>

          <div id="vertical" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Vertical</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Stack navigation vertically with <code>.flex-column</code>. Great for sidebar navigation.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0">
              <ul className="nav flex-column nav-pills" style={{ maxWidth: '200px' }}>
                <li className="nav-item"><a className="nav-link active" href="#">Active</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
              </ul>
            </div>
            <CodeBlock code={vertNavCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '84px', borderLeft: '2px solid #152d61', paddingLeft: '1rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Contents</div>
            <ul className="nav flex-column">
              {[['#tabs','Tabs'],['#pills','Pills'],['#vertical','Vertical']].map(([href,label])=>(
                <li key={href} className="nav-item"><a className="nav-link px-0 py-1" href={href} style={{ color: '#475569', fontSize: '0.88rem' }}>{label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
