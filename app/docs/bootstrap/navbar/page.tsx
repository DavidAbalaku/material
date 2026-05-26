'use client';
import CodeBlock from '@/app/components/CodeBlock';

const navbarCode = `<!-- Material-style Navbar / App Bar -->
<nav class="navbar navbar-expand-md navbar-dark shadow-sm" style="background-color: #004d40;">
  <div class="container-fluid px-4">
    <!-- Brand -->
    <a class="navbar-brand d-flex align-items-center gap-2 fw-normal" href="#">
      <div class="bg-white rounded-circle d-flex align-items-center justify-content-center" style="width:28px;height:28px;">
        <span style="color:#004d40;font-size:15px;font-weight:700;">M</span>
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
      <div class="ms-md-3">
        <button class="btn rounded-circle d-flex align-items-center justify-content-center p-2 text-white border-0" style="background:rgba(255,255,255,0.15);" type="button">
          <i class="material-icons" style="font-size:20px;">search</i>
        </button>
      </div>
    </div>
  </div>
</nav>`;

const navbarLightCode = `<!-- Light navbar variant -->
<nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm border-bottom">
  <div class="container-fluid px-4">
    <a class="navbar-brand fw-medium" href="#">Brand</a>
    <ul class="navbar-nav ms-auto">
      <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
    </ul>
  </div>
</nav>`;

