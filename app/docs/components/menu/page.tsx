'use client';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const menuCode = `<!-- Simple Material Menu -->
<div class="dropdown">
  <button class="btn btn-icon rounded-circle" type="button" data-bs-toggle="dropdown">
    <i class="material-icons">more_vert</i>
  </button>
  <ul class="dropdown-menu shadow-lg border-0 py-2" style="border-radius: 12px;">
    <li><a class="dropdown-item d-flex align-items-center gap-3 py-2" href="#"><i class="material-icons text-muted">edit</i> Edit</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item d-flex align-items-center gap-3 py-2 text-primary" href="#"><i class="material-icons">share</i> Share</a></li>
  </ul>
</div>`;

export default function Menu() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <div className="mb-5 pb-3">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#1a73e8 !important' }}>Menu</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted opacity-75 mb-0" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                 Menus display a list of choices on temporary surfaces. They appear when users interact with a button or other control.
              </p>
              <Scribble text="Contextual Actions!" arrow="left" />
            </div>
          </div>

          <div id="simple" className="mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="h4 fw-light mb-0 text-dark">Simple Menu</h2>
              <Scribble text="Overflow items" arrow="left" className="d-none d-md-flex" />
            </div>
            
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 d-flex justify-content-center border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                 <div className="dropdown">
                   <button className="btn btn-white shadow-sm rounded-circle d-flex align-items-center justify-content-center p-2" style={{ width: '40px', height: '40px' }} type="button" data-bs-toggle="dropdown">
                     <i className="material-icons text-primary">more_vert</i>
                   </button>
                   <ul className="dropdown-menu shadow-lg border-0 py-2 mt-2" style={{ borderRadius: '12px', minWidth: '160px' }}>
                     <li><a className="dropdown-item d-flex align-items-center gap-3 py-2 px-3" href="#"><i className="material-icons opacity-75" style={{ fontSize: '20px' }}>content_copy</i> Copy link</a></li>
                     <li><a className="dropdown-item d-flex align-items-center gap-3 py-2 px-3" href="#"><i className="material-icons opacity-75" style={{ fontSize: '20px' }}>file_download</i> Download</a></li>
                     <li><hr className="dropdown-divider opacity-10" /></li>
                     <li><a className="dropdown-item d-flex align-items-center gap-3 py-2 px-3 text-primary" href="#"><i className="material-icons" style={{ fontSize: '20px' }}>star</i> Mark as favorite</a></li>
                   </ul>
                 </div>
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">Build menus using Bootstrap 5's <code>.dropdown</code>. Ensure high elevation for clarity.</p>
                <Scribble text="Floating Surfaces!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={menuCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Navigation</div>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#simple">SIMPLE MENU</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <style jsx>{`
        .hover-primary:hover { color: #1a73e8 !important; }
        .transition-all { transition: all 0.2s ease-in-out; }
      `}</style>
    </div>
  );
}
