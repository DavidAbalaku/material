'use client';
import CodeBlock from '@/app/components/CodeBlock';

const btnGroupCode = `<!-- Basic button group -->
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>`;

const outlinedGroupCode = `<!-- Outlined button group -->
<div class="btn-group" role="group">
  <button type="button" class="btn btn-outline-primary">Left</button>
  <button type="button" class="btn btn-outline-primary">Middle</button>
  <button type="button" class="btn btn-outline-primary">Right</button>
</div>`;

const toolbarCode = `<!-- Button toolbar -->
<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-2" role="group">
    <button type="button" class="btn btn-outline-secondary">1</button>
    <button type="button" class="btn btn-outline-secondary">2</button>
    <button type="button" class="btn btn-outline-secondary">3</button>
    <button type="button" class="btn btn-outline-secondary">4</button>
  </div>
  <div class="btn-group me-2" role="group">
    <button type="button" class="btn btn-outline-secondary">5</button>
    <button type="button" class="btn btn-outline-secondary">6</button>
    <button type="button" class="btn btn-outline-secondary">7</button>
  </div>
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-outline-secondary">8</button>
  </div>
</div>`;

const verticalCode = `<!-- Vertical button group -->
<div class="btn-group-vertical" role="group">
  <button type="button" class="btn btn-outline-secondary">Button 1</button>
  <button type="button" class="btn btn-outline-secondary">Button 2</button>
  <button type="button" class="btn btn-outline-secondary">Button 3</button>
</div>`;

export default function ButtonGroup() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <h1 className="mb-3 fw-normal" style={{ color: '#0f172a', fontSize: 'clamp(1.8rem,4vw,2.5rem)' }}>Button Group</h1>
          <p className="text-muted mb-5" style={{ lineHeight: 1.7, fontSize: 'clamp(0.95rem,2vw,1.1rem)' }}>
            Group a series of buttons together on a single line or stack them in a vertical column using the button group component.
          </p>

          <div id="basic" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Basic example</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Wrap a series of buttons with <code>.btn</code> in a <code>.btn-group</code>.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0 d-flex flex-wrap gap-3">
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-primary">Left</button>
                <button type="button" className="btn btn-primary">Middle</button>
                <button type="button" className="btn btn-primary">Right</button>
              </div>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-outline-primary">Left</button>
                <button type="button" className="btn btn-outline-primary">Middle</button>
                <button type="button" className="btn btn-outline-primary">Right</button>
              </div>
            </div>
            <CodeBlock code={btnGroupCode} language="HTML" />
          </div>

          <div id="toolbar" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Button toolbar</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Combine sets of button groups into a button toolbar for more complex components. Use utility classes as needed.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0">
              <div className="btn-toolbar" role="toolbar">
                <div className="btn-group me-2" role="group">
                  {[1,2,3,4].map(n => <button key={n} type="button" className="btn btn-outline-secondary">{n}</button>)}
                </div>
                <div className="btn-group me-2" role="group">
                  {[5,6,7].map(n => <button key={n} type="button" className="btn btn-outline-secondary">{n}</button>)}
                </div>
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-outline-secondary">8</button>
                </div>
              </div>
            </div>
            <CodeBlock code={toolbarCode} language="HTML" />
          </div>

          <div id="vertical" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Vertical variation</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Make a set of buttons appear vertically stacked rather than horizontally with <code>.btn-group-vertical</code>.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0">
              <div className="btn-group-vertical" role="group">
                <button type="button" className="btn btn-outline-secondary">Button 1</button>
                <button type="button" className="btn btn-outline-secondary">Button 2</button>
                <button type="button" className="btn btn-outline-secondary">Button 3</button>
              </div>
            </div>
            <CodeBlock code={verticalCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '84px', borderLeft: '2px solid #152d61', paddingLeft: '1rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Contents</div>
            <ul className="nav flex-column">
              {[['#basic','Basic example'],['#toolbar','Button toolbar'],['#vertical','Vertical']].map(([href,label])=>(
                <li key={href} className="nav-item"><a className="nav-link px-0 py-1" href={href} style={{ color: '#475569', fontSize: '0.88rem' }}>{label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