export default function Navbar() {
  return (
    <div className="container-fluid px-2 px-md-3">
      <div className="row g-4 g-lg-5">
        <div className="col-12 col-xl-9 overflow-hidden">
          <h1 className="mb-3 fw-normal" style={{ color: '#0f172a', fontSize: 'clamp(1.8rem,4vw,2.5rem)' }}>Navbar</h1>
          <p className="text-muted mb-5" style={{ lineHeight: 1.7, fontSize: 'clamp(0.95rem,2vw,1.1rem)' }}>
            The Navbar (App Bar in Material Design) is a powerful, responsive navigation header. Rence Material applies the Emerald dark background and Material elevation automatically to the Bootstrap <code>.navbar</code>.
          </p>

          <div id="dark" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Standard App Bar</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>The primary navigation component. Consistent with Material Design 3, it uses a solid surface color and elevated shadow.</p>
            <div className="rounded-top border border-bottom-0 overflow-hidden">
              <nav className="navbar navbar-expand-md navbar-dark shadow-sm py-2" style={{ backgroundColor: '#004d40' }}>
                <div className="container-fluid px-4">
                  <a className="navbar-brand d-flex align-items-center gap-2 fw-normal" href="#">
                    <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px' }}>
                      <span style={{ color: '#004d40', fontSize: '15px', fontWeight: 700 }}>M</span>
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
            <CodeBlock code={navbarCode} language="HTML" />
          </div>

          {/* ── CENTERED LOGO ── */}
          <div id="centered" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Centered Logo & Right Toggle</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>A premium layout where the brand is centered, common in high-end landing pages and minimalist applications.</p>
            <div className="rounded-top border border-bottom-0 overflow-hidden bg-white shadow-sm">
              <nav className="navbar navbar-expand-lg navbar-light py-3">
                <div className="container-fluid px-4 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center d-none d-lg-flex" style={{ width: '200px' }}>
                    <ul className="navbar-nav gap-3">
                      <li className="nav-item"><a className="nav-link p-0 small text-uppercase fw-bold text-muted" href="#">Shop</a></li>
                      <li className="nav-item"><a className="nav-link p-0 small text-uppercase fw-bold text-muted" href="#">About</a></li>
                    </ul>
                  </div>
                  
                  <a className="navbar-brand mx-auto d-flex align-items-center gap-2 fw-bold" href="#" style={{ color: '#004d40', fontSize: '1.4rem' }}>
                    <div className="rounded-3 d-flex align-items-center justify-content-center text-white" style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #1a73e8, #174ea6)' }}>R</div>
                    RENCE
                  </a>

                  <div className="d-flex align-items-center justify-content-end" style={{ width: '200px' }}>
                    <button className="btn btn-link text-dark p-2 d-none d-lg-block"><i className="material-icons">search</i></button>
                    <button className="btn btn-link text-dark p-2 d-none d-lg-block"><i className="material-icons">shopping_bag</i></button>
                    <button className="navbar-toggler border-0 p-1 ms-2" type="button">
                      <i className="material-icons" style={{ fontSize: '28px' }}>menu</i>
                    </button>
                  </div>
                </div>
              </nav>
            </div>
            <CodeBlock code={`<!-- Centered Logo Layout -->
<nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
  <div class="container-fluid px-4 d-flex justify-content-between align-items-center">
    <!-- Left actions (hidden on mobile) -->
    <div class="d-none d-lg-flex" style="width: 200px;">
      <ul class="navbar-nav gap-3">
        <li class="nav-item"><a class="nav-link p-0 small text-uppercase fw-bold text-muted" href="#">Shop</a></li>
        <li class="nav-item"><a class="nav-link p-0 small text-uppercase fw-bold text-muted" href="#">About</a></li>
      </ul>
    </div>
    
    <!-- BRAND (Centered) -->
    <a class="navbar-brand mx-auto d-flex align-items-center gap-2 fw-bold" href="#" style="color:#004d40;">
      <div class="rounded-3 bg-primary text-white" style="width:32px;height:32px;">R</div>
      RENCE
    </a>

    <!-- Right actions + Toggle -->
    <div class="d-flex align-items-center justify-content-end" style="width: 200px;">
      <i class="material-icons me-3 d-none d-lg-block">search</i>
      <button class="navbar-toggler border-0 p-1" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
        <i class="material-icons" style="font-size:28px;">menu</i>
      </button>
    </div>
  </div>
</nav>`} language="HTML" />
          </div>

          <div id="light" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Search & User Profile</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>A functional variant featuring an integrated search bar and user profile actions.</p>
            <div className="rounded-top border border-bottom-0 overflow-hidden bg-white shadow-sm">
              <nav className="navbar navbar-expand-md navbar-light py-2">
                <div className="container-fluid px-4">
                  <a className="navbar-brand fw-medium" href="#">Dashboard</a>
                  <div className="d-none d-md-flex mx-auto" style={{ width: '40%' }}>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-0 ps-3"><i className="material-icons text-muted" style={{ fontSize: '20px' }}>search</i></span>
                      <input type="text" className="form-control bg-light border-0 py-2" placeholder="Search..." style={{ fontSize: '0.9rem' }} />
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <button className="btn btn-link text-muted p-2"><i className="material-icons">notifications</i></button>
                    <div className="bg-success rounded-circle overflow-hidden ms-2" style={{ width: '32px', height: '32px' }}>
                      <img src="https://ui-avatars.com/api/?name=Admin&background=004d40&color=fff" alt="User" className="w-100" />
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <CodeBlock code={navbarLightCode} language="HTML" />
          </div>

          {/* ── PROGRESS NAVBAR ── */}
          <div id="progress-nav" className="mb-5">
            <h2 className="fw-normal mb-3" style={{ color: '#0f172a', fontSize: 'clamp(1.4rem,3vw,1.75rem)' }}>Reading Progress Navbar</h2>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.6 }}>A premium documentation header featuring a reading progress indicator at the bottom edge.</p>
            <div className="rounded-top border border-bottom-0 overflow-hidden bg-white shadow-sm position-relative">
              <nav className="navbar navbar-light py-2">
                <div className="container-fluid px-4 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <i className="material-icons text-muted">menu</i>
                    <span className="fw-medium text-dark small text-uppercase" style={{ letterSpacing: '0.05em' }}>Component: Navbar</span>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <span className="text-muted small">60% Read</span>
                    <button className="btn btn-outline-primary btn-sm rounded-pill px-3 py-1" style={{ fontSize: '0.75rem' }}>SHARE</button>
                  </div>
                </div>
                <div className="position-absolute bottom-0 start-0 h-2px bg-primary" style={{ width: '60%', height: '2px', transition: 'width 0.3s ease' }}></div>
              </nav>
            </div>
            <CodeBlock code={`<!-- Navbar with Progress Indicator -->
<nav class="navbar navbar-light bg-white shadow-sm position-relative">
  <div class="container-fluid">
    <span class="navbar-brand">Read Mode</span>
  </div>
  <!-- Progress Bar (updates via JS on scroll) -->
  <div class="position-absolute bottom-0 start-0 bg-primary" style="height:2px; width:60%;"></div>
</nav>`} language="HTML" />
          </div>
        </div>

        <div className="d-none d-xl-block col-xl-3">
          <nav className="sticky-top" style={{ top: '100px', borderLeft: '2px solid #1a73e8', paddingLeft: '1.5rem' }}>
            <div className="small fw-bold text-uppercase mb-3 text-muted" style={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>Contents</div>
            <ul className="nav flex-column">
              {[['#dark','Standard App Bar'],['#centered','Centered Logo'],['#light','Search UI'],['#progress-nav','Reading Progress']].map(([href,label])=>(
                <li key={href} className="nav-item"><a className="nav-link px-0 py-1" href={href} style={{ color: '#475569', fontSize: '0.88rem' }}>{label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
