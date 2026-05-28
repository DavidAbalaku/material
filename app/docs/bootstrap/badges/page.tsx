'use client';
import CodeBlock from '@/app/components/CodeBlock';

const badgeCode = `<!-- Badges in headings -->
<h1>Heading <span class="badge bg-secondary">New</span></h1>
<h2>Heading <span class="badge bg-secondary">New</span></h2>
<h4>Heading <span class="badge bg-secondary">New</span></h4>

<!-- Standalone badges -->
<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-danger">Danger</span>
<span class="badge bg-warning text-dark">Warning</span>
<span class="badge bg-info text-dark">Info</span>`;

const pillCode = `<!-- Pill badges — use .rounded-pill -->
<span class="badge rounded-pill bg-primary">Primary</span>
<span class="badge rounded-pill bg-secondary">Secondary</span>
<span class="badge rounded-pill bg-success">Success</span>
<span class="badge rounded-pill bg-danger">Danger</span>`;

const buttonBadgeCode = `<!-- Badge as notification counter on a button -->
<button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>`;

const variants = [
  { cls: 'bg-primary', label: 'Primary' },
  { cls: 'bg-secondary', label: 'Secondary' },
  { cls: 'bg-success', label: 'Success' },
  { cls: 'bg-danger', label: 'Danger' },
  { cls: 'bg-warning text-dark', label: 'Warning' },
  { cls: 'bg-info text-dark', label: 'Info' },
];

export default function Badges() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <h1 className="mb-3 fw-normal" style={{ color: '#0f172a', fontSize: 'clamp(1.8rem,4vw,2.5rem)' }}>Badges</h1>
          <p className="text-muted mb-5" style={{ lineHeight: 1.7, fontSize: 'clamp(0.95rem,2vw,1.1rem)' }}>
            Badges scale to match the size of the immediate parent element by using relative font sizing and <code>em</code> units. They can be used as part of links or buttons, or standalone as notification indicators.
          </p>

          <div id="examples" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Examples</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Badges automatically scale with the parent element's font size. Use contextual <code>.bg-*</code> classes for colour.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0">
              <div className="mb-3">
                {['h1','h2','h4','h6'].map(tag => {
                  const Tag = tag as any;
                  return <Tag key={tag} className="mb-2">{tag.toUpperCase()} <span className="badge bg-secondary ms-2">New</span></Tag>;
                })}
              </div>
              <div className="d-flex flex-wrap gap-2 mt-4">
                {variants.map(v => <span key={v.cls} className={`badge ${v.cls}`}>{v.label}</span>)}
              </div>
            </div>
            <CodeBlock code={badgeCode} language="HTML" />
          </div>

          <div id="pill" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Pill badges</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Use <code>.rounded-pill</code> to make badges more rounded. Great for notification counters.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0 d-flex flex-wrap gap-2">
              {variants.map(v => <span key={v.cls} className={`badge rounded-pill ${v.cls}`}>{v.label}</span>)}
            </div>
            <CodeBlock code={pillCode} language="HTML" />
          </div>

          <div id="on-buttons" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>On buttons</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Badges can be used as part of links or buttons to provide a counter or label. Use Bootstrap's position utilities to position it precisely.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0 d-flex flex-wrap gap-3 align-items-center">
              <button type="button" className="btn btn-primary position-relative">
                Inbox
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">99+<span className="visually-hidden">unread messages</span></span>
              </button>
              <button type="button" className="btn btn-outline-secondary position-relative">
                Notifications
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">3</span>
              </button>
            </div>
            <CodeBlock code={buttonBadgeCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '84px', borderLeft: '2px solid #152d61', paddingLeft: '1rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Contents</div>
            <ul className="nav flex-column">
              {[['#examples','Examples'],['#pill','Pill badges'],['#on-buttons','On buttons']].map(([href,label])=>(
                <li key={href} className="nav-item"><a className="nav-link px-0 py-1" href={href} style={{ color: '#475569', fontSize: '0.88rem' }}>{label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
