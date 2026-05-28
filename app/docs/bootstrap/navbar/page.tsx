'use client';
import CodeBlock from '@/app/components/CodeBlock';
import Scribble from '@/app/components/Scribble';

const navbarCode = `<!-- Material-style Navbar / App Bar -->
<nav class="navbar navbar-expand-md navbar-dark shadow-sm" style="background-color: #152d61;">
  <div class="container-fluid px-4">
    <!-- Brand -->
    <a class="navbar-brand d-flex align-items-center gap-2 fw-normal" href="#">
      <div class="bg-white rounded-circle d-flex align-items-center justify-content-center" style="width:28px;height:28px;">
        <span style="color:#152d61;font-size:15px;font-weight:700;">M</span>
      </div>
      Rence Material
    </a>

    <!-- Hamburger for mobile -->
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Nav links -->
    <div class="collapse navbar-collapse" id="navbarContent">
      <ul class="navbar-nav ms-auto mb-2 mb-md-0 align-items-md-center gap-1">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Docs</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Examples</a></li>
      </ul>
    </div>
  </div>
</nav>`;

export default function Navbar() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <div className="mb-5 pb-3">
            <h1 className="mb-2 fw-light display-4 text-primary" style={{ letterSpacing: '-0.04em', color: '#152d61 !important' }}>Navbar</h1>
            <div className="d-flex flex-wrap align-items-end gap-3">
              <p className="text-muted opacity-75 mb-0" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                 The Navbar is a powerful, responsive navigation header. Rence Material applies Google Blue and Material elevation to all Bootstrap navbars.
              </p>
              <Scribble text="Primary Navigation!" arrow="left" />
            </div>
          </div>

          <div id="dark" className="mb-5">
            <h2 className="h4 fw-light mb-4 text-dark">Standard App Bar</h2>
            <div className="card shadow-none border rounded-4 overflow-hidden mb-0">
              <div className="bg-light p-4 p-md-5 border-bottom" style={{ backgroundColor: '#f1f5f9' }}>
                <nav className="navbar navbar-expand-md navbar-dark shadow-sm py-2 rounded-3 w-100" style={{ backgroundColor: '#152d61' }}>
                  <div className="container-fluid px-4">
                    <a className="navbar-brand d-flex align-items-center gap-2 fw-normal" href="#">
                      <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px' }}>
                        <span style={{ color: '#152d61', fontSize: '15px', fontWeight: 700 }}>M</span>
                      </div>
                      Rence Material
                    </a>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#demoNavbar">
                      <i className="material-icons text-white">menu</i>
                    </button>
                    <div className="collapse navbar-collapse" id="demoNavbar">
                      <ul className="navbar-nav ms-auto mb-2 mb-md-0 align-items-md-center gap-1">
                        <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Docs</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Examples</a></li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="p-4 bg-light-subtle">
                <p className="text-secondary small mb-2">The navbar uses a solid primary color and elevated shadow to stand out as the top-level app surface.</p>
                <Scribble text="Elevated Header!" arrow="left" />
              </div>
            </div>
            <CodeBlock code={navbarCode} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #152d61', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Navigation</div>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a className="nav-link p-0 text-secondary hover-primary transition-all" href="#dark">STANDARD BAR</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <style jsx>{`
        .hover-primary:hover { color: #152d61 !important; }
        .transition-all { transition: all 0.2s ease-in-out; }
      `}</style>
    </div>
  );
}
