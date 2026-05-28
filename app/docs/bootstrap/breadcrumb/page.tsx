'use client';
import CodeBlock from '@/app/components/CodeBlock';

const basicCode = `<!-- Breadcrumb -->
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>`;

const customDividerCode = `<!-- Custom divider via CSS variable -->
<nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<!-- SVG icon divider -->
<nav style="--bs-breadcrumb-divider: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&quot;);" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>`;

const dropdownBreadcrumbCode = `<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Components</a></li>
    <li class="breadcrumb-item active" aria-current="page">Breadcrumb</li>
  </ol>
</nav>`;

export default function Breadcrumb() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <h1 className="mb-3 fw-normal" style={{ color: '#0f172a', fontSize: 'clamp(1.8rem,4vw,2.5rem)' }}>Breadcrumb</h1>
          <p className="text-muted mb-5" style={{ lineHeight: 1.7, fontSize: 'clamp(0.95rem,2vw,1.1rem)' }}>
            Indicate the current page's location within a navigational hierarchy that automatically adds separators via CSS.
          </p>

          <div id="examples" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Examples</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Use an ordered or unordered list with a <code>.breadcrumb</code> class. Mark the last item with <code>.breadcrumb-item.active</code> and <code>aria-current="page"</code>.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0">
              <nav aria-label="breadcrumb" className="mb-2">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item active" aria-current="page">Home</li>
                </ol>
              </nav>
              <nav aria-label="breadcrumb" className="mb-2">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
              </nav>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">Library</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
              </nav>
            </div>
            <CodeBlock code={basicCode} language="HTML" />
          </div>

          <div id="dividers" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Custom dividers</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Override the default <code>/</code> divider by setting the <code>--bs-breadcrumb-divider</code> CSS variable on the <code>&lt;nav&gt;</code> element or inline.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0">
              <nav style={{ '--bs-breadcrumb-divider': "'>'", WebkitPrintColorAdjust: 'exact' } as never} aria-label="breadcrumb" className="mb-2">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
              </nav>
            </div>
            <CodeBlock code={customDividerCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '84px', borderLeft: '2px solid #152d61', paddingLeft: '1rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Contents</div>
            <ul className="nav flex-column">
              {[['#examples','Examples'],['#dividers','Custom dividers']].map(([href,label])=>(
                <li key={href} className="nav-item"><a className="nav-link px-0 py-1" href={href} style={{ color: '#475569', fontSize: '0.88rem' }}>{label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
