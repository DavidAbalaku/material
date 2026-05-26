'use client';
import CodeBlock from '@/app/components/CodeBlock';

const listGroupCode = `<!-- Basic list group -->
<ul class="list-group">
  <li class="list-group-item active" aria-current="true">Active Item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item disabled" aria-disabled="true">A disabled item</li>
</ul>`;

const flushedCode = `<!-- Flush list group (no outer borders) -->
<ul class="list-group list-group-flush">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>`;

const listGroupWithBadgeCode = `<!-- List group with badges -->
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Inbox
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Ads
    <span class="badge bg-primary rounded-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Junk
    <span class="badge bg-primary rounded-pill">1</span>
  </li>
</ul>`;

const listGroupActionCode = `<!-- Actionable list group (links) -->
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">Active link</a>
  <a href="#" class="list-group-item list-group-item-action">A second link</a>
  <a href="#" class="list-group-item list-group-item-action">A third link</a>
  <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1">Disabled link</a>
</div>`;

export default function ListGroup() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <h1 className="mb-3 fw-normal" style={{ color: '#0f172a', fontSize: 'clamp(1.8rem,4vw,2.5rem)' }}>List Group</h1>
          <p className="text-muted mb-5" style={{ lineHeight: 1.7, fontSize: 'clamp(0.95rem,2vw,1.1rem)' }}>
            List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.
          </p>

          <div id="basic" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Basic example</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Use <code>.list-group</code> and <code>.list-group-item</code>. Add <code>.active</code> or <code>.disabled</code> for states.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0">
              <ul className="list-group" style={{ maxWidth: '360px' }}>
                <li className="list-group-item active" aria-current="true">Active Item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item disabled" aria-disabled="true">A disabled item</li>
              </ul>
            </div>
            <CodeBlock code={listGroupCode} language="HTML" />
          </div>

          <div id="flush" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Flush</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Add <code>.list-group-flush</code> to remove the outer borders. Useful within cards.</p>
            <div className="bg-light p-0 rounded-top border border-bottom-0 overflow-hidden" style={{ maxWidth: '360px' }}>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
            </div>
            <CodeBlock code={flushedCode} language="HTML" />
          </div>

          <div id="badges" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>With badges</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Add badges to any list group item to show unread counts, labels, or indicators using flex utilities.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0">
              <ul className="list-group" style={{ maxWidth: '360px' }}>
                {[['Inbox','14'],['Ads','2'],['Junk','1']].map(([label, count]) => (
                  <li key={label} className="list-group-item d-flex justify-content-between align-items-center">
                    {label}
                    <span className="badge bg-primary rounded-pill">{count}</span>
                  </li>
                ))}
              </ul>
            </div>
            <CodeBlock code={listGroupWithBadgeCode} language="HTML" />
          </div>

          <div id="action" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Action items</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Use <code>&lt;a&gt;</code> tags with <code>.list-group-item-action</code> for clickable list group items with hover states.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0">
              <div className="list-group" style={{ maxWidth: '360px' }}>
                <a href="#" className="list-group-item list-group-item-action active" aria-current="true">Active link</a>
                <a href="#" className="list-group-item list-group-item-action">A second link</a>
                <a href="#" className="list-group-item list-group-item-action">A third link</a>
                <a href="#" className="list-group-item list-group-item-action disabled" tabIndex={-1}>Disabled link</a>
              </div>
            </div>
            <CodeBlock code={listGroupActionCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Contents</div>
            <ul className="nav flex-column">
              {[['#basic','Basic'],['#flush','Flush'],['#badges','With badges'],['#action','Action items']].map(([href,label])=>(
                <li key={href} className="nav-item"><a className="nav-link px-0 py-1" href={href} style={{ color: '#475569', fontSize: '0.88rem' }}>{label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
