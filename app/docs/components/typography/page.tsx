'use client';
import CodeBlock from '@/app/components/CodeBlock';

const scaleCode = `<!-- Material type scale -->
<p class="display-4 fw-light">Display Large</p>
<p class="display-6 fw-light">Display Small</p>
<h1>Headline 1</h1>
<p class="fs-5">Body Large</p>
<p>Body Medium</p>
<span class="text-uppercase fw-bold" style="font-size: 0.75rem; letter-spacing: 0.08em;">Label</span>`;

const weightCode = `<p class="fw-light">Light 300</p>
<p class="fw-normal">Regular 400</p>
<p class="fw-medium">Medium 500</p>
<p class="fw-bold">Bold 700</p>`;

const typeScale = [
  { label: 'Display Large',  cls: 'display-4 fw-light', sample: 'The quick brown fox' },
  { label: 'Display Small',  cls: 'display-6 fw-light', sample: 'The quick brown fox' },
  { label: 'Headline 1',     cls: 'h1',                 sample: 'Heading One' },
  { label: 'Headline 2',     cls: 'h2',                 sample: 'Heading Two' },
  { label: 'Body Large',     cls: 'fs-5',               sample: 'Body text at 1.125rem.' },
  { label: 'Body Medium',    cls: '',                   sample: 'Body text at 1rem.' },
  { label: 'Overline',       cls: 'text-uppercase fw-bold text-muted', sample: 'OVERLINE LABEL', style: { fontSize: '0.75rem', letterSpacing: '0.08em' } },
];

export default function Typography() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <h1 className="mb-3 fw-normal" style={{ color: '#0f172a', fontSize: 'clamp(1.8rem,4vw,2.5rem)' }}>Typography</h1>
          <p className="text-muted mb-5" style={{ lineHeight: 1.7, fontSize: 'clamp(0.95rem,2vw,1.1rem)' }}>
            Rence Material uses <strong>Roboto</strong>. The type scale follows Material Design M3 guidelines.
          </p>

          <div id="scale" className="mb-5">
            <h2 className="h4 fw-bold mb-4 text-dark">Type scale</h2>
            <div className="bg-white p-5 rounded-4 shadow-sm border border-bottom-0 overflow-hidden">
               {typeScale.map((t, i) => (
                  <div key={t.label} className="d-flex align-items-baseline gap-4 mb-4">
                    <span className="text-muted fw-bold text-uppercase d-none d-md-inline" style={{ fontSize: '0.65rem', width: '120px', letterSpacing: '0.08em' }}>{t.label}</span>
                    <span className={`${t.cls} text-dark text-truncate`}>{t.sample}</span>
                  </div>
                ))}
            </div>
            <div className="p-4 border border-top-0 bg-light-subtle mb-0">
              <p className="text-muted small mb-0">Apply styles via HTML tags or Bootstrap display classes.</p>
            </div>
            <CodeBlock code={scaleCode} language="HTML" />
          </div>

          <div id="weight" className="mb-5">
            <h2 className="h4 fw-bold mb-4 text-dark">Font weight</h2>
            <div className="bg-white p-5 rounded-4 shadow-sm border border-bottom-0">
              {[['fw-light','Light 300'],['fw-normal','Regular 400'],['fw-medium','Medium 500'],['fw-bold','Bold 700']].map(([cls, label]) => (
                <p key={cls} className={`${cls} mb-3`} style={{ fontSize: '1.5rem', color: '#004d40' }}>{label}</p>
              ))}
            </div>
            <div className="p-4 border border-top-0 bg-light-subtle mb-0">
              <p className="text-muted small mb-0">Use Bootstrap <code>.fw-*</code> utilities.</p>
            </div>
            <CodeBlock code={weightCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '84px', borderLeft: '2px solid #00bfa5', paddingLeft: '1rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Contents</div>
            <ul className="nav flex-column">
              <li className="nav-item"><a className="nav-link px-0 py-1" href="#scale" style={{ color: '#475569', fontSize: '0.88rem' }}>Type scale</a></li>
              <li className="nav-item"><a className="nav-link px-0 py-1" href="#weight" style={{ color: '#475569', fontSize: '0.88rem' }}>Font weight</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
