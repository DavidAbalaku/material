'use client';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const drawerCode = `<!-- Standard Navigation Drawer (Permanent or Persistent) -->
<div class="nav-drawer shadow-sm bg-white" style="width:280px; height:100vh;">
  <div class="drawer-header px-4 py-4 d-flex align-items-center gap-3">
    <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style="width:40px;height:40px;">R</div>
    <div>
      <h6 class="mb-0 fw-bold">Rence Material</h6>
      <small class="text-muted">v1.5.0</small>
    </div>
  </div>
  
  <div class="drawer-content py-2">
    <div class="px-4 py-2 small fw-bold text-uppercase text-muted" style="letter-spacing:0.1em; font-size:0.7rem;">Main</div>
    <ul class="nav flex-column mb-3">
      <li class="nav-item">
        <a class="nav-link active d-flex align-items-center gap-3 px-4 py-2" href="#">
          <i class="material-icons">dashboard</i> Dashboard
        </a>
      </li>
      <li class="nav-item px-2">
        <a class="nav-link d-flex align-items-center gap-3 px-3 py-2 text-dark rounded-pill" href="#">
          <i class="material-icons">people</i> Team
        </a>
      </li>
    </ul>
  </div>
</div>`;

const modalDrawerCode = `<!-- Modal Navigation Drawer (Triggered by hamburger) -->
<div class="modal fade modal-drawer" id="navDrawer" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down ps-0 ms-0" style="max-width:300px;">
    <div class="modal-content h-100 rounded-0 border-0">
      <!-- Content same as above -->
    </div>
  </div>
</div>`;

export default function NavigationDrawer() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <div className="mb-5 pb-3">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#1a73e8 !important' }}>Navigation Drawer</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted opacity-75 mb-0" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                 Navigation drawers provide access to destinations and app functionality, such as switching accounts. They can be permanent, persistent, or modal.
              </p>
              <Scribble text="Access all areas!" arrow="left" />
            </div>
          </div>

          {/* ── STANDARD DRAWER ── */}
          <div id="standard" className="mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="h4 fw-light mb-0 text-dark">Standard Drawer</h2>
              <Scribble text="Persistent sidebar" arrow="left" className="d-none d-md-flex" />
            </div>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>A permanent drawer is always visible on the side of the screen. In M3, active states use a <strong>pill-shaped</strong> highlight.</p>
            
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 d-flex justify-content-center border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                <div className="bg-white shadow-lg rounded-4 overflow-hidden d-flex flex-column" style={{ width: '280px', height: '400px' }}>
                  <div className="px-4 py-4 d-flex align-items-center gap-3 border-bottom">
                    <div className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold" style={{ width: '40px', height: '40px', background: '#1a73e8' }}>R</div>
                    <div>
                      <h6 className="mb-0 fw-bold">Rence</h6>
                      <small className="text-muted">Pro Edition</small>
                    </div>
                  </div>
                  <div className="flex-grow-1 py-3 px-2">
                    <div className="px-3 py-2 small fw-bold text-uppercase text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.65rem' }}>Core</div>
                    <nav className="nav flex-column mb-3">
                      <a className="nav-link px-3 py-2 d-flex align-items-center gap-3 active rounded-pill mb-1" href="#" style={{ color: '#ffffff', background: '#1a73e8' }}>
                        <i className="material-icons">home</i> Home
                      </a>
                      <a className="nav-link px-3 py-2 d-flex align-items-center gap-3 text-dark rounded-pill hover-light" href="#">
                        <i className="material-icons text-muted">history</i> Activity
                      </a>
                    </nav>
                    <div className="px-3 py-2 small fw-bold text-uppercase text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.65rem' }}>Management</div>
                    <nav className="nav flex-column">
                      <a className="nav-link px-3 py-2 d-flex align-items-center gap-3 text-dark rounded-pill hover-light" href="#">
                        <i className="material-icons text-muted">description</i> Invoices
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">
                  Standard Material 3 drawers use <strong>280px</strong> width and rounded corner pill-shapes for active navigation items.
                </p>
                <Scribble text="Google Style Pill!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={drawerCode} language="HTML" />
          </div>

          <div id="modal" className="mb-5">
            <h2 className="h4 fw-light mb-4 text-dark">Modal Drawer</h2>
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 rounded-top d-flex justify-content-center border-bottom">
                 <button className="btn btn-fab btn-fab-extended shadow-sm" type="button">
                   <i className="material-icons">menu_open</i>
                   <span className="fw-medium">Open Drawer</span>
                 </button>
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">On mobile, drawers slide in over content. Use our <code>.btn-fab</code> to trigger critical navigation.</p>
                <Scribble text="Mobile friendly!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={modalDrawerCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Navigation</div>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary" href="#standard">STANDARD DRAWER</a></li>
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary" href="#modal">MODAL DRAWER</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <style jsx>{`
        .hover-primary:hover { color: #1a73e8 !important; }
        .hover-light:hover { background-color: rgba(0,0,0,0.04); }
      `}</style>
    </div>
  );
}
