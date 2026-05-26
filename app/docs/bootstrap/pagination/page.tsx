'use client';
import CodeBlock from '@/app/components/CodeBlock';

const paginationCode = `<!-- Default pagination -->
<nav aria-label="Page navigation">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>`;

const iconPaginationCode = `<!-- Pagination with Material icons -->
<nav aria-label="Page navigation">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link d-flex align-items-center" href="#" aria-label="Previous">
        <i class="material-icons" style="font-size:18px;">chevron_left</i>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link d-flex align-items-center" href="#" aria-label="Next">
        <i class="material-icons" style="font-size:18px;">chevron_right</i>
      </a>
    </li>
  </ul>
</nav>`;

const sizeCode = `<!-- Sizing: .pagination-lg and .pagination-sm -->
<nav>
  <ul class="pagination pagination-lg mb-3">
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
<nav>
  <ul class="pagination pagination-sm">
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>`;

export default function Pagination() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <h1 className="mb-3 fw-normal" style={{ color: '#0f172a', fontSize: 'clamp(1.8rem,4vw,2.5rem)' }}>Pagination</h1>
          <p className="text-muted mb-5" style={{ lineHeight: 1.7, fontSize: 'clamp(0.95rem,2vw,1.1rem)' }}>
            Indicate a series of related content across multiple pages with the Pagination component. Use Material Icons for the previous/next controls to match the Material Design specification.
          </p>

          <div id="overview" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Overview</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Use a <code>&lt;nav&gt;</code> with a <code>.pagination</code> list. Mark the current page with <code>.active</code> and unavailable links with <code>.disabled</code>.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0">
              <nav aria-label="Page navigation" className="mb-3">
                <ul className="pagination mb-0">
                  <li className="page-item disabled"><a className="page-link" href="#" tabIndex={-1}>Previous</a></li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item active" aria-current="page"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
              </nav>
            </div>
            <CodeBlock code={paginationCode} language="HTML" />
          </div>

          <div id="icons" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>With Material Icons</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Replace text labels with Material Design chevron icons for a cleaner, more modern look.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0">
              <nav aria-label="Icon pagination">
                <ul className="pagination mb-0">
                  <li className="page-item"><a className="page-link d-flex align-items-center" href="#"><i className="material-icons" style={{ fontSize: '18px' }}>chevron_left</i></a></li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item active"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">4</a></li>
                  <li className="page-item"><a className="page-link" href="#">5</a></li>
                  <li className="page-item"><a className="page-link d-flex align-items-center" href="#"><i className="material-icons" style={{ fontSize: '18px' }}>chevron_right</i></a></li>
                </ul>
              </nav>
            </div>
            <CodeBlock code={iconPaginationCode} language="HTML" />
          </div>

          <div id="sizing" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Sizing</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Add <code>.pagination-lg</code> or <code>.pagination-sm</code> for larger or smaller pagination.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0">
              <nav aria-label="Large"><ul className="pagination pagination-lg mb-3">
                {[1,2,3].map(n=><li key={n} className={`page-item ${n===1?'active':''}`}><a className="page-link" href="#">{n}</a></li>)}
              </ul></nav>
              <nav aria-label="Default"><ul className="pagination mb-3">
                {[1,2,3].map(n=><li key={n} className={`page-item ${n===1?'active':''}`}><a className="page-link" href="#">{n}</a></li>)}
              </ul></nav>
              <nav aria-label="Small"><ul className="pagination pagination-sm mb-0">
                {[1,2,3].map(n=><li key={n} className={`page-item ${n===1?'active':''}`}><a className="page-link" href="#">{n}</a></li>)}
              </ul></nav>
            </div>
            <CodeBlock code={sizeCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Contents</div>
            <ul className="nav flex-column">
              {[['#overview','Overview'],['#icons','With icons'],['#sizing','Sizing']].map(([href,label])=>(
                <li key={href} className="nav-item"><a className="nav-link px-0 py-1" href={href} style={{ color: '#475569', fontSize: '0.88rem' }}>{label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
