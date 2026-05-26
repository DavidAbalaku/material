'use client';
import CodeBlock from '@/app/components/CodeBlock';

const scrollspyCode = `<!-- Scrollspy Navigation -->
<nav id="navbar-example" class="navbar navbar-light bg-light px-3">
  <a class="navbar-brand" href="#">Log</a>
  <ul class="nav nav-pills">
    <li class="nav-item"><a class="nav-link" href="#scroll-1">First</a></li>
    <li class="nav-item"><a class="nav-link" href="#scroll-2">Second</a></li>
  </ul>
</nav>

<!-- Scrollable container -->
<div data-bs-spy="scroll" data-bs-target="#navbar-example" data-bs-offset="0" class="scrollspy-example" tabindex="0" style="height: 200px; overflow-y: scroll;">
  <h4 id="scroll-1">First heading</h4>
  <p>...</p>
  <h4 id="scroll-2">Second heading</h4>
  <p>...</p>
</div>`;

export default function Scrollspy() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <h1 className="mb-3 fw-normal" style={{ color: '#0f172a', fontSize: 'clamp(1.8rem,4vw,2.5rem)' }}>Scrollspy</h1>
          <p className="text-muted mb-5" style={{ lineHeight: 1.7, fontSize: 'clamp(0.95rem,2vw,1.1rem)' }}>
            Automatically update Bootstrap navigation or list group components based on scroll position to indicate which link is currently active in the viewport.
          </p>

          <div id="example" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Navigation example</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Scrollspy requires <code>position: relative;</code> on the element you're spying on, usually the <code>&lt;body&gt;</code>.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0">
               <nav id="navbar-spy" className="navbar navbar-light bg-white border rounded-3 px-3 mb-3">
                 <a className="navbar-brand small fw-bold" href="#">PROJECT LOG</a>
                 <ul className="nav nav-pills small">
                   <li className="nav-item"><a className="nav-link" href="#part-1">Part 1</a></li>
                   <li className="nav-item"><a className="nav-link" href="#part-2">Part 2</a></li>
                 </ul>
               </nav>
               <div style={{ height: '160px', overflowY: 'scroll', padding: '1rem', background: 'white' }} className="border rounded-3">
                 <h6 id="part-1" className="fw-bold">Part 1</h6>
                 <p className="text-muted small">Scroll down to see the navigation highlights change. This is a functional demonstration of Scrollspy integration.</p>
                 <div style={{ height: '200px' }}></div>
                 <h6 id="part-2" className="fw-bold">Part 2</h6>
                 <p className="text-muted small">You have reached the second part. The link above should now be active.</p>
               </div>
            </div>
            <CodeBlock code={scrollspyCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Contents</div>
            <ul className="nav flex-column">
              <li className="nav-item"><a className="nav-link px-0 py-1" href="#example" style={{ color: '#475569', fontSize: '0.88rem' }}>Navigation example</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
