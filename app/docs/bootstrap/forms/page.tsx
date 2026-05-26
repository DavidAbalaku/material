'use client';
import CodeBlock from '@/app/components/CodeBlock';

const overviewCode = `<!-- Basic form -->
<form>
  <div class="mb-3">
    <label for="exampleEmail" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleEmail" placeholder="name@example.com">
    <div class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="examplePassword" class="form-label">Password</label>
    <input type="password" class="form-control" id="examplePassword">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="rememberMe">
    <label class="form-check-label" for="rememberMe">Remember me</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;

const controlsCode = `<!-- Form controls -->
<input type="text" class="form-control mb-3" placeholder="Default input">
<input type="text" class="form-control form-control-lg mb-3" placeholder="Large input (.form-control-lg)">
<input type="text" class="form-control form-control-sm mb-3" placeholder="Small input (.form-control-sm)">
<select class="form-select mb-3">
  <option>Select an option</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
<textarea class="form-control" rows="3" placeholder="Textarea"></textarea>`;

const gridFormCode = `<!-- Grid-based form layout -->
<form>
  <div class="row g-3">
    <div class="col-md-6">
      <label for="firstName" class="form-label">First name</label>
      <input type="text" class="form-control" id="firstName">
    </div>
    <div class="col-md-6">
      <label for="lastName" class="form-label">Last name</label>
      <input type="text" class="form-control" id="lastName">
    </div>
    <div class="col-12">
      <label for="address" class="form-label">Address</label>
      <input type="text" class="form-control" id="address" placeholder="1234 Main St">
    </div>
    <div class="col-md-6">
      <label for="city" class="form-label">City</label>
      <input type="text" class="form-control" id="city">
    </div>
    <div class="col-md-4">
      <label for="state" class="form-label">State</label>
      <select class="form-select" id="state">
        <option>Choose...</option>
      </select>
    </div>
    <div class="col-md-2">
      <label for="zip" class="form-label">Zip</label>
      <input type="text" class="form-control" id="zip">
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary">Submit form</button>
    </div>
  </div>
</form>`;

export default function Forms() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <h1 className="mb-3 fw-normal" style={{ color: '#0f172a', fontSize: 'clamp(1.8rem,4vw,2.5rem)' }}>Forms</h1>
          <p className="text-muted mb-5" style={{ lineHeight: 1.7, fontSize: 'clamp(0.95rem,2vw,1.1rem)' }}>
            Rence Material styles Bootstrap's form controls with Material Design aesthetics. All <code>.form-control</code> elements inherit Roboto, proper material focus rings, and consistent spacing.
          </p>

          <div id="overview" className="mb-5">
            <h2 className="h4 fw-bold mb-4 text-dark">Overview</h2>

            {/* 1. DEMO */}
            <div className="bg-white p-5 rounded-4 shadow-sm border border-bottom-0">
               <div className="mx-auto" style={{ maxWidth: '450px' }}>
                 <form onSubmit={e => e.preventDefault()}>
                    <div className="mb-4">
                      <label className="form-label fw-bold small text-uppercase" style={{ color: '#004d40' }}>Email address</label>
                      <input type="email" className="form-control" placeholder="name@example.com" />
                      <div className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-4">
                      <label className="form-label fw-bold small text-uppercase" style={{ color: '#004d40' }}>Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="mb-4 form-check">
                      <input type="checkbox" className="form-check-input" id="demo-remember" />
                      <label className="form-check-label" htmlFor="demo-remember">Remember me</label>
                    </div>
                    <button type="button" className="btn btn-primary px-4 rounded-pill">Submit</button>
                 </form>
               </div>
            </div>

            {/* 2. DESCRIPTION */}
            <div className="p-4 border border-top-0 bg-light-subtle mb-0">
              <p className="text-muted small mb-0" style={{ lineHeight: 1.6 }}>
                Rence Material styles Bootstrap's form controls with high-fidelity Material Design aesthetics. Use <code>.form-label</code>, <code>.form-control</code>, and <code>.form-text</code> for proper structure.
              </p>
            </div>

            {/* 3. CODE */}
            <CodeBlock code={overviewCode} language="HTML" />
          </div>

          <div id="controls" className="mb-5">
            <h2 className="h4 fw-bold mb-4 text-dark">Form controls</h2>

            {/* 1. DEMO */}
            <div className="bg-white p-5 rounded-4 shadow-sm border border-bottom-0">
              <div className="row g-4">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Default input" />
                </div>
                <div className="col-md-6">
                   <select className="form-select">
                    <option>Select an option</option>
                    <option>Option 1</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea className="form-control" rows={3} placeholder="Textarea"></textarea>
                </div>
              </div>
            </div>

            {/* 2. DESCRIPTION */}
            <div className="p-4 border border-top-0 bg-light-subtle mb-0">
              <p className="text-muted small mb-0" style={{ lineHeight: 1.6 }}>
                Standard input elements are refined with Material-style focus rings and state feedback. Sizing classes like <code>.form-control-lg</code> are fully supported.
              </p>
            </div>

            {/* 3. CODE */}
            <CodeBlock code={controlsCode} language="HTML" />
          </div>

          <div id="grid" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Grid layout</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>Complex forms can be built using Bootstrap's grid system inside a <code>.row.g-3</code> wrapper.</p>
            <div className="bg-light p-4 rounded-top border border-bottom-0">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="grid-first" className="form-label">First name</label>
                    <input type="text" className="form-control" id="grid-first" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="grid-last" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="grid-last" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="grid-addr" className="form-label">Address</label>
                    <input type="text" className="form-control" id="grid-addr" placeholder="1234 Main St" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="grid-city" className="form-label">City</label>
                    <input type="text" className="form-control" id="grid-city" />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="grid-state" className="form-label">State</label>
                    <select className="form-select" id="grid-state"><option>Choose...</option></select>
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="grid-zip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="grid-zip" />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit form</button>
                  </div>
                </div>
              </form>
            </div>
            <CodeBlock code={gridFormCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Contents</div>
            <ul className="nav flex-column">
              {[['#overview','Overview'],['#controls','Form controls'],['#grid','Grid layout']].map(([href,label])=>(
                <li key={href} className="nav-item"><a className="nav-link px-0 py-1" href={href} style={{ color: '#475569', fontSize: '0.88rem' }}>{label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
