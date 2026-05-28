'use client';

import CodeBlock from '@/app/components/CodeBlock';

const iconsListCode = `<!-- Material Icons are available via the Google Fonts CDN -->
<!-- Already included in the Starter Template -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<!-- Usage: wrap the icon name in a <i> or <span> with class="material-icons" -->
<i class="material-icons">home</i>
<i class="material-icons">settings</i>
<i class="material-icons">favorite</i>
<i class="material-icons">search</i>`;

const iconSizeCode = `<!-- Size: use font-size CSS or Material size classes -->
<i class="material-icons" style="font-size: 18px;">grade</i>
<i class="material-icons" style="font-size: 24px;">grade</i>   <!-- default -->
<i class="material-icons" style="font-size: 36px;">grade</i>
<i class="material-icons" style="font-size: 48px;">grade</i>`;

const iconColorCode = `<!-- Colour: use Bootstrap text utilities or inline style -->
<i class="material-icons text-primary">favorite</i>
<i class="material-icons text-success">check_circle</i>
<i class="material-icons text-danger">error</i>
<i class="material-icons text-muted">info</i>`;

const iconButtonCode = `<!-- Icon in a button -->
<button class="btn btn-primary d-flex align-items-center gap-2" type="button">
  <i class="material-icons" style="font-size:20px;">add</i>
  Add Item
</button>

<!-- Icon-only circular button -->
<button class="btn rounded-circle d-flex align-items-center justify-content-center p-2 text-muted" type="button">
  <i class="material-icons">more_vert</i>
</button>`;

const commonIcons = [
  'home','search','settings','favorite','star','delete','edit','add','close','menu',
  'check','arrow_back','arrow_forward','person','email','phone','lock','visibility',
  'share','download','upload','cloud','notifications','info','warning','error',
  'check_circle','cancel','calendar_today','access_time','location_on','map',
];

export default function Icons() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <h1 className="mb-3 fw-normal" style={{ color: '#0f172a', fontSize: 'clamp(1.8rem,4vw,2.5rem)' }}>Icons</h1>
          <p className="text-muted mb-5" style={{ lineHeight: 1.7, fontSize: 'clamp(0.95rem,2vw,1.1rem)' }}>
            Rence Material uses <strong>Material Icons</strong> — Google's official icon font with over 2,500 glyphs. They are loaded via the Google Fonts CDN and are included automatically in the Starter Template.
          </p>

          {/* ── SETUP ── */}
          <div id="setup" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Setup &amp; usage</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>
              Include the Material Icons stylesheet in your <code>&lt;head&gt;</code>. Then use the icon name as text content inside a <code>&lt;i&gt;</code> element with <code>class="material-icons"</code>.
            </p>
            <CodeBlock code={iconsListCode} language="HTML" />
          </div>

          {/* ── ICON BROWSER ── */}
          <div id="browser" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Common icons</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>
              A selection of the most commonly used Material Icons. For the full library, visit <a href="https://fonts.google.com/icons" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ color: '#152d61' }}>fonts.google.com/icons</a>.
            </p>
            <div className="row g-3 mb-5">
              {commonIcons.map(icon => (
                <div key={icon} className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="bg-light border rounded-3 p-3 text-center d-flex flex-column align-items-center gap-2" style={{ minHeight: '90px' }}>
                    <i className="material-icons" style={{ fontSize: '28px', color: '#152d61' }}>{icon}</i>
                    <span className="text-muted" style={{ fontSize: '0.65rem', wordBreak: 'break-all' }}>{icon}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SIZES ── */}
          <div id="sizes" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Sizes</h2>
            <div className="bg-light p-4 rounded-top border border-bottom-0 d-flex align-items-end gap-4">
              {[18, 24, 36, 48].map(s => (
                <div key={s} className="text-center">
                  <i className="material-icons text-muted" style={{ fontSize: `${s}px` }}>grade</i>
                  <div className="text-muted mt-2" style={{ fontSize: '0.75rem' }}>{s}px</div>
                </div>
              ))}
            </div>
            <CodeBlock code={iconSizeCode} language="HTML" />
          </div>

          {/* ── COLOURS ── */}
          <div id="colours" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Colours</h2>
            <div className="bg-light p-4 rounded-top border border-bottom-0 d-flex gap-4 align-items-center">
              <i className="material-icons text-primary" style={{ fontSize: '32px' }}>favorite</i>
              <i className="material-icons text-success" style={{ fontSize: '32px' }}>check_circle</i>
              <i className="material-icons text-danger" style={{ fontSize: '32px' }}>error</i>
              <i className="material-icons text-muted" style={{ fontSize: '32px' }}>info</i>
            </div>
            <CodeBlock code={iconColorCode} language="HTML" />
          </div>

          {/* ── IN BUTTONS ── */}
          <div id="in-buttons" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Icons in buttons</h2>
            <div className="bg-light p-4 rounded-top border border-bottom-0 d-flex gap-3 align-items-center flex-wrap" style={{ backgroundColor: '#e9eef2' }}>
              <button className="btn btn-primary d-flex align-items-center gap-2" type="button">
                <i className="material-icons" style={{ fontSize: '20px' }}>add</i> Add Item
              </button>
              <button className="btn rounded-circle d-flex align-items-center justify-content-center p-2 text-muted bg-white border" type="button">
                <i className="material-icons">more_vert</i>
              </button>
            </div>
            <CodeBlock code={iconButtonCode} language="HTML" />
          </div>
        </div>

        {/* TOC */}
        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '84px', borderLeft: '2px solid #152d61', paddingLeft: '1rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Contents</div>
            <ul className="nav flex-column">
              {[['#setup','Setup & usage'],['#browser','Common icons'],['#sizes','Sizes'],['#colours','Colours'],['#in-buttons','Icons in buttons']].map(([href,label])=>(
                <li key={href} className="nav-item"><a className="nav-link px-0 py-1" href={href} style={{ color: '#475569', fontSize: '0.88rem' }}>{label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
